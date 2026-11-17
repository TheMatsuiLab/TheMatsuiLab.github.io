# Matsui Lab Website

Static site for GitHub Pages (no build step). Live at https://thematsuilab.github.io/.

## Pages

- `index.html`: home
- `research.html`: research programs, figures and references
- `team.html`: PI and lab members
- `members/*.html`: one page per member (`member-template.html` is a starting point; `postdoc-1`, `postbac-1`, `undergrad-1` and `alumni-1` are the same template with the role filled in)
- `publications.html`: full publication list with a search filter
- `contact.html`: email, phone, building and mailing address
- `404.html`: page shown for broken links
- `sitemap.xml`, `robots.txt`: help search engines find the pages

## Editing

- Text lives in the HTML files. The header and footer are repeated on every page, so change all pages if you edit them (the footer also carries an "Updated" month).
- Styling: `assets/css/style.css`. Colors and fonts are set at the top in `:root` (Hunter purple and gold), with a dark-mode block below it.
- Behaviour: `assets/js/main.js` (mobile menu and publication filter).
- Images: `assets/img/`. `social-card.jpg` is the preview image shown when the site is shared. Paper PDFs: `assets/papers/`.

## Adding a member

1. Copy `members/member-template.html` to a new name, e.g. `members/jane-doe.html`, and fill it in. Each row of the profile is a `<div><dt>Label</dt><dd>Text</dd></div>` block; delete the rows you do not need, and delete the "template page" notice at the top.
2. In `team.html`, copy one `<li class="person">…</li>` line into the right group and change the link, initials, name and role. To start a new group (for example Postdoctoral researchers or Alumni), copy a whole `<div class="team-group">…</div>` block and change its heading.
3. Remove `<meta name="robots" content="noindex">` from the new page and add its address to `sitemap.xml`.

## Adding a paper

Copy one `<li class="pub">…</li>` block in `publications.html` into the right year section (or copy a whole `<section class="pub-year">` for a new year and add the year to the "Jump to year" row), and update the title, authors, journal, DOI, PubMed and PMC links. Then update the paper count: it appears in the heading, description and counter of `publications.html` and twice on the home page (`index.html`), which also lists the four most recent papers.
