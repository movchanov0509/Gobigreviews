import { Locator, Page, expect } from '@playwright/test';


export class HomePage{
    readonly page: Page;
    constructor (page: Page){
        this.page = page;
       
    }

    async openSite() {
        await this.page.goto('/')
    }

    async checkTitle() {
        await expect(this.page).toHaveURL('https://gobigreviews.com/')
    }

    async checkURL() {
        await expect(this.page).toHaveTitle('Boost Reviews and Sales | Gobigreviews')
    }
}