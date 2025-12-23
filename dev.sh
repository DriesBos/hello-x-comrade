#!/bin/bash
# Helper script to run the dev server with the correct Node version

source ~/.nvm/nvm.sh
nvm use 16
npm run dev
