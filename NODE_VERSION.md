# ⚠️ IMPORTANT: Node.js Version Requirement

This project **REQUIRES Node.js 16** to work properly.

## Quick Fix

If you see errors like:
- `Function.prototype.apply was called on undefined`
- `punycode module is deprecated`
- Build/dev commands fail

**Solution:**

```bash
nvm use 16
```

## Available Helper Scripts

These scripts automatically use Node 16:

```bash
./dev.sh       # Start development server
./build.sh     # Build for production
./generate.sh  # Generate static site for Netlify
```

## Why Node 16?

This project uses:
- Nuxt 2.13.2 (released in 2020)
- Vue 2.6.12
- Various packages that are not compatible with Node 18+

Node 16 is the last version that fully supports all dependencies without errors.

## Automatic Version Switching

The `.nvmrc` file in this project specifies Node 16. If you have `nvm` installed, you can add this to your shell profile to automatically switch Node versions when entering the directory:

```bash
# Add to ~/.zshrc or ~/.bashrc
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

