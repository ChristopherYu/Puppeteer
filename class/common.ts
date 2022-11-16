import {Page} from "puppeteer";

export async function clickOnMenuByText(page: Page, selector: string, text: string) {
    await page.waitForSelector(selector)
    await page.$$eval(selector, (elements, text) => {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML.includes(text)) {
                (elements[i] as HTMLElement).click()
            }
        }
    }, text);
}