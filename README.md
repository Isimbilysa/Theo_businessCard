# Digital Business Card

A mobile-first, single-page digital business card designed to be opened from a QR code on a physical card. Built with plain HTML, CSS, and minimal JavaScript. No frameworks.

## Project structure

```
digital-business-card/
├── index.html      # Main page
├── styles.css      # Layout and design
├── script.js       # Save Contact button (vCard download)
├── contact.vcf     # Contact file for "Save Contact"
├── profile.jpg     # Your profile photo (you add this)
└── README.md       # This file
```

## Quick start

1. Add your photo as `profile.jpg` in this folder (see below).
2. Edit `index.html` and `contact.vcf` with your name, title, company, phone, email, and optional website.
3. Deploy to Vercel (see below).
4. Generate a QR code that points to your deployed URL.

---

## How to change the profile picture

1. Use a square or nearly square photo (e.g. 400×400 px or 600×600 px) for best results.
2. Save it as **`profile.jpg`** in the `digital-business-card` folder (same folder as `index.html`).
3. Replace any existing `profile.jpg` if you had one.

Supported formats: JPG, PNG, or WebP. The page references `profile.jpg`; if you prefer another name (e.g. `photo.png`), update the `src` of the profile image in `index.html`:

```html
<img class="card__photo" src="photo.png" alt="Profile photo" width="120" height="120">
```

---

## How to update contact information

### On the web page (`index.html`)

Edit these parts:

- **Name:** The `<h1 class="card__name">` text.
- **Job title:** The `<p class="card__title">` text.
- **Company:** The `<p class="card__company">` text.
- **Phone:** Every `href="tel:..."` and the visible phone text in `.card__contact`.
- **Email:** Every `href="mailto:..."` and the visible email text.
- **Website (optional):** The link with class `card__link--website` — set `href` and the link text. Remove or hide that `<a>` if you don’t want a website.

Make sure the **Call** and **Send Email** buttons use the same `tel:` and `mailto:` URLs as the contact section.

### In the vCard (`contact.vcf`)

So that “Save Contact” adds the correct details to the phone, edit `contact.vcf` to match:

- **Full name:** `FN:` and `N:` lines.
- **Phone:** `TEL;TYPE=CELL:` line.
- **Email:** `EMAIL:` line.
- **Organization:** `ORG:` line.
- **Title:** `TITLE:` line.

Example:

```
BEGIN:VCARD
VERSION:3.0
FN:Jane Doe
N:Doe;Jane;;;
TEL;TYPE=CELL:+250788123456
EMAIL:jane@company.com
ORG:Company Name
TITLE:Job Title
END:VCARD
```

Keep the structure (BEGIN/END, VERSION, line endings). After editing, save the file and redeploy so the downloaded vCard is up to date.

---

## How to edit the vCard

- Open `contact.vcf` in any text editor.
- Change the values after each field name (e.g. after `FN:`, `TEL:`, `EMAIL:`, `ORG:`, `TITLE:`).
- Do not remove `BEGIN:VCARD`, `VERSION:3.0`, or `END:VCARD`.
- Save with UTF-8 encoding.
- Redeploy the site so the “Save Contact” button serves the updated file.

---

## How to deploy the project to Vercel

### Option A: Deploy with Vercel CLI

1. Install the Vercel CLI (if needed):
   ```bash
   npm i -g vercel
   ```
2. In a terminal, go to the project folder:
   ```bash
   cd digital-business-card
   ```
3. Log in and deploy:
   ```bash
   vercel
   ```
4. Follow the prompts (link to your Vercel account, project name, etc.). Vercel will give you a URL like `https://your-project.vercel.app`.

### Option B: Deploy from GitHub

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
3. Click **Add New** → **Project** and import the repository.
4. Set the **Root Directory** to `digital-business-card` if the repo root is the parent folder; otherwise leave as the repo root.
5. Deploy. Vercel will assign a URL like `https://your-project.vercel.app`.

After deployment, use the deployed URL as the target for your QR code.

---

## How to generate a QR code pointing to the deployed page

1. Deploy the site to Vercel and copy the live URL (e.g. `https://your-project.vercel.app`).
2. Use any QR code generator that creates a **URL** QR code:
   - **Online:** e.g. [qr-code-generator.com](https://www.qr-code-generator.com), [goqr.me](https://goqr.me), or search “QR code generator”.
   - **Desktop:** Many design or label tools can generate QR codes from a URL.
3. Enter your exact deployed URL (including `https://`).
4. Download or export the QR image and add it to your physical business card design.

When someone scans the QR code with their phone, they will open your digital business card. The page is mobile-first and works best when opened on a phone.

---

## Tech stack

- **HTML** – Structure and content.
- **CSS** – Layout, typography (DM Sans), responsive design, touch-friendly buttons.
- **JavaScript** – Only for the “Save Contact” button (downloads `contact.vcf`).

No frameworks or build step required.

## License

Use and modify as you like for personal or business use.
