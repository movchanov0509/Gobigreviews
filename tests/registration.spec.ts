import { test, Page, expect } from '@playwright/test';
import { SignIn } from '../Pages/SignIn';
import { Header } from '../Pages/Header';
import { HomePage } from '../Pages/HomePage';
import { urlSafelyCheck, checkTitleSafely, openSiteSafely, safeCheck, safeClick, safeFill } from '../Pages/methods';
import { SignUp } from '../Pages/SignUp'
import * as users from '../tests/users.json';

interface RegistrationFormData {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

test.describe('registration on site', async () => {
    let homepage: HomePage;
    let header: Header;
    let signIn: SignIn;
    let signUp: SignUp;


    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        header = new Header(page);
        signIn = new SignIn(page);
        signUp = new SignUp(page);


        //await openSiteSafely(homepage.page);
        await page.goto('https://gobigreviews.com/');
       // await checkTitleSafely(homepage.page);
        await header.checkLogolink();
        await header.checkSignIn();
        await safeClick(header.linkSignIn);
        await safeClick(signIn.linkSignUp);

    })

    test('registration', async () => {
        const validData: RegistrationFormData = users.registrationForm.validData;
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, validData.name);
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, validData.email);
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, validData.password);
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        // await signUp.checkSubmit();
        // await safeClick(signUp.btnSubmit);
    })

    test('registration with empty fields', async () => {
        const emptyData: RegistrationFormData = users.registrationForm.emptyData;
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, emptyData.name);
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, emptyData.email);
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, emptyData.password);
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.submitBtnDisable();
    })

    test('registration with not valid email', async () => {
        const invalidEmail: RegistrationFormData = users.registrationForm.invalidEmail;
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, invalidEmail.name);
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, invalidEmail.email);
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, 'invalidEmail.password');    
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.checkSubmit();
        await safeClick(signUp.btnSubmit);
        await signUp.validationEmail();

    })

    test('registration with not valid password', async () => {
        const invalidPassword: RegistrationFormData = users.registrationForm.invalidPassword;
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, invalidPassword.name);
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, invalidPassword.email);
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, invalidPassword.password);
        await signUp.checkRepeatPassword();
        await safeFill(signUp.inputRepeatPassword, invalidPassword.repeatPassword);
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.checkSubmit();
        await safeClick(signUp.btnSubmit);
        await signUp.checkAllErrors();
    
    })

    test('registration with existing Email', async () => {
        const existingEmail: RegistrationFormData = users.registrationForm.existEmail;
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, existingEmail.name);
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, existingEmail.email);
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, existingEmail.password);
        await signUp.checkRepeatPassword();
        await safeFill(signUp.inputRepeatPassword, existingEmail.repeatPassword);
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.checkSubmit();
        await safeClick(signUp.btnSubmit);
        await signUp.checkAllErrors();

    })

})