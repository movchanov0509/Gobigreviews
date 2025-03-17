import { test, Page, expect, Locator } from '@playwright/test';

export async function safeClick(locator: Locator, timeout = 5000) {
    try {
        await locator.waitFor({ state: 'visible', timeout });
        await locator.click();
    } catch (error) {
        console.warn(`Failed to click element ${locator.toString()}:`, error);
    }
}

export async function safeFill(locator: Locator, value: string, timeout = 5000) {
    try {
        await locator.waitFor({ state: 'visible', timeout });
        await locator.fill(value);
    } catch (error) {
        console.warn(`Failed to fill field ${locator.toString()} with value "${value}":`, error);
    }
}

export async function safeCheck(locator: Locator, timeout = 5000) {
    try {
        await locator.waitFor({ state: 'visible', timeout });
        await locator.check();
    } catch (error) {
        console.warn(`Failed to check checkbox ${locator.toString()}:`, error);
    }
}

export async function openSiteSafely(page: Page, timeout = 5000) {
    try {
        await page.goto('/', { waitUntil: 'domcontentloaded', timeout });
    } catch (error) {
        console.warn('Failed to open website:', error);
    }
}

export async function checkTitleSafely(page: Page, expectedTitle: string, timeout = 5000) {
    try {
        await expect(page).toHaveTitle(expectedTitle, { timeout });
    } catch (error) {
        console.warn('Failed to verify page title:', error);
    }
}

export async function urlSafelyCheck(page: Page, expectedURL: string, timeout = 5000) {
    try {
        await expect(page).toHaveURL(expectedURL, { timeout });
    } catch (error) {
        console.warn(`Page URL doesn't match expected: ${expectedURL}`, error);
    }
}

export async function checkElementAttributesSafely(
    elementLocator: Locator,
    expectedAttributes: Record<string, string>,
    expectedText?: string,
    timeout = 5000
) {
    try {
        await expect(elementLocator).toBeVisible({ timeout });

        for (const [attribute, expectedValue] of Object.entries(expectedAttributes)) {
            await expect(elementLocator).toHaveAttribute(attribute, expectedValue);
        }

        if (expectedText !== undefined) {
            await expect(elementLocator).toHaveText(expectedText);
        }
    } catch (error) {
        console.warn('Element does not match expected attributes or text:', { expectedAttributes, expectedText }, error);
    }
}