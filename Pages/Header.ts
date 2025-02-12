import { Locator, Page, expect } from '@playwright/test';


export class Header {
    readonly page: Page;
    readonly LinkSignIn: Locator;
    readonly linkHome: Locator;
    readonly linkAbout: Locator;
    readonly linkHowItWorks: Locator;
    readonly linkPricing: Locator;
    readonly linkContact: Locator;
    readonly linkTryForFree: Locator;
    readonly linkLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.LinkSignIn = page.locator('a[href="/login"]');
        this.linkHome = page.locator('a[href="#slide"]');
        this.linkAbout = page.locator('a[href="#about"]');
        this.linkHowItWorks = page.locator('a[href="#main_features"]').nth(0);
        this.linkPricing = page.locator('a[href="#prices"]').nth(0);
        this.linkContact = page.locator('a[href="#git_in_touch"]');
        this.linkTryForFree = page.locator('a[href="/register"]').nth(0);
        this.linkLogo = page.locator('a[class="navbar-brand"]').nth(0);

    }


    async checkLogolink() {
        await expect(this.linkLogo).toBeVisible();
        await expect(this.linkLogo).toHaveAttribute('a', 'href="/"');
        await expect(this.linkLogo).toBeTruthy();
    }


    async clickSignIn() {
        await this.LinkSignIn.click()
    }

    async clickHome() {
        await this.linkHome.click()
    }

    async clickAbout() {
        await this.linkAbout.click()
    }

    async clickHowItWorks() {
        await this.linkHowItWorks.click()
    }

    async clickPricing() {
        await this.linkPricing.click()
    }

    async clickContact() {
        await this.linkContact.click()
    }
    
    async clickTryForFree() {
        await this.linkTryForFree.click()
    }
}