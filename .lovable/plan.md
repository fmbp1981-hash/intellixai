

## Update Favicon to IntelliX.AI Logo

### What will change
- Copy the uploaded IntelliX.AI logo to the `public/` directory as the new favicon
- Update `index.html` to reference the new favicon and remove the default Lovable one
- Update the page title and meta tags to reflect "IntelliX.AI" instead of "Lovable App"

### Steps
1. Copy `user-uploads://Logotipo-removebg-preview-2.png` to `public/favicon.png`
2. Update `index.html`:
   - Add `<link rel="icon" href="/favicon.png" type="image/png">`
   - Change `<title>` to "IntelliX.AI"
   - Update Open Graph and Twitter meta tags (title, description, image) to reflect IntelliX.AI branding
   - Remove the old `favicon.ico` reference

