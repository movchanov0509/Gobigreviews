import { test, Page, expect } from '@playwright/test';
import { SignIn } from '../Pages/SignIn';
import { Header } from '../Pages/Header';
import { HomePage } from '../Pages/HomePage';
import { safeClick } from '../Pages/methods';


test.describe('regisration on site', async () => {
    let homepage: HomePage;
    let header: Header;
    let signIn: SignIn;


    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        header = new Header(page);
        signIn = new SignIn(page);

        // якщо опен сайт виконається ок, якщо ні, буде помилка
        try {
            await homepage.openSite();
        } catch (error) {
            console.warn('Open site error:', error)
        }

        await safeClick(header.linkSignIn)

        await safeClick(signIn.linkSignUp)

    })

    test('registration', async () => {

    })

})