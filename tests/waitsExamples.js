import puppeteer from 'puppeteer';
let browser = null;
let page = null;

describe('Waits Examples', () => {
	before(async () => {
		browser = await puppeteer.launch({
			headless: false,
			devtools: false,
		});
		page = await browser.newPage();
		await page.goto('https://the-internet.herokuapp.com/login');
	});

	it('Implicit Wait Wample', async () => {
		await page.waitFor(3000);
		const userNameInput = await page.$x('//input[@id="username"]');
		await userNameInput[0].type('Example with implicit wait');
	});

	it('Explicit Wait Wample', async () => {
		const userNameInput = await page.waitForXPath('//input[@id="username"]');
		await userNameInput.click({ clickCount: 3 });
		await userNameInput.press('Backspace');
		await userNameInput.type('Example with explicit wait');
	});

	after(async () => {
		await browser.close();
	});
});
