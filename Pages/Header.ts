import { Locator, Page, expect } from '@playwright/test';
import { checkElementAttributesSafely } from './methods';


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
        await checkElementAttributesSafely(this.linkLogo, {
            class: 'navbar-brand',
        })
    }


    async checkSignIn() {
        await checkElementAttributesSafely(this.linkSignIn, {
            class: 'nav-link anchor',
            rel: 'canonical',
        })
    }

    async checkHome() {
        await checkElementAttributesSafely(this.linkHome, {
            class: 'nav-link anchor',
            rel: 'canonical',
        })
    
    }

    async checkAbout() {
        await checkElementAttributesSafely(this.linkAbout, {
            class: 'nav-link anchor',
            rel: 'canonical',
        })
    }

    async checkHowItWorks() {
        await checkElementAttributesSafely(this.linkHowItWorks, {
            class: 'nav-link anchor active',
            rel: 'canonical',
        })

    }

    async checkPricing() {
        await checkElementAttributesSafely(this.linkPricing, {
            class: 'nav-link anchor',
            rel: 'canonical',
        })
    }

    async checkContact() {
        await checkElementAttributesSafely(this.linkContact, {
            class: 'nav-link anchor',
            rel: 'canonical',
        })
    }
    
    async checkTryForFree() {
        await checkElementAttributesSafely(this.linkTryForFree, {
            class: 'nav-link anchor',
            rel: 'canonical',
        })
    }
}