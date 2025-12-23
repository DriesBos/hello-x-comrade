#!/bin/bash
# Helper script to generate static site with the correct Node version

source ~/.nvm/nvm.sh
nvm use 16
npm run generate
