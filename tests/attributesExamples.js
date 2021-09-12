import puppeteer from 'puppeteer';
let browser = null;
let page = null;

describe('Attributes Examples', () => {
	before(async () => {
		browser = await puppeteer.launch({
			headless: false,
			devtools: false,
		});
		page = await browser.newPage();
		await page.goto('https://the-internet.herokuapp.com/login');
	});

	it('Get element value', async () => {
		const userNameInput = await page.waitForXPath('//input[@id="username"]');
		await userNameInput.type('My User Name');
		const inputValue = await page.evaluate(name => name.value, userNameInput);
		console.log(inputValue);
	});

	it('Get element attribute', async () => {
		const userNameInput = await page.waitForXPath('//input[@id="username"]');
		await userNameInput.type('My User Name');
		const inputType = await page.evaluate(name => name.type, userNameInput);
		console.log(inputType);
	});

	after(async () => {
		await browser.close();
	});
});
