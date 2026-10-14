const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const html = path.resolve(process.argv[2]);
  const screenshot = path.resolve(process.argv[3]);
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1100, height: 960 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('file://' + html);
    const value = id => page.locator('#' + id).evaluate(element => Number(element.value));
    const originalHeight = await value('height');
    await page.locator('#radius').evaluate(element => { element.value = '2'; element.dispatchEvent(new Event('input')); });
    if (Math.abs(await value('height') - 4 * originalHeight) > 3e-6) throw new Error('dilation height failed');
    await page.locator('#orientation').selectOption('-1');
    if (Math.abs(await value('height') + 4 * originalHeight) > 3e-6) throw new Error('orientation sign failed');
    await page.locator('#travel').evaluate(element => { element.value = '0'; element.dispatchEvent(new Event('input')); });
    if (await value('current-height') !== 0) throw new Error('initial height failed');
    if (!/^M[^L]+$/.test(await page.locator('#lift-path').getAttribute('d'))) throw new Error('travel prefix failed');
    await page.locator('#radius').evaluate(element => { element.value = '1'; element.dispatchEvent(new Event('input')); });
    await page.locator('#orientation').selectOption('1');
    await page.locator('#travel').evaluate(element => { element.value = '256'; element.dispatchEvent(new Event('input')); });
    if (errors.length) throw new Error(errors.join('\n'));
    await page.screenshot({ path: screenshot, fullPage: true });
    process.stdout.write('PASS\tbrowser controls, linked views, weighted height and orientation\n');
  } finally {
    await browser.close();
  }
})().catch(error => { process.stderr.write(error.stack + '\n'); process.exit(1); });
