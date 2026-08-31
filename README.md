# Mare di Ravioli

Community website for Mare di Ravioli in Copenhagen.

## Local development

```sh
pnpm install
pnpm dev
```

Open the URL printed by Vite (normally `http://localhost:5173/`). Opening `index.html` directly with a `file://` URL does not run the Vite application.

In development, use the **Development preview** selector in the bottom-right corner to switch the pickup between live, open, sold-out, closed, expired, and missing-form states. You can also link directly to a state with `?previewBatch=open`.

To create an optimized deployable build that keeps this selector:

```sh
pnpm build:preview
pnpm preview
```

The regular `pnpm build` still removes all preview controls. For a dedicated Cloudflare Pages preview project, use `pnpm build:preview` as the build command, `dist` as the output directory, and leave the root directory empty.

## Publishing a pickup

Edit `src/config/batch.config.json` and provide:

- a unique batch ID;
- a future ISO 8601 pickup date with Copenhagen's UTC offset;
- the filling and public location;
- `status: "open"` when the information and form are ready.

An incomplete, invalid, or past open batch automatically fails closed in the browser. The production build also rejects an open batch with a placeholder ID, stale date, missing details, or invalid Tally URL.

## Tally setup

1. Create a Tally form with name, email, optional phone, servings, and optional notes/allergies fields.
2. Make the thank-you message clear that the request was received and still needs organizer confirmation.
3. Add these case-sensitive hidden fields in Tally: `batchId`, `pickupAt`, `pickupDate`, `timezone`, `filling`, and `location`.
4. Copy `.env.example` to `.env.local`.
5. Paste the HTTPS URL from Tally's **Share > Embed** screen into `VITE_TALLY_FORM_URL`.

The Tally API key is not needed and must never be added to this client-side project.

## Social links and imagery

Social URLs are defined in `src/config/social.ts`. Confirm the Facebook page URL before launch.

The current stock photographs are illustrative and have honest alt text. Replace them with permission-cleared Mare di Ravioli community photographs before public launch; the existing social sharing card should remain unchanged unless the brand direction changes.

## Validation

```sh
pnpm typecheck
pnpm test
pnpm build
```

Continuous integration runs the same checks on pull requests and pushes to `main`.
