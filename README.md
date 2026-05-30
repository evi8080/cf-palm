# CrossFit Athletics Course Page

Single HTML file. Zero backend. Hosted on GitHub Pages for free.

## Setup (2 minutes)

### 1. Create GitHub Token
- GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens**
- Repository access: **Only select repositories** → pick this repo
- Permissions → **Contents** → **Read & Write**
- Generate → copy the token

### 2. Configure the page
- Open `index.html`
- Change `YOUR_GITHUB_USERNAME` (line ~175) to your GitHub username
- Change `YOUR_REPO_NAME` (line ~175) to this repo name
- Change `crossfit2025` (line ~172) to your desired admin password
- Commit and push

### 3. Enable GitHub Pages
- Repo → Settings → Pages → Source: **Deploy from a branch** → `main` → `/ (root)`
- Wait 1 minute → your site is live at `username.github.io/repo-name`

## How to use

- Public page shows the daily text
- Click the tiny "Admin" link at the bottom → enter password
- Paste your GitHub token once (saved in browser)
- Edit date + text → Save & Publish
- Done. Content is committed to the repo and live instantly.

## Changing password
Edit the `ADMIN_PW` line in `index.html`.
