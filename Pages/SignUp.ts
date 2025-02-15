import { Locator, Page, expect } from '@playwright/test';


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
        this.invalidPassword = page.locator('div[class="text-danger errors-field"]')
        this.existingEmail = page.locator('div[class="text-danger errors-field"]')
        
    }

    async checkLogo() {
        await expect(this.logoSinUp).toBeVisible();
        await expect(this.logoSinUp).toHaveAttribute('class', 'btn-link mb-7 d-block mx-auto w-auto');
        await expect(this.logoSinUp).toBeTruthy();
    }

    async checkSubmit() {
        await expect(this.btnSubmit).toBeVisible();
        await expect(this.btnSubmit).toBeTruthy();
        await expect(this.btnSubmit).toHaveAttribute('class', 'btn btn-primary');
        await expect(this.btnSubmit).toHaveAttribute('type', 'submit');
    }

    async checkChat() {
        await expect(this.btnChat).toBeVisible();
        await expect(this.btnChat).toBeTruthy();
        await expect(this.btnChat).toHaveAttribute('type', 'button');
        await expect(this.btnChat).toHaveAttribute('style', 'bottom: 0px; left: 0px; position: absolute; z-index: 1000; border: 0px;');
        await expect(this.btnChat).toHaveAttribute('tabindex', '0');
    }

    async checkClosedChat() {
        await expect(this.closeIconChat).toBeVisible();
        await expect(this.closeIconChat).toBeTruthy();
        await expect(this.closeIconChat).toHaveAttribute('role', 'button');
        await expect(this.closeIconChat).toHaveAttribute('data-text', 'Close');
        await expect(this.closeIconChat).toHaveAttribute('aria-label', 'Close');
        await expect(this.closeIconChat).toHaveAttribute('tabindex', '0');
    }


    async checkGoogleSignUp() {
        await expect(this.googleSignUp).toBeVisible();
        await expect(this.googleSignUp).toBeTruthy();
        await expect(this.googleSignUp).toHaveAttribute('class', 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100');
    }

    async checkFacebookSignUp() {
        await expect(this.facebookSignUp).toBeVisible();
        await expect(this.facebookSignUp).toBeTruthy();
        await expect(this.facebookSignUp).toHaveAttribute('class', 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100');
    }

    async checkAcceptCondition() {
        await expect(this.acceptCondition).toBeVisible();
        await expect(this.acceptCondition).toBeTruthy();
        await expect(this.acceptCondition).toHaveAttribute('class', 'form-check-input');
        await expect(this.acceptCondition).toHaveAttribute('type', 'checkbox')
    }

    async checkKeyEye() {
        await expect(this.keyEyeSignUp).toBeVisible();
        await expect(this.keyEyeSignUp).toBeTruthy();
    }

    async checkSignIn() {
        await expect(this.linkSignIn).toBeVisible();
        await expect(this.linkSignIn).toBeTruthy();
        await expect(this.linkSignIn).toHaveAttribute('class', 'link-primary fw-semibold');
        await expect(this.linkSignIn).toHaveText('Sign in');
    }

    async checkAcceptNews() {
        await expect(this.checkBoxNews).toBeVisible();
        await expect(this.checkBoxNews).toBeTruthy();
        await expect(this.checkBoxNews).toHaveAttribute('type', 'checkbox');
    }

    async checkInputName() {
        await expect(this.inputName).toBeVisible();
        await expect(this.inputName).toBeTruthy();
        await expect(this.inputName).toHaveAttribute('type', 'text');
        await expect(this.inputName).toHaveAttribute('class', 'form-control bg-transparent');
        await expect(this.inputName).toHaveAttribute('placeholder', 'Name');
    }

    async checkInputEmail() {
        await expect(this.inputEmailSignUp).toBeVisible();
        await expect(this.inputEmailSignUp).toBeTruthy();
        await expect(this.inputEmailSignUp).toHaveAttribute('type', 'email');
        await expect(this.inputEmailSignUp).toHaveAttribute('class', 'form-control bg-transparent');
        await expect(this.inputEmailSignUp).toHaveAttribute('placeholder', 'Email');
    }

    async checkInputPassword() {
        await expect(this.inputPasswordSignUp).toBeVisible();
        await expect(this.inputPasswordSignUp).toBeTruthy();
        await expect(this.inputPasswordSignUp).toHaveAttribute('type', 'password');
        // await expect(this.inputPasswordSignUp).toHaveAttribute('class', 'form-control bg-transparent');
        await expect(this.inputPasswordSignUp).toHaveAttribute('placeholder', 'Password');
    }

    async checkRepeatPassword() {
        await expect(this.inputRepeatPassword).toBeVisible();
        await expect(this.inputRepeatPassword).toBeTruthy();
        await expect(this.inputRepeatPassword).toHaveAttribute('type', 'password');
        // await expect(this.inputRepeatPassword).toHaveAttribute('class', 'form-control bg-transparent');
        await expect(this.inputRepeatPassword).toHaveAttribute('placeholder', 'Repeat Password');
    }

    async submitBtnDisable() {
        await expect(this.btnSubmit).toBeVisible();
        await expect(this.btnSubmit).toBeTruthy();
        await expect(this.btnSubmit).toHaveAttribute('class', 'btn btn-primary');
        await expect(this.btnSubmit).toHaveAttribute('type', 'submit');
        await expect(this.btnSubmit).toBeDisabled();
    }

    async checkInvalidPassword() {
        await expect(this.invalidPassword).toBeVisible();
        await expect(this.invalidPassword).toBeTruthy();
        await this.invalidPassword.waitFor({ timeout: 30000 });
        await expect(this.invalidPassword).toHaveText('The password field format is invalid.')
    }

    async checkExistingdEmail() {
        await this.existingEmail.waitFor({ timeout: 30000 });
        await expect(this.existingEmail).toBeVisible();
        await expect(this.existingEmail).toBeTruthy();
        await expect(this.existingEmail).toHaveText('The email has already been taken.')
    }

}