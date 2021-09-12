import puppeteer from 'puppeteer';
import puppeteerFirefox from 'puppeteer-firefox';
import { expect } from 'chai';

const iPhone = puppeteer.devices['iPhone 6'];

describe('Basic Examples', () => {
	it('Launch the browser in Chronium', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 500,
			devtools: false,
		});
		const page = await browser.newPage();
		await page.goto('http://example.com/');
		await browser.close();
	});

	it('Launch the browser same tab in Chrome', async () => {
		const browser = await puppeteer.launch({
			executablePath:
				'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
			headless: false,
			slowMo: 500,
			devtools: false,
		});
		const pages = await browser.pages();
		const currentPage = pages[0];
		await currentPage.goto('http://example.com/');
		await browser.close();
	});

	it('Launch the Iphone', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 500,
			devtools: false,
		});
		const page = await browser.newPage();
		await page.emulate(iPhone);
		await page.goto('http://example.com/');
		await browser.close();
	});

	it('Chai Assertions Example in firefox', async () => {
		const browser = await puppeteerFirefox.launch({
			headless: false,
			slowMo: 500,
			devtools: false,
		});
		const pages = await browser.pages();
		const currentPage = pages[0];
		await currentPage.goto('http://example.com/');
		const title = await currentPage.title();
		const url = await currentPage.url();

		expect(title).to.be.equal('Example Domain');
		expect(url).to.be.equal('http://example.com/');
		await browser.close();
	});
});
