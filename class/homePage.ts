import {Page} from "puppeteer";
import {clickOnMenuByText} from "./common";

export class Main {
    eleMenuPersonalFin: string = ""
    eleMenuProductIntro: string = ".cubre-a-menuSortBtn.-l1"
    eleMenuDigitalService: string = ""
    eleMenuAboutCathay: string = ""
    eleMenuSupportService: string = ""
    eleBtnLogin: string = ""
    eleBtnLanguage: string = ""
    eleBtnSmartAlpha: string = ""
    eleSubMenuCardIntro: string = ".cubre-a-menuLink"
    page: Page

    constructor(page: Page) {
        this.page = page
    }

    public async clickOnLogin() {
        await this.page.waitForSelector(this.eleBtnLogin)
        await this.page.click(this.eleBtnLogin)
    }

    public async clickOnMenuProductIntro() {
        await this.page.waitForSelector(this.eleMenuProductIntro)
        await clickOnMenuByText(this.page, this.eleMenuProductIntro, "產品介紹")
    }

    public async clickOnSubMenuCardIntro() {
        await this.page.waitForSelector(this.eleSubMenuCardIntro)
        await clickOnMenuByText(this.page, this.eleSubMenuCardIntro, "卡片介紹")
    }
}