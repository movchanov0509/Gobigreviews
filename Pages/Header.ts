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
        this.linkLogo = page.locator('a[href="/"]');

    }


    async checkLogolink() {
        await expect(this.linkLogo).toBeVisible();
        //await expect(this.linkLogo).toHaveAttribute('class', 'navbar-brand');
        await expect(this.linkLogo).toBeTruthy();
    }


    async checkSignIn() {
        await expect(this.linkSignIn).toBeVisible();
        await expect(this.linkSignIn).toBeTruthy();
        await expect(this.linkSignIn).toHaveAttribute('class', 'nav-link anchor');
        await expect(this.linkSignIn).toHaveAttribute('rel', 'canonical');
    }

    async checkHome() {
        await expect(this.linkHome).toBeVisible();
        await expect(this.linkHome).toBeTruthy();
        await expect(this.linkHome).toHaveAttribute('class', 'nav-link anchor');
        await expect(this.linkHome).toHaveAttribute('rel', 'canonical')
    
    }

    async checkAbout() {
        await expect(this.linkAbout).toBeVisible();
        await expect(this.linkAbout).toBeTruthy();
        await expect(this.linkAbout).toHaveAttribute('class', 'nav-link anchor');
        await expect(this.linkAbout).toHaveAttribute('rel', 'canonical')
    }

    async checkHowItWorks() {
        await expect(this.linkHowItWorks).toBeVisible();
        await expect(this.linkHowItWorks).toBeTruthy();
        await expect(this.linkHowItWorks).toHaveAttribute('class', 'nav-link anchor active');
        await expect(this.linkHowItWorks).toHaveAttribute('rel', 'canonical')

    }

    async checkPricing() {
        await expect(this.linkPricing).toBeVisible();
        await expect(this.linkPricing).toBeTruthy();
        await expect(this.linkPricing).toHaveAttribute('class', 'nav-link anchor');
        await expect(this.linkPricing).toHaveAttribute('rel', 'canonical')
    }

    async checkContact() {
        await expect(this.linkContact).toBeVisible();
        await expect(this.linkContact).toBeTruthy();
        await expect(this.linkContact).toHaveAttribute('class', 'nav-link anchor');
        await expect(this.linkContact).toHaveAttribute('rel', 'canonical')
    }
    
    async checkTryForFree() {
        await expect(this.linkTryForFree).toBeVisible();
        await expect(this.linkTryForFree).toBeTruthy();
        await expect(this.linkTryForFree).toHaveAttribute('class', 'nav-link anchor');
        await expect(this.linkTryForFree).toHaveAttribute('rel', 'canonical')

    }
}