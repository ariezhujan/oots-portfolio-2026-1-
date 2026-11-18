# Memasang overlay ke starter OOTS

1. Hapus zip lama, upload zip baru, lalu: `unzip -o oots-portfolio-overlay*.zip && rm oots-portfolio-overlay*.zip`
2. `cp .env.example .env`, isi `RESEND_API_KEY` dan `RESEND_TO`.
3. `bun run dev`, lalu `bun run check` dan `bun run build`.

Data konten ada di `src/lib/data.ts` (cari TODO). Gambar di `static/images/`, gim di `static/games/`.
