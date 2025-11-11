# Deployment Guide for planbusinesspark.com

## GitHub Pages Configuration

This site is deployed to GitHub Pages with a custom domain: **planbusinesspark.com**

### Repository Settings
- **Repository**: https://github.com/businesspark/planbusinesspark
- **Branch**: main
- **Folder**: / (root)
- **Custom Domain**: planbusinesspark.com

### Automatic Deployment

Every push to the `main` branch automatically triggers deployment via GitHub Actions.

The workflow:
1. Builds the Vite React app
2. Uploads the `dist` folder as artifact
3. Deploys to GitHub Pages

### Manual Deployment Steps

If you need to deploy manually:

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. The dist folder is created with all static files

# 4. Commit and push to main branch
git add .
git commit -m "Deploy update"
git push origin main
```

### First-Time Setup (Already Done)

1. ✅ Added CNAME file in `public/CNAME` with `planbusinesspark.com`
2. ✅ Created `.github/workflows/deploy.yml` for automatic deployment
3. ✅ Updated `vite.config.ts` with base path `/` for custom domain
4. ✅ Updated meta tags with full domain URLs

### DNS Configuration (Required on Domain Registrar)

Your domain registrar needs these DNS records:

**A Records** (point to GitHub Pages IPs):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (if using www):
```
www.planbusinesspark.com → businesspark.github.io
```

### GitHub Repository Settings

Go to: https://github.com/businesspark/planbusinesspark/settings/pages

1. **Source**: Deploy from a branch
2. **Branch**: main
3. **Folder**: / (root)
4. **Custom domain**: planbusinesspark.com
5. **Enforce HTTPS**: ✅ Enabled (after DNS propagation)

### Verify Deployment

After pushing to main:
1. Go to **Actions** tab: https://github.com/businesspark/planbusinesspark/actions
2. Watch the deployment workflow
3. Once complete, visit: https://planbusinesspark.com

### Build Locally to Test

```bash
# Development server
npm run dev

# Production build (preview)
npm run build
npm run preview
```

### Important Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain configuration
- `vite.config.ts` - Build configuration
- `dist/` - Build output (auto-generated, not committed)

### Troubleshooting

**404 on routes?**
- GitHub Pages serves index.html for all routes automatically with Vite's build

**CNAME deleted after deploy?**
- Make sure `public/CNAME` exists (it does!)
- GitHub Actions will copy it to `dist/CNAME` during build

**SSL Certificate not working?**
- Wait 24-48 hours after DNS configuration
- GitHub automatically provisions SSL for custom domains

### Contact

For deployment issues, check:
- GitHub Actions logs
- Repository settings
- DNS propagation status
