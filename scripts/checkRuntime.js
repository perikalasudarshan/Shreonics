import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', (msg) => {
    console.log('PAGE LOG:', msg.text());
  });
  page.on('pageerror', (err) => {
    console.error('PAGE ERROR:', err);
  });
  page.on('requestfailed', (req) => {
    console.error('REQUEST FAILED:', req.url(), req.failure()?.errorText);
  });

  try {
    const response = await page.goto('http://localhost:5178', { waitUntil: 'networkidle' });
    console.log('HTTP status:', response?.status());

    // Wait a short time to ensure any runtime errors surface.
    await page.waitForTimeout(2000);

    // Output a small snippet of the rendered HTML for debugging.
    const content = await page.content();
    const bodyStart = content.indexOf('<body');
    const bodyEnd = content.indexOf('</body>');
    const bodyHtml = bodyStart !== -1 && bodyEnd !== -1 ? content.slice(bodyStart, bodyEnd + 7) : content;
    console.log('Rendered body HTML snippet:', bodyHtml.slice(0, 1600));

    // Capture screenshot for inspection
    await page.screenshot({ path: 'runtime-screenshot.png', fullPage: true });
    console.log('Saved runtime-screenshot.png');
  } catch (error) {
    console.error('Error during page load:', error);
  } finally {
    await browser.close();
  }
})();
