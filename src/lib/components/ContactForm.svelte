<script lang="ts">
	import { enhance } from '$app/forms';
	import { validateContact, type ContactErrors } from '$lib/validation';

	type FormResult = {
		success?: boolean;
		message?: string;
		errors?: ContactErrors;
		values?: { name: string; email: string; message: string };
	} | null;

	let { form }: { form?: FormResult } = $props();

	let loading = $state(false);
	let clientErrors = $state<ContactErrors>({});
	const errors = $derived({ ...(form?.errors ?? {}), ...clientErrors });

	const field = 'mt-2 w-full border bg-bg px-3 py-2.5 outline-none focus-visible:border-accent';
</script>

<form
	method="POST"
	action="?/contact"
	novalidate
	class="max-w-xl space-y-5"
	use:enhance={({ formData, cancel }) => {
		clientErrors = validateContact({
			name: String(formData.get('name') ?? '').trim(),
			email: String(formData.get('email') ?? '').trim(),
			message: String(formData.get('message') ?? '').trim()
		});
		if (Object.keys(clientErrors).length > 0) {
			cancel();
			return;
		}
		loading = true;
		return async ({ result, update }) => {
			await update({ reset: result.type === 'success' });
			loading = false;
		};
	}}
>
	<div>
		<label for="name" class="font-medium">Nama</label>
		<input id="name" name="name" type="text" placeholder="Masukkan nama kamu" autocomplete="name" value={form?.values?.name ?? ''}
			aria-invalid={errors.name ? 'true' : undefined} aria-describedby={errors.name ? 'name-err' : undefined}
			class="{field} {errors.name ? 'border-red-500' : 'border-line-strong'}" />
		{#if errors.name}<p id="name-err" class="mt-1 text-sm text-red-500">{errors.name}</p>{/if}
	</div>

	<div>
		<label for="email" class="font-medium">Email</label>
		<input id="email" name="email" type="email" placeholder="Masukkan alamat email kamu" autocomplete="email" value={form?.values?.email ?? ''}
			aria-invalid={errors.email ? 'true' : undefined} aria-describedby={errors.email ? 'email-err' : undefined}
			class="{field} {errors.email ? 'border-red-500' : 'border-line-strong'}" />
		{#if errors.email}<p id="email-err" class="mt-1 text-sm text-red-500">{errors.email}</p>{/if}
	</div>

	<div>
		<label for="message" class="font-medium">Pesan</label>
		<textarea id="message" name="message" rows="6" placeholder="Tuliskan pesan yang ingin disampaikan..." value={form?.values?.message ?? ''}
			aria-invalid={errors.message ? 'true' : undefined} aria-describedby={errors.message ? 'message-err' : undefined}
			class="{field} {errors.message ? 'border-red-500' : 'border-line-strong'}"></textarea>
		{#if errors.message}<p id="message-err" class="mt-1 text-sm text-red-500">{errors.message}</p>{/if}
	</div>

	<button type="submit" class="btn btn-primary" disabled={loading}>
		{loading ? 'Sedang mengirim pesan...' : 'Kirim Pesan'}
	</button>

	<div aria-live="polite" role="status">
		{#if form?.message && !loading}
			<p class="border-l-4 px-3 py-2 {form.success ? 'border-accent text-fg' : 'border-red-500 text-red-500'}">
				{form.message}
			</p>
		{/if}
	</div>
</form>
