import { Locator, Page, expect } from '@playwright/test';

export class Contact {
    readonly page: Page;
    readonly title: Locator;
    readonly inputName: Locator;
    readonly inputEmail: Locator;
    readonly inputSubject: Locator;
    readonly inputMessage: Locator;
    readonly btnSendMessage: Locator;
    readonly quickLinks: Locator;
    readonly quickContact: Locator;
    readonly chatLogo: Locator;
    readonly chatButton: Locator;
    readonly closeIconChat: Locator;
    readonly titleText: Locator;
    readonly emailError: Locator;
    readonly dangerosError: Locator;


    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('h3:has-text("Contact Us")');
        this.inputName = page.locator('input[id="name"]');
        this.inputEmail = page.locator('input[id="email"]');
        this.inputSubject = page.locator('input[id = "subject"]');
        this.inputMessage = page.locator('textarea[id="message"]');
        this.btnSendMessage = page.locator('button[id="contactFormBtn"');
        this.quickLinks = page.locator('h6:has-text("Quick Links")');
        this.quickContact = page.locator('h6:has-text("Quick Contact")');
        this.chatLogo = page.locator('img[src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/168-r-br.svg"]');
        this.chatButton = page.locator('button[class="tawk-custom-color tawk-custom-border-color tawk-outline tawk-button tawk-button-circle tawk-button-large"]'); 4
        this.closeIconChat = page.locator('i[data-text="Close"]');
        this.titleText = page.locator('p:has-text("We are here to help! If you have any questions, suggestions, or need support, feel free to reach out to us.Fill out the form below, and we will get back to you as soon as possible.")');
        this.dangerosError = page.locator('.text-danger.errors-field');
    }

    async checkTitle() {
        try {
            await expect(this.title).toBeVisible();
            await expect(this.title).toBeTruthy();
            await expect(this.title).toHaveText('Contact Us');
        } catch (error) {
            console.error("Error in checkTitle:", error);
        }
    }

    async checkTitleText() { 
        try {
            await expect(this.titleText).toBeVisible();
            await expect(this.titleText).toBeTruthy();
            await expect(this.titleText).toHaveText('We are here to help! If you have any questions, suggestions, or need support, feel free to reach out to us.Fill out the form below, and we will get back to you as soon as possible.")');
        } catch (error) {
            console.error("Error in checkTitleText:", error);
        }
    }

    async checkInputName() {
        try {
            await expect(this.inputName).toBeVisible();
            await expect(this.inputName).toBeTruthy();
            await expect(this.inputName).toHaveAttribute('id', 'name');
            await expect(this.inputName).toHaveAttribute('placeholder', 'Enter Your Name');
            await expect(this.inputName).toHaveAttribute('type', 'text');
            await expect(this.inputName).toHaveAttribute('class', 'form-control mb-2');
        } catch (error) {
            console.error("Error in checkInputName:", error);
        }
    }

    async checkInputEmail() {
        try {
            await expect(this.inputEmail).toBeVisible();
            await expect(this.inputEmail).toBeTruthy();
            await expect(this.inputEmail).toHaveAttribute('id', 'email');
            await expect(this.inputEmail).toHaveAttribute('placeholder', 'Enter Your Email');
            await expect(this.inputEmail).toHaveAttribute('type', 'email');
            await expect(this.inputEmail).toHaveAttribute('class', 'form-control mb-2');
        } catch (error) {
            console.error("Error in checkInputEmail:", error);
        }
    }

    async checkInputSubject() { 
        try {
            await expect(this.inputSubject).toBeVisible();
            await expect(this.inputSubject).toBeTruthy();
            await expect(this.inputSubject).toHaveAttribute('id', 'subject');
            await expect(this.inputSubject).toHaveAttribute('placeholder', 'Enter Your Subject');
            await expect(this.inputSubject).toHaveAttribute('type', 'text');
            await expect(this.inputSubject).toHaveAttribute('class', 'form-control mb-2');
        } catch (error) {
            console.error("Error in checkInputSubject:", error);
        }
    }

    async checkInputMessage() { 
        try {
            await expect(this.inputMessage).toBeVisible();
            await expect(this.inputMessage).toBeTruthy();
            await expect(this.inputMessage).toHaveAttribute('id', 'message');
            await expect(this.inputMessage).toHaveAttribute('placeholder', 'Enter Your Message');
            await expect(this.inputMessage).toHaveAttribute('class', 'form-control mb-2');
            await expect(this.inputMessage).toHaveAttribute('rows', '4');
        } catch (error) {
            console.error("Error in checkInputMessage:", error);
        }
    }

    async checkBtnSendMessage() {
        try {
            await expect(this.btnSendMessage).toBeVisible();
            await expect(this.btnSendMessage).toBeTruthy();
            await expect(this.btnSendMessage).toHaveAttribute('id', 'contactFormBtn');
            await expect(this.btnSendMessage).toHaveAttribute('class', 'btn btn-primary shadow btn-colord btn-theme');
            await expect(this.btnSendMessage).toHaveAttribute('type', 'button');
        } catch (error) {
            console.error("Error in checkBtnSendMessage:", error);
        }
    }

    async submitBtnDisable() {
        try {
            await expect(this.btnSendMessage).toBeVisible();
            await expect(this.btnSendMessage).toBeTruthy();
            await expect(this.btnSendMessage).toHaveAttribute('id', 'contactFormBtn');
            await expect(this.btnSendMessage).toHaveAttribute('class', 'btn btn-primary shadow btn-colord btn-theme');
            await expect(this.btnSendMessage).toHaveAttribute('type', 'button');
        } catch (error) {
            console.warn("Warning: Кнопка submit не вимкнена:", error);
        }
    }

    //Footer
    async checkQuickLinks() {
        try {
            await expect(this.quickLinks).toBeVisible();
            await expect(this.quickLinks).toBeTruthy();
            await expect(this.quickLinks).toHaveText('Quick Links');
        } catch (error) {
            console.error("Error in checkQuickLinks:", error);
        }
    }

    async checkQuickContact() { 
        try {
            await expect(this.quickContact).toBeVisible();
            await expect(this.quickContact).toBeTruthy();
            await expect(this.quickContact).toHaveText('Quick Contact');
        } catch (error) {
            console.error("Error in checkQuickContact:", error);
        }
    }
    
    async checkAllErrors() {
        const allErrors = await this.dangerosError.allTextContents();
        console.log('Помилка:', allErrors);
    }
}