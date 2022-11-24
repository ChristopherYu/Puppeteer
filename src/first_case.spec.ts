import {Browser, Page} from 'puppeteer';
import {PPTR} from "../class/pptr";
import {Main} from "../class/homePage"

let pptr: any;
let browser: Browser;
let page: Page;
let mainPage: any;


describe('CathayBK product intro', () => {
    beforeAll(async () => {
        pptr = new PPTR()
        browser = await pptr.getPptrBrowser()
        page = await pptr.getPptrPage(browser)
        mainPage = new Main(page)
    });

    beforeEach(async () => {
    })

    test('open product intro', async () => {
        await mainPage.clickOnMenuProductIntro()
        await mainPage.clickOnSubMenuCardIntro()
        await page.waitForSelector(".cubre-a-kvTitle", {visible: true})
        const pageCard = await page.$('.cubre-a-kvTitle')
        await pageCard.screenshot({path: './image/test.png'})
    });

    afterEach(async () => {
    })

    afterAll(async () => {
        await browser.close();
    });
})