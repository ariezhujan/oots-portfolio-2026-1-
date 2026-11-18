# CP 00 — Start

Titik nol. Belum ada halaman, belum ada warna. Yang ada baru alatnya.

## Apa yang berubah

- SvelteKit, Tailwind v4, dan TypeScript sudah terpasang dan jalan.
- Warna dan font dikumpulkan di satu file: `src/routes/layout.css`.
- Halaman masih kosong, cuma satu `<h1>`.

## Salin ini

Kalau `bun run dev` belum menampilkan apa pun, salin tiga file ini utuh.

`src/routes/layout.css`

```css
@import 'tailwindcss';
@import '@fontsource-variable/geologica';
@import '@fontsource/ibm-plex-mono/400.css';
@import '@fontsource/ibm-plex-mono/500.css';

@custom-variant dark (&:where(.dark, .dark *));

:root {
	--bg: #fcfcfa;
	--surface: #f4f4f1;
	--line: #e2e2dc;
	--ink: #12120f;
	--muted: #6b6b62;
	--primary: #1d3fd1;
	--on-primary: #fcfcfa;
	--success: #047857;
	--danger: #b91c1c;
}

@theme inline {
	--color-bg: var(--bg);
	--color-surface: var(--surface);
	--color-line: var(--line);
	--color-ink: var(--ink);
	--color-muted: var(--muted);
	--color-primary: var(--primary);
	--color-on-primary: var(--on-primary);
	--color-success: var(--success);
	--color-danger: var(--danger);
	--font-sans: 'Geologica Variable', sans-serif;
	--font-mono: 'IBM Plex Mono', monospace;
	--radius-xs: 2px;
}
```

`src/routes/+page.svelte`

```svelte
<main class="min-h-dvh bg-bg px-6 py-16 text-ink lg:px-24">
	<p class="font-mono text-[11px] tracking-[1.1px] text-muted">CP 00 — START</p>
	<h1
		class="mt-6 text-[62px] leading-[0.88] font-medium tracking-[-1.6px] lg:text-[232px] lg:tracking-[-9px]"
	>
		Halo
	</h1>
</main>
```

## Bandingkan

Belum ada pembanding. Ini titik nol.

## Tantangan

Kalau semuanya sudah jalan sebelum waktunya: ganti `--primary` dengan warna
pilihan kalian, lalu lihat semua yang memakai `text-primary` ikut berubah.
Itulah gunanya token.

## Kalau macet

| Gejala | Sebab |
|---|---|
| `bun: command not found` | bun belum terpasang. Ikuti bun.sh, lalu tutup dan buka terminal. |
| Port 5173 sudah dipakai | `bun run dev -- --port 5174` |
| Halaman putih, tanpa error | Buka Console di DevTools. Biasanya ada error di terminal, bukan di browser. |
| Font tidak berubah | `bun install` belum selesai, atau `layout.css` tidak di-import di `+layout.svelte`. |

## Verifikasi

```sh
bun run check
bun run dev
```

`check` harus hijau, dan `localhost:5173` harus menampilkan satu kata besar.
