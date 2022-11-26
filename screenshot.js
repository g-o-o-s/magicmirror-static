'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=768,1024',
    ],
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto('http://magicmirror:8080', {waitUntil: 'networkidle2'});
  await sleep(10000);
  setInterval(async () => {
    await page.screenshot({path: '/static/mm.png'});
  }, 10000);

  process.on('SIGTERM', async () => {
    await browser.close();
  });
})();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
