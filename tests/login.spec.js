import { test, expect } from '@playwright/test';

test('shopping', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    // await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    const product = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
    await expect(product).toBeVisible();
    await product.getByRole('button', { name: 'Add to cart' }).click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('[data-test="item-quantity"]')).toHaveText('1');

    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('backeta');
    await page.locator('[data-test="postalCode"]').fill('100101');
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    
});

// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('div').nth(4).click();
//   await page.locator('[data-test="username"]').press('ControlOrMeta+c');
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('div').nth(4).click();
//   await page.locator('[data-test="password"]').press('ControlOrMeta+c');
//   await page.locator('[data-test="password"]').fill('standard_user');
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="login-password"]').click();
//   await page.locator('body').press('ControlOrMeta+c');
//   await page.locator('div').nth(4).click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();
  
// });









