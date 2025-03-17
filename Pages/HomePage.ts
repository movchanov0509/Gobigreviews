import { Locator, Page, expect } from '@playwright/test';
import { checkElementAttributesSafely } from './methods';


export class HomePage{
    readonly page: Page;
    readonly titlePart1: Locator;
    readonly titlePart2: Locator;
    readonly titlePart3: Locator;
    readonly mainText: Locator;
    readonly stsrtFreeBtn: Locator;
    readonly iconChat: Locator;
    readonly closeChatBtn: Locator;
    readonly chatBtn: Locator;
    constructor (page: Page){
        this.page = page;
        this.titlePart1 = page.locator('h2:has-text("Boost Reviews.")');
        this.titlePart2 = page.locator('h2:has-text("Boost Sales.")');
        this.titlePart3 = page.locator('h2:has-text("Instantly!")');
        this.mainText = page.locator('p:has-text("Launch precise marketing campaigns, get more reviews, convert prospects, boost your online rating, and increase your revenue!")');
        this.stsrtFreeBtn = page.locator('a[class="btn btn-primary shadow btn-theme btn-gray"]');
        this.iconChat = page.locator('img[src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/168-r-br.svg"]');
        this.closeChatBtn = page.locator('i[role="button"]');
        this.chatBtn = page.locator('button[class="tawk-custom-color tawk-custom-border-color tawk-outline tawk-button tawk-button-circle tawk-button-large"]');
      
    }

    async checkTitlePart1(){
        await checkElementAttributesSafely(this.titlePart1, {
            class: 'mb-0 main-title',
        }, 'Boost Reviews.');
    }

    async checkTitlePart2(){
        await checkElementAttributesSafely(this.titlePart2, {
            class: 'mb-0 main-title',
        }, 'Boost Sales.');
    }

    async checkTitlePart3(){
        await checkElementAttributesSafely(this.titlePart3, {
            class: 'mb-0 main-title',
        }, 'Instantly!');
    }

    async checkMainText(){
        await checkElementAttributesSafely(this.mainText, {
            class: 'main-text',
        }, 'Launch precise marketing campaigns, get more reviews, convert prospects, boost your online rating, and increase your revenue!');
    }

    async checkStartFreeBtn(){
        await checkElementAttributesSafely(this.stsrtFreeBtn, {
            class: 'btn btn-primary shadow btn-theme btn-gray',
            rel: 'canonical',
            href: '/register',
            style: 'margin-bottom: 70px;',
        });
    }

    async checkChatIcon(){
        await checkElementAttributesSafely(this.iconChat, {
            src: 'https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/168-r-br.svg',
            alt: 'Chat attention grabber',
            style: 'width: 124px; height: 79px;',
        });
    }

    async checkCloseChatBtn(){
        await checkElementAttributesSafely(this.closeChatBtn, {
            role: 'button',
            'data-text': 'Close',
            'aria-label': 'Close',
            tabindex: '0',
            class: 'tawk-icon tawk-icon-close tawk-icon-small',
        });
    }

    async checkChatBtn(){
        await checkElementAttributesSafely(this.chatBtn, {
            class: 'tawk-custom-color tawk-custom-border-color tawk-outline tawk-button tawk-button-circle tawk-button-large',
            tabindex: '0',
            style: 'bottom: 0px; left: 0px; position: absolute; z-index: 1000; border: 0px;',
        });
    }
}