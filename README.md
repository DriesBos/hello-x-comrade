# nuxt-storyblok-boilerplate

> boilerplate for upcoming projects

## ToDo

```bash
- [X] Update gitnore (vue,osx,node,nuxt,sass,macos)
- [X] Install SASS deps
- [X] Configure linting + prettier
- [ ] Init testing (jest?)
- [X] Init TypeScript
- [X] Markdown Component
- [X] Image optimalisation (compression + rendering)
- [ ] Scroll animation / animationtriggering solution (vanilla/velocity/etc)
- [ ] Init Netlify/Heroku/ZEIT
- [ ] SSL redirection (or via server)
- [X] Google Analytics -> Google gtag
- [ ] Connect meta + seo data to StoryBlokCMS
```

## Build Setup

### Prerequisites

This project requires **Node.js 16** due to compatibility with Nuxt 2.

If you have `nvm` installed, it will automatically use the correct version from `.nvmrc`:

```bash
# Use the correct Node version
$ nvm use

# Or manually switch to Node 16
$ nvm use 16
```

### Environment Variables

Create a `.env` file in the root directory with your Storyblok API keys:

```bash
# Storyblok Preview/Access Token (for draft content)
PREVIEWKEY=your_preview_token_here

# Storyblok Public Token (for published content and route generation)
PUBLICKEY=your_public_token_here
```

Get these tokens from your Storyblok space settings at: https://app.storyblok.com/

### Installation & Running

⚠️ **Important:** Always use Node.js 16 for this project!

```bash
# Switch to Node 16 first
$ nvm use 16

# Install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
# OR use the helper script (automatically uses Node 16)
$ ./dev.sh

# build for production and launch server
$ npm run build
$ npm start
# OR use the helper script
$ ./build.sh

# generate static project (for Netlify)
$ npm run generate
# OR use the helper script
$ ./generate.sh

# Launch lint
$ npm run lint

# Lint fixing
$ npm run lintfix
```

**Helper Scripts** (automatically use Node 16):

- `./dev.sh` - Start development server
- `./build.sh` - Build for production
- `./generate.sh` - Generate static site for Netlify

## Netlify Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains all necessary build settings.

### Setting up Netlify

1. **Connect your repository** to Netlify

2. **Set Environment Variables** in Netlify Dashboard (Site Settings → Environment Variables):

   ```
   PREVIEWKEY=your_storyblok_preview_token
   PUBLICKEY=your_storyblok_public_token
   ```

3. **Deploy!** Netlify will automatically:
   - Use Node.js 16
   - Run `npm run generate`
   - Publish the `dist` directory

### Manual Deploy

```bash
# Generate static files
$ npm run generate

# Test the generated site locally (optional)
$ npx serve dist
```

## Nuxt Config

```bash
* Add Google Tag Manager ID
* Configure responsive-loader by setting image sizes
* Test image serving + resizing (temp set optimizeImagesInDev to true).
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org) and [Storyblok docs](https://www.storyblok.com/docs) and [Netlify docs](https://docs.netlify.com/).
