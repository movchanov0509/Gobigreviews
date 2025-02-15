import { Locator, Page, expect } from '@playwright/test';


export class SignIn { 
    readonly page: Page;
    readonly logoSinUp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoSinUp = page.locator('img[src="assets/img-logos/GoBigReviews-logo.png"]');
    }
}