import { Locator, Page, expect } from '@playwright/test';
import { checkElementAttributesSafely, safeClick, safeFill } from './methods';

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
    readonly errorMessages: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('h3:has-text("Contact Us")');
        this.inputName = page.locator('input[id="name"]');
        this.inputEmail = page.locator('input[id="email"]');
        this.inputSubject = page.locator('input[id="subject"]');
        this.inputMessage = page.locator('textarea[id="message"]');
        this.btnSendMessage = page.locator('button[id="contactFormBtn"]');
        this.quickLinks = page.locator('h6:has-text("Quick Links")');
        this.quickContact = page.locator('h6:has-text("Quick Contact")');
        this.chatLogo = page.locator('img[src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/168-r-br.svg"]');
        this.chatButton = page.locator('button[class="tawk-custom-color tawk-custom-border-color tawk-outline tawk-button tawk-button-circle tawk-button-large"]');
        this.closeIconChat = page.locator('i[data-text="Close"]');
        this.titleText = page.locator('p:has-text("We are here to help! If you have any questions, suggestions, or need support, feel free to reach out to us.Fill out the form below, and we will get back to you as soon as possible.")');
        this.errorMessages = page.locator('.text-danger.errors-field');
        this.successMessage = page.locator('h3:has-text("Message Sent Successfully!"');
    }

    async checkTitle() {
        await checkElementAttributesSafely(this.title, {}, 'Contact Us');
    }

    async checkTitleText() {
        await checkElementAttributesSafely(
            this.titleText,
            {},
            'We are here to help! If you have any questions, suggestions, or need support, feel free to reach out to us.Fill out the form below, and we will get back to you as soon as possible.'
        );
    }

    async checkInputName() {
        await checkElementAttributesSafely(this.inputName, {
            id: 'name',
            placeholder: 'Enter Your Name',
            type: 'text',
            class: 'form-control mb-2'
        });
    }

    async checkInputEmail() {
        await checkElementAttributesSafely(this.inputEmail, {
            id: 'email',
            placeholder: 'Enter Your Email',
            type: 'email',
            class: 'form-control mb-2'
        });
    }

    async checkInputSubject() {
        await checkElementAttributesSafely(this.inputSubject, {
            id: 'subject',
            placeholder: 'Enter Your Subject',
            type: 'text',
            class: 'form-control mb-2'
        });
    }

    async checkInputMessage() {
        await checkElementAttributesSafely(this.inputMessage, {
            id: 'message',
            placeholder: 'Enter Your Message',
            class: 'form-control mb-2',
            rows: '4'
        });
    }

    async checkBtnSendMessage() {
        await checkElementAttributesSafely(this.btnSendMessage, {
            id: 'contactFormBtn',
            class: 'btn btn-primary shadow btn-colord btn-theme',
            type: 'button'
        });
    }

    async checkSuccessMessage() { 
        await checkElementAttributesSafely(this.successMessage, {
            class: 'modal-title fs-4',
            id: 'staticBackdropLabel',
            style: 'color: #0c7f40; font-weight: bold;'
        }, 'Message Sent Successfully!');
    }

    async verifySubmitButtonDisabled() {
        await expect(this.btnSendMessage).toBeDisabled();
        console.log(await this.btnSendMessage.getAttribute('disabled'));

    }

    async checkQuickLinks() {
        await checkElementAttributesSafely(this.quickLinks, {}, 'Quick Links');
    }

    async checkQuickContact() {
        await checkElementAttributesSafely(this.quickContact, {}, 'Quick Contact');
    }

    async checkAllErrors(): Promise<string[]> {
        const errors = await this.errorMessages.allTextContents();
        if (errors.length > 0) {
            console.log('Validation Errors:', errors);
        }
        return errors;
    }

    async fillContactForm(name: string, email: string, subject: string, message: string) {
        await safeFill(this.inputName, name);
        await safeFill(this.inputEmail, email);
        await safeFill(this.inputSubject, subject);
        await safeFill(this.inputMessage, message);
        await safeClick(this.btnSendMessage);
    }
}