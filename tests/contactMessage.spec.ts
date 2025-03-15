import { test, Page, expect } from '@playwright/test';
import { Header } from '../Pages/Header';
import { HomePage } from '../Pages/HomePage';
import { UrlSafelyCheck, checkTitleSafely, openSiteSafely, safeCheck, safeClick, safeFill } from '../Pages/methods';
import { Contact } from '../Pages/Contact';


test.describe('send contact message', async () => {
    let homepage: HomePage;
    let header: Header;
    let contact: Contact;


    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        header = new Header(page);
        contact = new Contact(page);


        await openSiteSafely(homepage.page);
        await UrlSafelyCheck(homepage.page, 'https://gobigreviews.com/');
        await checkTitleSafely(homepage.page);
        await header.checkLogolink();
        await header.checkSignIn();
        await safeClick(header.linkContact);
    
    })

    test('contactMessage with valid data', async () => { 
        await contact.checkTitle();
        await contact.checkInputName();
        await safeFill(contact.inputName, 'Test');
        await contact.checkInputEmail();
        await safeFill(contact.inputEmail, 'test123@gmai.com');
        await contact.checkInputSubject();
        await safeFill(contact.inputSubject, 'Testing');
        await contact.checkInputMessage();
        await safeFill(contact.inputMessage, 'Test message');
        await contact.checkBtnSendMessage();
        await safeClick(contact.btnSendMessage);
    })

    test('contactMessage with empty fields', async () => {
        await contact.checkTitle();
        await contact.checkInputName();
        await safeFill(contact.inputName, '');
        await contact.checkInputEmail();
        await safeFill(contact.inputEmail, '');
        await contact.checkInputSubject();
        await safeFill(contact.inputSubject, '');
        await contact.checkInputMessage();
        await safeFill(contact.inputMessage, '');
        await contact.checkBtnSendMessage();
        await safeClick(contact.btnSendMessage);
        await contact.submitBtnDisable();

    })

    test('contactMessage with invalid email', async () => {
        await contact.checkTitle();
        await contact.checkInputName();
        await safeFill(contact.inputName, 'Test');
        await contact.checkInputEmail();
        await safeFill(contact.inputEmail, 'test123gmail.com');
        await contact.checkInputSubject();
        await safeFill(contact.inputSubject, 'Testing');
        await contact.checkInputMessage();
        await safeFill(contact.inputMessage, 'Test message');
        await contact.checkBtnSendMessage();
        await safeClick(contact.btnSendMessage);
        await contact.checkAllErrors();
    })
})