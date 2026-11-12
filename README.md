# Arjit Mishra — Think Beyond. Create Beyond.

A responsive personal portfolio with an actual interactive Three.js scene, a second 3D universe, accessible navigation, and reduced-motion/static fallbacks. Personal details that were not supplied are shown as editable prompts rather than invented claims.

## Run locally

No local package installation is required. Three.js is loaded from a version-pinned jsDelivr URL, so an internet connection is needed for the WebGL scenes. Serve this folder over HTTP (ES modules do not run reliably from `file://`):

```powershell
cd arjit-portfolio
python -m http.server 8000
```

Open `http://localhost:8000`. Stop the local server with `Ctrl+C`.

If Python is unavailable, use any static file server or the VS Code Live Server extension. No build step is required.

## Edit the portfolio

- **Name, introduction, headings, education, and journey:** update the corresponding content in `index.html`.
- **Contact details:** the contact section links to Arjit's email (`arjitm658@gmail.com`), phone (`7390002520`), and Instagram (`@_arjit_00`). Add other profiles only when available; use `mailto:address@example.com` for email, `tel:+...` for a phone number, and full `https://` URLs for social profiles.
- **Projects:** replace each editable project prompt in the projects section. Add screenshots under `assets/images/`, reference them with relative paths, and use `loading="lazy"` and meaningful `alt` text. Add only real demo and repository URLs.
- **Profile imagery:** Arjit's profile photo is stored at `assets/images/arjit-profile.png` and appears in the hero and About sections. Update the image `alt` text in `index.html` if you replace it.
- **Services and skills:** edit the relevant text and tags in `index.html`; proficiency levels are intentionally omitted.
- **Visual direction:** the charcoal, warm-neutral, and restrained bronze palette is defined by the custom properties at the top of `css/style.css`. Section layouts and responsive breakpoints follow below.
- **3D objects, lighting, particles, and motion:** edit `js/scene.js`. The hero uses a bronze torus-knot sculpture; the universe uses a small connected sculptural composition. Both scenes share the renderer setup and pause when off-screen. Reduce particle counts or geometry detail for slower devices.
- **Navigation, reveals, pointer effects, and form validation:** edit `js/animations.js`. The form currently validates fields in the browser only; its status explicitly says that no message is sent. Connect a backend or email service before presenting it as a working contact channel.
- **Animated role labels:** edit the `roles` list in `js/animations.js`.

## Libraries and fallbacks

Three.js `0.170.0` is imported from jsDelivr in `js/scene.js`. The dependency is version-pinned and is not bundled locally. If WebGL or the CDN is unavailable, the page logs a warning and keeps a styled static scene in place. On small screens the scene uses fewer particles and a capped pixel ratio. `prefers-reduced-motion` disables continuous scene and pointer-driven animations.

## Deploy

The folder is a static site and can be deployed as-is:

- **GitHub Pages:** if this stays inside the existing repository, publish the repository root and the portfolio will be available at `/arjit-portfolio/` while the current home page remains unchanged. To make Arjit’s site the domain root, put this folder’s contents at the root of a dedicated repository or use a GitHub Actions Pages workflow that uploads this folder as its artifact. Keep the relative `css/` and `js/` paths unchanged.
- **Netlify:** drag and drop the `arjit-portfolio/` folder, or set it as the publish directory for a connected repository. No build command is needed.
- **Custom domain:** add the domain in the hosting provider’s domain settings, then configure the DNS records provided by that host at the domain registrar. Verify domain availability and follow the host’s current DNS and HTTPS guidance.
