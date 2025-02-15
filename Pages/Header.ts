import { Locator, Page, expect } from '@playwright/test';
import exp from 'constants';


export class Header {
    readonly page: Page;
    readonly linkSignIn: Locator;
    readonly linkHome: Locator;
    readonly linkAbout: Locator;
    readonly linkHowItWorks: Locator;
    readonly linkPricing: Locator;
    readonly linkContact: Locator;
    readonly linkTryForFree: Locator;
    readonly linkLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkSignIn = page.locator('a[href="/login"]');
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
        await expect(this.linkSignIn).toBeVisible();
        await expect(this.linkSignIn).toBeTruthy();
        await this.linkSignIn.click()
    }

    async clickHome() {
        await expect(this.linkHome).toBeVisible();
        await expect(this.linkHome).toBeTruthy();
        await this.linkHome.click()
    }

    async clickAbout() {
        await expect(this.linkAbout).toBeVisible();
        await expect(this.linkAbout).toBeTruthy();
        await this.linkAbout.click()
    }

    async clickHowItWorks() {
        await expect(this.linkHowItWorks).toBeVisible();
        await expect(this.linkHowItWorks).toBeTruthy();
        await this.linkHowItWorks.click()
    }

    async clickPricing() {
        await expect(this.linkPricing).toBeVisible();
        await expect(this.linkPricing).toBeTruthy();
        await this.linkPricing.click()
    }

    async clickContact() {
        await expect(this.linkContact).toBeVisible();
        await expect(this.linkContact).toBeTruthy();
        await this.linkContact.click()
    }
    
    async clickTryForFree() {
        await expect(this.linkTryForFree).toBeVisible();
        await expect(this.linkTryForFree).toBeTruthy();
        await this.linkTryForFree.click()
    }
}