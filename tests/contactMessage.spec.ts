import { test, Page, expect } from '@playwright/test';
import { Header } from '../Pages/Header';
import { HomePage } from '../Pages/HomePage';
import { urlSafelyCheck, checkTitleSafely, openSiteSafely, safeCheck, safeClick, safeFill } from '../Pages/methods';
import { Contact } from '../Pages/Contact';
import * as users from '../tests/users.json';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

test.describe('send contact message', async () => {
    let homepage: HomePage;
    let header: Header;
    let contact: Contact;
    interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        header = new Header(page);
        contact = new Contact(page);


        //await openSiteSafely(homepage.page);
        await page.goto('https://gobigreviews.com/');
        //await checkTitleSafely(homepage.page);
        await header.checkLogolink();
        await header.checkSignIn();
        await safeClick(header.linkContact);
    
    })

    test('contactMessage with valid data', async () => { 
        const validData: ContactFormData = users.contactForm.validData;
        await contact.checkTitle();
        await contact.checkInputName();
        await safeFill(contact.inputName, validData.name);
        await contact.checkInputEmail();
        await safeFill(contact.inputEmail, validData.email);
        await contact.checkInputSubject();
        await safeFill(contact.inputSubject, validData.subject);
        await contact.checkInputMessage();
        await safeFill(contact.inputMessage, validData.message);
        await contact.checkBtnSendMessage();
        await safeClick(contact.btnSendMessage);
        await contact.checkSuccessMessage();
    })

    test('contactMessage with empty fields', async () => {
        const emptyFields: ContactFormData = users.contactForm.emptyFields;
        await contact.checkTitle();
        await contact.checkInputName();
        await safeFill(contact.inputName, emptyFields.name);
        await contact.checkInputEmail();
        await safeFill(contact.inputEmail, emptyFields.email);
        await contact.checkInputSubject();
        await safeFill(contact.inputSubject, emptyFields.subject);
        await contact.checkInputMessage();
        await safeFill(contact.inputMessage, emptyFields.message);
        await contact.checkBtnSendMessage();
        await contact.verifySubmitButtonDisabled();

    })

    test('contactMessage with invalid email', async () => {
        const invalidEmail: ContactFormData = users.contactForm.invalidEmail;
        await contact.checkTitle();
        await contact.checkInputName();
        await safeFill(contact.inputName, invalidEmail.name);
        await contact.checkInputEmail();
        await safeFill(contact.inputEmail, invalidEmail.email);
        await contact.checkInputSubject();
        await safeFill(contact.inputSubject, invalidEmail.subject);
        await contact.checkInputMessage();
        await safeFill(contact.inputMessage, invalidEmail.message);
        await contact.checkBtnSendMessage();
        await safeClick(contact.btnSendMessage);
        await contact.checkAllErrors();
    })
})