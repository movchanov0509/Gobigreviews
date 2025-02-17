import { Locator, Page, expect } from '@playwright/test';
import { checkElementAttributesSafely } from './methods';


export class SignUp { 
    readonly page: Page;
    readonly logoSinUp: Locator;
    readonly textSignUp: Locator;
    readonly textCenter: Locator;
    readonly googleSignUp: Locator;
    readonly facebookSignUp: Locator;
    readonly inputName: Locator;
    readonly inputEmailSignUp: Locator;
    readonly inputPasswordSignUp: Locator;
    readonly inputRepeatPassword: Locator;
    readonly keyEyeSignUp: Locator;
    readonly validationHint: Locator;
    readonly inputRemember: Locator;
    readonly textRemember: Locator;
    readonly linkSignIn: Locator;
    readonly btnSubmit: Locator;
    readonly linkSignUp: Locator;
    readonly chatLogo: Locator;
    readonly closeIconChat: Locator;
    readonly btnChat: Locator;
    readonly acceptCondition: Locator;
    readonly checkBoxNews: Locator;
    readonly textHaveAccount: Locator;
    readonly invalidPassword: Locator;
    readonly existingEmail: Locator;
    readonly dangerosError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoSinUp = page.locator('a[href="/"]');
        this.textSignUp = page.locator('h1[class="text-gray-900 fw-bolder mb-3"]');
        this.textCenter = page.locator('div[class="text-gray-500 fw-semibold fs-6"]');
        this.googleSignUp = page.locator('a[href="/auth/google"]');
        this.facebookSignUp = page.locator('a[href="/auth/facebook"]');
        this.inputName = page.locator('input[name="name"]');
        this.inputEmailSignUp = page.locator('input[name="email"]');
        this.inputPasswordSignUp = page.locator('input[name="password"]');
        this.inputRepeatPassword = page.locator('input[name="confirm-password"]');
        this.keyEyeSignUp = page.locator('i[class="ki-outline ki-eye-slash fs-2"]');
        this.validationHint = page.locator('div[class="text-muted"]');
        this.acceptCondition = page.locator('input[name="toc"]');
        this.checkBoxNews = page.locator('input[class="form-check-input font-weight-light"]');
        this.btnSubmit = page.locator('button[type="submit"]');
        this.linkSignIn = page.locator('a[href="/login"]');
        this.textHaveAccount = page.locator('div[class="text-gray-500 text-center fw-semibold fs-6"]')
        this.chatLogo = page.locator('src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/168-r-br.svg"');
        this.btnChat = page.locator('button[class="tawk-custom-color tawk-custom-border-color tawk-outline tawk-button tawk-button-circle tawk-button-large"]');
        this.closeIconChat = page.locator('i[class="tawk-icon tawk-icon-close tawk-icon-small"]');
        this.dangerosError = page.locator('.text-danger.errors-field');
        
    }

    async checkLogo() {
        await checkElementAttributesSafely(this.logoSinUp, { class : 'btn-link mb-7 d-block mx-auto w-auto'})        
    }

    

    async checkSubmit() {
        await checkElementAttributesSafely(this.btnSubmit, {
            class: 'btn btn-primary',
            type: 'submit'
        })        
    }

    async checkChat() {
        await checkElementAttributesSafely(this.btnChat, {
            type: 'button',
            tabindex: '0',
            style: 'bottom: 0px; left: 0px; position: absolute; z-index: 1000; border: 0px;',
        })        
    }

    async checkClosedChat() {
        await checkElementAttributesSafely(this.closeIconChat, {
            role: 'button',
            'data-text': 'Close',
            'aria-label': 'Close',
            tabindex: '0',
        })
    }


    async checkGoogleSignUp() {
        await checkElementAttributesSafely(this.googleSignUp, {
            class: 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
        })
    }

    async checkFacebookSignUp() {
        await checkElementAttributesSafely(this.facebookSignUp, {
            class: 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
        })
    }

    async checkAcceptCondition() {
        await checkElementAttributesSafely(this.acceptCondition, {
            class: 'form-check-input',
            type: 'checkbox'
        })
    }

    async checkKeyEye() {
        await checkElementAttributesSafely(this.keyEyeSignUp, {})
    }

    async checkSignIn() {
        await checkElementAttributesSafely(this.linkSignIn, {
            class: 'link-primary fw-semibold',
        }, 'Sign in')
    }

    async checkAcceptNews() {
        await checkElementAttributesSafely(this.checkBoxNews, {
            type: 'checkbox'
        })
    }

    async checkInputName() {
        await checkElementAttributesSafely(this.inputName, {
            class: 'form-control bg-transparent',
            type: 'text',
            placeholder: 'Name',
        })
    }

    async checkInputEmail() {
        await checkElementAttributesSafely(this.inputEmailSignUp, {
            type: 'email',
            class: 'form-control bg-transparent',
            placeholder: 'Email',
        })
    }

    async validationEmail() {
        const validationMessage = await this.inputEmailSignUp.evaluate(el => el.validationMessage);
        console.log(validationMessage);
    }

    async checkInputPassword() {
        await checkElementAttributesSafely(this.inputPasswordSignUp, {
            type: 'password',
            class: 'form-control bg-transparent',
            placeholder: 'Password',
        })
    }

    async checkRepeatPassword() {
        await checkElementAttributesSafely(this.inputRemember, {
            type: 'password',
            class: 'form-control bg-transparent',
            placeholder: 'Repeat Password',
        })
    }

    async submitBtnDisable() {
        await checkElementAttributesSafely(this.submitBtnDisable, {
            class: 'btn btn-primary',
            type: 'submit'
        })
        await expect(this.btnSubmit).toBeDisabled();
    }


    async checkAllErrors() {
        const allErrors = await this.dangerosError.allTextContents();
        console.log('Помилка:', allErrors);
    }

}