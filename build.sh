#!/bin/bash
# Helper script to build with the correct Node version

source ~/.nvm/nvm.sh
nvm use 16
npm run build
