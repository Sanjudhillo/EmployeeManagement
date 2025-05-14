#!/bin/bash
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $(pwd)"
ls -la
npm install
npm run build
echo "Build completed"
ls -la dist 