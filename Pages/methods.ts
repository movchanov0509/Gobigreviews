import { test, Page, expect, Locator } from '@playwright/test';

export async function safeClick(locator: Locator) {
    try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.click();
    } catch (error) {
        console.warn(`Не вдалося кликнути по елементу ${locator.toString()}:`, error);
    }
}
export async function safeFill(locator: Locator, value: string) {
    try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.fill(value);
    } catch (error) {
        console.warn(`Не удалось заполнить поле ${locator.toString()} значением "${value}":`, error);
    }
}

export async function safeCheck(locator: Locator) {
    try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.check();
    } catch (error) {
        console.warn(`Не удалось отметить чекбокс ${locator.toString()}:`, error);
    }
}

export async function safeEmailFill(locator: Locator, value: string) {
    try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.fill(value);
    } catch (error) {
        console.warn(`Не удалось заполнить поле ${locator.toString()} значением "${value}":`, error);
    }
}

export async function safePasswordFill(locator: Locator, value: string) {
    try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.fill(value);
    } catch (error) {
        console.warn(`Не удалось заполнить поле ${locator.toString()} значением "${value}":`, error);
    }
}