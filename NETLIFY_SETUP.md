# Netlify Deployment Guide

## Quick Setup

### 1. Connect Repository to Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider (GitHub, GitLab, etc.)
4. Select this repository

### 2. Configure Build Settings

Netlify will automatically detect the `netlify.toml` configuration file, which includes:

- **Build command:** `npm run generate`
- **Publish directory:** `dist`
- **Node version:** 16

**You don't need to configure these manually** - they're in `netlify.toml`!

### 3. Set Environment Variables

In Netlify Dashboard, go to: **Site settings → Environment variables**

Add the following variables:

| Variable     | Description                    | Where to get it                 |
| ------------ | ------------------------------ | ------------------------------- |
| `PREVIEWKEY` | Storyblok Preview/Access Token | Storyblok → Settings → API Keys |
| `PUBLICKEY`  | Storyblok Public Token         | Storyblok → Settings → API Keys |

### 4. Deploy

Click "Deploy site" and Netlify will:

- Install dependencies with npm
- Build your site using Node 16
- Deploy to a unique URL (e.g., `https://your-site.netlify.app`)

## Build Process

When you push to your repository, Netlify will automatically:

1. Use Node.js 16 (specified in `netlify.toml`)
2. Run `npm install`
3. Run `npm run generate` (which executes `nuxt generate`)
4. Publish the contents of the `dist` folder
5. Configure redirects for client-side routing

## Troubleshooting

### Build fails with Node version error

- Check that `NODE_VERSION = "16"` is set in `netlify.toml`
- Netlify should automatically use Node 16

### Missing environment variables error

- Ensure `PREVIEWKEY` and `PUBLICKEY` are set in Netlify Dashboard
- Variables are case-sensitive!

### Pages return 404

- The `netlify.toml` includes redirect rules for SPA routing
- Make sure the file is committed to your repository

### Build succeeds but content is missing

- Check that your Storyblok API keys are correct
- Verify the tokens have the right permissions in Storyblok

## Custom Domain

To add a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Continuous Deployment

Netlify automatically deploys when you:

- Push to your main/master branch
- Merge a pull request
- Or manually trigger a deploy in the Netlify Dashboard

## Testing Locally

Before deploying, test the static generation locally:

```bash
# Generate static files
npm run generate

# Preview the generated site
npx serve dist

# Visit http://localhost:3000 to preview
```

## Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Nuxt.js Static Site Generation](https://nuxtjs.org/docs/get-started/commands#static-deployment-pre-rendered)
- [Storyblok Documentation](https://www.storyblok.com/docs)
