#!/bin/sh
pm2 stop app.js
git pull
git submodule update
pm2 start app.js
