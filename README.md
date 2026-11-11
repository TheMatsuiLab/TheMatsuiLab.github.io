# Matsui Lab Website

Static site for GitHub Pages (no build step). Live at https://thematsuilab.github.io/.

## Pages

- `index.html`: home
- `research.html`: research programs, figures and references
- `team.html`: PI and lab members
- `members/*.html`: one page per member (`member-template.html` is a starting point)
- `publications.html`: full publication list with a search filter
- `contact.html`: email, phone, building and mailing address
- `404.html`: page shown for broken links

## Editing

- Text lives in the HTML files. The header and footer are repeated on every page, so change all pages if you edit them.
- Styling: `assets/css/style.css` (colors are set at the top in `:root`, with a dark-mode block below it).
- Behaviour: `assets/js/main.js` (mobile menu and publication filter).
- Images: `assets/img/`. Paper PDFs: `assets/papers/`.

## Adding a member

1. Copy `members/member-template.html` to a new name, e.g. `members/postdoc-2.html`, and fill it in.
2. In `team.html`, replace a "To be added" card in the right section with a card linking to the new page (copy the Sviatoslav Pisarev card as a model).
3. Remove `<meta name="robots" content="noindex">` from the new page.

## Adding a paper

Copy one `<li class="pub">…</li>` block in `publications.html` into the right year section, and update the title, authors, journal, DOI and PubMed links. Update the paper count on the home and publications pages.
