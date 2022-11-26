# magicmirror-static

## What is this?

Magicmirror running in server mode coupled with \
Puppeteer to take a screenshot on an interval \
and nginx to serve that screenshot as a static page

## Why?

I recently acquired a 2nd gen iPad \
The JS on it is too old to run MM \
But it can fetch an image on an interval!

## How do I use this?
Clone the repo, setup your magicmirror stuff in:
```
./config    <- config.js
./css       <- custom css
./modules   <- custom modules
```

You'll want to edit docker-compose to remove the `traefik-backend` network. \
I have everything at home behind a single traefik in a seperate compose stack.

Change `'--window-size=768,1024',` in `screenshot.js` to suit your target device

After that, setup your magicmirror `config.js` and `docker compose up -d`
