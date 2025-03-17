import { Locator, Page, expect } from '@playwright/test';
import { checkElementAttributesSafely } from './methods';


export class SignIn {
    readonly page: Page;
    readonly logo: Locator;
    readonly textSignIn: Locator;
    readonly textCenter: Locator;
    readonly googleSignIn: Locator;
    readonly facebookSignIn: Locator;
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly keyEye: Locator;
    readonly inputRemember: Locator;
    readonly textRemember: Locator;
    readonly linkForgot: Locator;
    readonly btnSubmit: Locator;
    readonly linkSignUp: Locator;
    readonly chatLogo: Locator;
    readonly closeIconChat: Locator;
    readonly btnChat: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('img[src="assets/img-logos/GoBigReviews-logo.png"]');
        this.textSignIn = page.locator('h1[class="text-gray-900 fw-bolder mb-3"]');
        this.textCenter = page.locator('div[class="text-gray-500 fw-semibold fs-6"]');
        this.googleSignIn = page.locator('a[href="/auth/google"]');
        this.facebookSignIn = page.locator('a[href="/auth/facebook"]');
        this.inputEmail = page.locator('input[name="email"]');
        this.inputPassword = page.locator('input[name="password"]');
        this.keyEye = page.locator('i[class="ki-outline ki-eye fs-2"]');
        this.inputRemember = page.locator('input[name="toc"]');
        this.textRemember = page.locator('span[class="form-check-label fw-semibold text-gray-700 fs-base ms-1"]')
        this.linkForgot = page.locator('a[href="https://gobigreviews.com/password-reminder"]');
        this.btnSubmit = page.locator('button[id="kt_sign_up_submit"]');
        this.linkSignUp = page.locator('a[href="/register"]');
        this.chatLogo = page.locator('img[src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/168-r-br.svg"]');
        this.closeIconChat = page.locator('i[class="tawk-icon tawk-icon-close tawk-icon-small"]');
        this.btnChat = page.locator('button[class="tawk-custom-color tawk-custom-border-color tawk-button tawk-button-circle tawk-button-large"]');
       
        

    }

    async checkLogo() {
        await checkElementAttributesSafely(this.logo, {
            a: 'href="/"',
        })
    }

    async checkSubmit() {
        await checkElementAttributesSafely(this.btnSubmit, {
            class: 'btn btn-primary',
        })
    }

    async checkChat() {
        await checkElementAttributesSafely(this.btnChat, {
            type: 'button',
            style: 'bottom: 0px; left: 0px; position: absolute; z-index: 1000; border: 0px;',
            tabindex: '0',
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

    async checkForgotPassword() {
        await checkElementAttributesSafely(this.linkForgot, {
            class: 'link-primary',
        }, 'Forgot password?')
    }

    async checkGoogleSignIn() {
        await checkElementAttributesSafely(this.googleSignIn, {
            class: 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100',
        })
    }

    async checkFacebookSignIn() {
        await checkElementAttributesSafely(this.googleSignIn, {
            class: 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100',
        })
    }

    async checkRememberMe() {
        await checkElementAttributesSafely(this.inputRemember, {
            class: 'form-check-input',
            type: 'checkbox',
        })
    }

    async checkKeyEye() {
        await checkElementAttributesSafely(this.inputRemember, {})
    }

    async checkSignUp() {
        await checkElementAttributesSafely(this.linkSignUp, {
            class: 'link-primary fw-semibold',
        }, 'Sign up')
    }

}