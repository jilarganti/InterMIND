#!/bin/bash

if [ "$VERCEL_ENV" = "production" ]; then
    cd .vitepress/dist
    cp robots.prod robots.txt
fi