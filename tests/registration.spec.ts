import { test, Page, expect } from '@playwright/test';
import { SignIn } from '../Pages/SignIn';
import { Header } from '../Pages/Header';
import { HomePage } from '../Pages/HomePage';
import { UrlSafelyCheck, checkTitleSafely, openSiteSafely, safeCheck, safeClick, safeFill } from '../Pages/methods';
import { SignUp } from '../Pages/SignUp'
import { GooglePage } from '../Pages/GooglePage';


test.describe('registration on site', async () => {
    let homepage: HomePage;
    let header: Header;
    let signIn: SignIn;
    let signUp: SignUp;
    let googlePage: GooglePage;


    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        header = new Header(page);
        signIn = new SignIn(page);
        signUp = new SignUp(page);
        googlePage = new GooglePage(page);

        // якщо опен сайт виконається ок, якщо ні, буде помилка
        await openSiteSafely(homepage.page);
        await UrlSafelyCheck(homepage.page, 'https://gobigreviews.com/');
        await checkTitleSafely(homepage.page);
        await header.checkLogolink();
        await header.checkSignIn();
        await safeClick(header.linkSignIn);
        await safeClick(signIn.linkSignUp);

    })

    test('registration', async () => {
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, 'Test');
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, 'test123456@gmail.com');
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, 'Qwerty123');
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        // await signUp.checkSubmit();
        // await safeClick(signUp.btnSubmit);
    })

    test('registration with empty fields', async () => {
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, '');
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, '');
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, '');
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.submitBtnDisable();
    })

    test('registration with not valid email', async () => {
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, 'Test');
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, 'test.gmail.com');
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, 'Qwerty123');
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.checkSubmit();
        await safeClick(signUp.btnSubmit);
        await signUp.validationEmail();
        // error? (Адрес электронной почты должен содержать символ "@". В адресе "test.mail,com" отсутствует символ "@")
    })

    test('registration with not valid password', async () => {
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, 'Testing');
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, 'test123456@gmail.com');
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, '1234578');
        await signUp.checkRepeatPassword();
        await safeFill(signUp.inputRepeatPassword, '1234578');
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.checkSubmit();
        await safeClick(signUp.btnSubmit);
        await signUp.checkAllErrors();
    
    })

    test('registration with not existing Email', async () => {
        await signUp.checkLogo();
        await signUp.checkInputName();
        await safeFill(signUp.inputName, 'Test');
        await signUp.checkInputEmail();
        await safeFill(signUp.inputEmailSignUp, 'test@gmail.com');
        await signUp.checkInputPassword();
        await safeFill(signUp.inputPasswordSignUp, 'Qwerty123');
        await signUp.checkRepeatPassword();
        await safeFill(signUp.inputRepeatPassword, 'Qwerty123');
        await signUp.checkAcceptCondition();
        await safeClick(signUp.acceptCondition);
        await signUp.checkAcceptNews();
        await safeClick(signUp.checkBoxNews);
        await signUp.checkSubmit();
        await safeClick(signUp.btnSubmit);
        await signUp.checkAllErrors();

    })

    // test('regisration with google', async () => {
    //     await signUp.checkLogo();
    //     await signUp.checkGoogleSignUp();
    //     await safeClick(signUp.googleSignUp);
    //     await googlePage.checkGooglePage();
    // })

})