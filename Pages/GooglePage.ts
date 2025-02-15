import { Locator, Page, expect } from '@playwright/test';


export class GooglePage {
    readonly page: Page;
    readonly textMain: Locator;
    readonly headingText: Locator;
    readonly linkDestination: Locator;
    readonly checkUser: Locator;
    readonly checkAnotherUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textMain = page.locator('div[class="kHn9Lb"]');
        this.headingText = page.locator('h1[id="headingText"]');
        this.linkDestination = page.locator('data-destination-info="Якщо ви виберете обліковий запис, вас буде переспрямовано: https://gobigreviews.com"');
        this.checkUser = page.locator('class="VV3oRb YZVTmd SmR8"').nth(0);
        this.checkAnotherUser = page.locator('class="VV3oRb YZVTmd SmR8"').nth(1);  

    }

    async checkGooglePage() {
        await expect(this.textMain).toBeVisible();
        await expect(this.textMain).toBeTruthy();
        await expect(this.textMain).toHaveText('Увійдіть в обліковий запис Google');
        await expect(this.headingText).toBeVisible();
        await expect(this.headingText).toBeTruthy();
        await expect(this.headingText).toHaveAttribute('class', 'ugwMX');
        await expect(this.linkDestination).toBeVisible();
        await expect(this.linkDestination).toBeTruthy();
        await expect(this.linkDestination).toHaveAttribute('type', 'button');
    }
}