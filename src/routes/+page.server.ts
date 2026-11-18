import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { validateContact } from '$lib/validation';
import type { Actions } from './$types';

export const actions: Actions = {
	contact: async ({ request, fetch }) => {
		const data = await request.formData();
		const values = {
			name: String(data.get('name') ?? '').trim(),
			email: String(data.get('email') ?? '').trim(),
			message: String(data.get('message') ?? '').trim()
		};

		const errors = validateContact(values);
		if (Object.keys(errors).length > 0) {
			return fail(400, { success: false, message: 'Periksa kembali kolom yang ditandai, lalu kirim ulang.', errors, values });
		}

		const apiKey = env.RESEND_API_KEY;
		const to = env.RESEND_TO;
		if (!apiKey || !to) {
			console.error('Contact form: RESEND_API_KEY or RESEND_TO is not set.');
			return fail(500, { success: false, message: 'Formulir kontak belum siap digunakan. Silakan coba lagi nanti.', values });
		}

		try {
			const res = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
				body: JSON.stringify({
					from: env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>',
					to: [to],
					reply_to: values.email,
					subject: `Pesan portofolio dari ${values.name.replace(/\s+/g, ' ')}`,
					text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
				})
			});
			if (!res.ok) {
				console.error('Resend error', res.status, await res.text());
				return fail(502, { success: false, message: 'Pesan belum berhasil dikirim. Silakan coba kembali.', values });
			}
		} catch (err) {
			console.error('Resend request failed', err);
			return fail(502, { success: false, message: 'Pesan belum berhasil dikirim. Silakan coba kembali.', values });
		}

		return { success: true, message: 'Pesan berhasil dikirim. Terima kasih telah menghubungi saya!' };
	}
};
