import { Locator, Page, expect } from '@playwright/test';


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
        try {
            await expect(this.logo).toBeVisible();
            await expect(this.logo).toHaveAttribute('a', 'href="/"');
            await expect(this.logo).toBeTruthy();
        } catch (error) {
            console.error("Error in checkLogo:", error);
            throw error;
        }
    }

    async checkSubmit() {
        try {
            await expect(this.btnSubmit).toBeVisible();
            await expect(this.btnSubmit).toBeTruthy();
            await expect(this.btnSubmit).toHaveAttribute('class', 'btn btn-primary');
        } catch (error) {
            console.error("Error in checkSubmit:", error);
            throw error;
        }
    }

    async checkChat() {
        try {
            await expect(this.btnChat).toBeVisible();
            await expect(this.btnChat).toBeTruthy();
            await expect(this.btnChat).toHaveAttribute('type', 'button');
            await expect(this.btnChat).toHaveAttribute('style', 'bottom: 0px; left: 0px; position: absolute; z-index: 1000; border: 0px;');
            await expect(this.btnChat).toHaveAttribute('tabindex', '0');
        } catch (error) {
            console.error("Error in checkChat:", error);
            throw error;
        }
    }

    async checkClosedChat() {
        try {
            await expect(this.closeIconChat).toBeVisible();
            await expect(this.closeIconChat).toBeTruthy();
            await expect(this.closeIconChat).toHaveAttribute('role', 'button');
            await expect(this.closeIconChat).toHaveAttribute('data-text', 'Close');
            await expect(this.closeIconChat).toHaveAttribute('aria-label', 'Close');
            await expect(this.closeIconChat).toHaveAttribute('tabindex', '0');
        } catch (error) {
            console.error("Error in checkClosedChat:", error);
            throw error;
        }
    }

    async checkForgotPassword() {
        try {
            await expect(this.linkForgot).toBeVisible();
            await expect(this.linkForgot).toBeTruthy();
            await expect(this.linkForgot).toHaveText(' Forgot password? ');
            await expect(this.linkForgot).toHaveAttribute('class', 'link-primary');
        } catch (error) {
            console.error("Error in checkForgotPassword:", error);
            throw error;
        }
    }

    async checkGoogleSignIn() {
        try {
            await expect(this.googleSignIn).toBeVisible();
            await expect(this.googleSignIn).toBeTruthy();
            await expect(this.googleSignIn).toHaveAttribute('class', 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100');
        } catch (error) {
            console.error("Error in checkGoogleSignIn:", error);
            throw error;
        }
    }

    async checkFacebookSignIn() {
        try {
            await expect(this.facebookSignIn).toBeVisible();
            await expect(this.facebookSignIn).toBeTruthy();
            await expect(this.facebookSignIn).toHaveAttribute('class', 'btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100');
        } catch (error) {
            console.error("Error in checkFacebookSignIn:", error);
            throw error;
        }
    }

    async checkRememberMe() {
        try {
            await expect(this.inputRemember).toBeVisible();
            await expect(this.inputRemember).toBeTruthy();
            await expect(this.inputRemember).toHaveAttribute('class', 'form-check-input');
            await expect(this.inputRemember).toHaveAttribute('type', 'checkbox');
        } catch (error) {
            console.error("Error in checkRememberMe:", error);
            throw error;
        }
    }

    async checkKeyEye() {
        try {
            await expect(this.keyEye).toBeVisible();
            await expect(this.keyEye).toBeTruthy();
        } catch (error) {
            console.error("Error in checkKeyEye:", error);
            throw error;
        }
    }

    async checkSignUp() {
        try {
            await expect(this.linkSignUp).toBeVisible();
            await expect(this.linkSignUp).toBeTruthy();
            await expect(this.linkSignUp).toHaveAttribute('class', 'link-primary fw-semibold');
            await expect(this.linkSignUp).toHaveText('Sign up');
        } catch (error) {
            console.error("Error in checkSignUp:", error);
            throw error;
        }
    }

}