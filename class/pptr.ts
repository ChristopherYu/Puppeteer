import {Browser, launch, Page} from "puppeteer";
import {setting} from "../configs/envSetting"


export class PPTR {
    public async getPptrBrowser(): Promise<Browser> {
        return await launch({
            headless: false,
            slowMo: 100,
            defaultViewport: {
                width: setting.width,
                height: setting.height
            },
            args: [`--window-size=${setting.width},${setting.height}`]
        })
    }

    public async getPptrPage(browser: Browser): Promise<Page> {
        const page: Page = await browser.newPage()
        await page.goto(setting.domain);
        return page
    }
}