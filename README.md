# Playwright: การติดตั้งและการใช้งาน

## 1. Playwright คืออะไร
Playwright เป็นเครื่องมือสำหรับทดสอบเว็บไซต์อัตโนมัติ (End-to-End Testing) สามารถจำลองการใช้งานเว็บไซต์ เช่น การเข้าสู่ระบบ การกรอกแบบฟอร์ม การคลิกปุ่ม และการตรวจสอบผลลัพธ์ รองรับเบราว์เซอร์ Chromium, Firefox และ WebKit

## 2. สิ่งที่ต้องเตรียม
- Node.js เวอร์ชัน LTS
- npm
- Visual Studio Code (VS Code)

## 3. การติดตั้ง

เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วรันคำสั่งต่อไปนี้

```bash
npm init playwright@latest
```

จากนั้นเลือกภาษา JavaScript กำหนดโฟลเดอร์สำหรับเก็บไฟล์ทดสอบ และติดตั้งเบราว์เซอร์ตามขั้นตอนที่โปรแกรมแนะนำ

## 4. ตัวอย่างการเขียน Test Case

สร้างไฟล์ `tests/example.spec.js` แล้วเขียนโค้ดดังนี้

```javascript
const { test, expect } = require('@playwright/test');

test('ตรวจสอบการเปิดเว็บไซต์', async ({ page }) => {
  // เปิดเว็บไซต์ตัวอย่าง
  await page.goto('https://example.cypress.io');

  // ตรวจสอบว่ามีข้อความ Kitchen Sink แสดงอยู่
  await expect(
    page.getByRole('heading', { name: 'Kitchen Sink' })
  ).toBeVisible();
});
```

### คำอธิบายคำสั่ง
- `test()` ใช้กำหนดกรณีทดสอบ (Test Case)
- `page.goto()` ใช้เปิดเว็บไซต์
- `getByRole()` ใช้ค้นหาองค์ประกอบตามประเภทและชื่อที่กำหนด
- `expect()` ใช้ตรวจสอบผลลัพธ์ที่คาดหวัง
- `toBeVisible()` ใช้ตรวจสอบว่าองค์ประกอบแสดงอยู่บนหน้าเว็บ

## 5. การรันทดสอบ

**รันทดสอบทั้งหมด**

```bash
npx playwright test
```

**รันทดสอบโดยเปิดเบราว์เซอร์ให้เห็น**

```bash
npx playwright test --headed
```

**เปิดหน้าจอ UI สำหรับดูและควบคุมการทดสอบ**

```bash
npx playwright test --ui
```

**เปิดรายงานผลการทดสอบ**

```bash
npx playwright show-report
```

## 6. โครงสร้างโปรเจกต์

```text
project/
├── tests/
│   └── example.spec.js
├── playwright.config.js
├── package.json
└── package-lock.json
```

## 7. เอกสารเพิ่มเติม
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Extension สำหรับ VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

### Playwright Test for VS Code (Extention)

# Playwright Command Guide

## 1. Playwright คืออะไร

Playwright เป็นเครื่องมือสำหรับทดสอบเว็บไซต์อัตโนมัติ (End-to-End Testing) รองรับ JavaScript และ TypeScript สามารถจำลองการใช้งานเว็บไซต์ เช่น การเข้าสู่ระบบ การกรอกแบบฟอร์ม การคลิกปุ่ม และการตรวจสอบผลลัพธ์ รองรับเบราว์เซอร์ Chromium, Firefox และ WebKit

## 2. คำสั่งพื้นฐาน

| คำสั่ง | คำอธิบาย | ตัวอย่าง |
|---|---|---|
| `page.goto()` | เปิดเว็บไซต์ | `await page.goto('/login')` |
| `page.locator()` | ค้นหา Element ด้วย Selector | `page.locator('#username')` |
| `page.getByRole()` | ค้นหาตามบทบาทของ Element | `page.getByRole('button', { name: 'Login' })` |
| `page.getByText()` | ค้นหาจากข้อความ | `page.getByText('Welcome')` |
| `page.getByLabel()` | ค้นหาช่องกรอกจาก Label | `page.getByLabel('Username')` |
| `.click()` | คลิก Element | `await page.locator('button').click()` |
| `.fill()` | กรอกหรือแทนที่ข้อความในช่อง | `await page.locator('#username').fill('test')` |
| `.press()` | กดแป้นพิมพ์ | `await page.locator('#username').press('Enter')` |
| `.check()` | เลือก Checkbox | `await page.locator('#accept').check()` |
| `.uncheck()` | ยกเลิก Checkbox | `await page.locator('#accept').uncheck()` |
| `.selectOption()` | เลือกตัวเลือกใน Dropdown | `await page.locator('select').selectOption('TH')` |
| `.clear()` | ล้างข้อความในช่องกรอก | `await page.locator('#username').clear()` |
| `page.reload()` | โหลดหน้าเว็บใหม่ | `await page.reload()` |
| `page.goBack()` | ย้อนกลับหน้าก่อนหน้า | `await page.goBack()` |

หมายเหตุ: คำสั่งที่ใช้ `await` ต้องอยู่ภายในฟังก์ชัน `async`

## 3. คำสั่งตรวจสอบผลลัพธ์ (Assertions)

ใช้ `expect()` เพื่อตรวจสอบว่าผลลัพธ์ตรงตามที่คาดหวังหรือไม่

| คำสั่ง | คำอธิบาย |
|---|---|
| `await expect(locator).toBeVisible()` | Element แสดงอยู่ |
| `await expect(locator).toBeHidden()` | Element ถูกซ่อน |
| `await expect(locator).toHaveText('Success')` | ข้อความตรงตามที่กำหนด |
| `await expect(locator).toContainText('Success')` | มีข้อความที่กำหนดอยู่ภายใน |
| `await expect(locator).toHaveValue('test')` | ค่าในช่องกรอกตรงตามที่กำหนด |
| `await expect(locator).toBeEnabled()` | Element พร้อมใช้งาน |
| `await expect(locator).toBeDisabled()` | Element ถูกปิดใช้งาน |
| `await expect(locator).toBeChecked()` | Checkbox ถูกเลือกแล้ว |
| `await expect(locator).toHaveCount(3)` | จำนวน Element เท่ากับ 3 |
| `await expect(page).toHaveURL(/dashboard/)` | URL ตรงตามเงื่อนไข |

### ตัวอย่าง

```javascript
const { test, expect } = require('@playwright/test');

test('ตรวจสอบการเข้าสู่ระบบ', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.getByLabel('Username').fill('testuser');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
  await expect(
    page.getByText('Welcome')
  ).toBeVisible();
});
```

ตัวอย่างนี้ใช้ URL และ Label สมมติ ต้องเปลี่ยนให้ตรงกับเว็บไซต์จริง

## 4. การค้นหา Element (Locators)

| ประเภท | ตัวอย่าง | คำอธิบาย |
|---|---|---|
| ID / CSS Selector | `page.locator('#username')` | ค้นหาจาก CSS Selector |
| Class | `page.locator('.login-btn')` | ค้นหาจาก Class |
| บทบาท | `page.getByRole('button', { name: 'Login' })` | ค้นหาตามบทบาทและชื่อ |
| ข้อความ | `page.getByText('Welcome')` | ค้นหาจากข้อความ |
| Label | `page.getByLabel('Username')` | ค้นหาจาก Label |
| Placeholder | `page.getByPlaceholder('Enter username')` | ค้นหาจาก Placeholder |
| Test ID | `page.getByTestId('login-button')` | ค้นหาจาก Test ID |
| ลำดับ | `page.locator('button').nth(0)` | เลือก Element ลำดับแรก |

แนะนำให้ใช้ `getByRole()`, `getByLabel()` หรือ `getByTestId()` เมื่อเหมาะสม เพราะช่วยให้โค้ดอ่านง่ายและลดการยึดติดกับโครงสร้าง CSS

## 5. การจัดกลุ่ม Test Case และ Hooks

| คำสั่ง | คำอธิบาย |
|---|---|
| `test()` | กำหนด Test Case |
| `test.describe()` | จัดกลุ่ม Test Case |
| `test.beforeEach()` | ทำงานก่อน Test Case แต่ละกรณี |
| `test.afterEach()` | ทำงานหลัง Test Case แต่ละกรณี |
| `test.beforeAll()` | ทำงานก่อนเริ่มชุดทดสอบ |
| `test.afterAll()` | ทำงานหลังจบชุดทดสอบ |

### ตัวอย่าง

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com/login');
  });

  test('TC01 - ตรวจสอบหน้า Login', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Login' })
    ).toBeVisible();
  });

  test('TC02 - ตรวจสอบช่อง Username', async ({ page }) => {
    await expect(
      page.getByLabel('Username')
    ).toBeVisible();
  });

});
```

## 6. การรอ (Waiting)

Playwright มีระบบ Auto-waiting ที่รอให้ Element พร้อมใช้งานก่อนทำ Action และ Assertions จะลองตรวจสอบซ้ำจนกว่าจะผ่านหรือหมดเวลาที่กำหนด

| คำสั่ง | คำอธิบาย |
|---|---|
| `await locator.waitFor()` | รอจน Element เข้าสู่สถานะที่กำหนด |
| `await expect(locator).toBeVisible()` | รอจน Element แสดง |
| `await page.waitForURL('**/dashboard')` | รอจน URL ตรงตามเงื่อนไข |
| `await page.waitForResponse(...)` | รอ Response ที่ตรงกับเงื่อนไข |
| `await page.waitForTimeout(2000)` | รอ 2 วินาที |

ตัวอย่าง:

```javascript
await expect(
  page.getByText('Loading complete')
).toBeVisible({ timeout: 10000 });
```

ควรใช้ Auto-waiting และ Assertions เป็นหลัก แทนการกำหนดเวลารอตายตัวเมื่อสามารถทำได้

## 7. การตรวจสอบ API

ใช้ `page.request` สำหรับส่ง HTTP Request โดยตรง หรือใช้ `page.waitForResponse()` เพื่อตรวจสอบ Response ที่เกิดจากการทำงานบนหน้าเว็บ

### ตัวอย่างส่ง Request โดยตรง

```javascript
const { test, expect } = require('@playwright/test');

test('ตรวจสอบ API Users', async ({ request }) => {
  const response = await request.get('https://api.example.com/users');

  expect(response.status()).toBe(200);
});
```

เปลี่ยน URL เป็น API ที่มีอยู่จริงและสามารถเข้าถึงได้

### ตัวอย่างรอ Response จากหน้าเว็บ

```javascript
const responsePromise = page.waitForResponse(
  response => response.url().includes('/api/users')
);

await page.getByRole('button', { name: 'Load Users' }).click();

const response = await responsePromise;
expect(response.status()).toBe(200);
```

## 8. การใช้ข้อมูลทดสอบ (Fixtures)

ใช้ไฟล์ JSON เก็บข้อมูลที่ต้องการนำมาใช้ซ้ำ โดยสามารถใช้ร่วมกับ Test Case ได้

สร้างไฟล์ `tests/data/user.json`

```json
{
  "username": "testuser",
  "password": "password123"
}
```

ตัวอย่างเรียกใช้ข้อมูลด้วย Node.js:

```javascript
const { test, expect } = require('@playwright/test');
const user = require('./data/user.json');

test('ตรวจสอบข้อมูลผู้ใช้', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.getByLabel('Username').fill(user.username);
  await page.getByLabel('Password').fill(user.password);
});
```

## 9. การจัดการ Screenshot และขนาดหน้าจอ

| คำสั่ง | คำอธิบาย |
|---|---|
| `await page.screenshot()` | บันทึกภาพหน้าจอ |
| `await page.setViewportSize()` | กำหนดขนาดหน้าจอ |
| `await page.title()` | อ่านชื่อหน้าเว็บ |
| `page.url()` | อ่าน URL ปัจจุบัน |
| `await page.reload()` | โหลดหน้าเว็บใหม่ |

ตัวอย่าง:

```javascript
await page.setViewportSize({
  width: 1280,
  height: 720
});

await page.screenshot({
  path: 'screenshots/login.png',
  fullPage: true
});
```

ต้องสร้างโฟลเดอร์ `screenshots` ก่อน หากยังไม่มีอยู่

## 10. คำสั่งรันทดสอบ

| คำสั่ง | คำอธิบาย |
|---|---|
| `npx playwright test` | รันทดสอบทั้งหมด |
| `npx playwright test --headed` | รันโดยเปิดเบราว์เซอร์ |
| `npx playwright test --ui` | เปิดหน้าจอ UI สำหรับควบคุมการทดสอบ |
| `npx playwright test tests/login.spec.js` | รันเฉพาะไฟล์ที่กำหนด |
| `npx playwright test --debug` | รันทดสอบในโหมด Debug |
| `npx playwright show-report` | เปิดรายงานผลการทดสอบ |
| `npx playwright codegen https://example.com` | เปิดเครื่องมือช่วยสร้างโค้ดจากการใช้งานเว็บไซต์ |

## 11. ตัวอย่างประยุกต์: ทดสอบการเพิ่มสินค้าในตะกร้า

ตัวอย่างนี้ใช้เว็บไซต์ SauceDemo

```javascript
const { test, expect } = require('@playwright/test');

test('TC01 - ตรวจสอบการเพิ่มสินค้าลงตะกร้า', async ({ page }) => {

  // เปิดเว็บไซต์
  await page.goto('https://www.saucedemo.com');

  // เข้าสู่ระบบ
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // เพิ่มสินค้าลงตะกร้า
  await page.getByRole('button', {
    name: 'Add to cart'
  }).first().click();

  // ตรวจสอบจำนวนสินค้าในตะกร้า
  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveText('1');

  // เปิดตะกร้าสินค้า
  await page.locator('.shopping_cart_link').click();

  // ตรวจสอบชื่อสินค้า
  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();

});
```

## 12. แนวทางเลือกใช้คำสั่ง

| สิ่งที่ต้องการทดสอบ | คำสั่งที่เหมาะสม |
|---|---|
| Login | `page.goto()`, `fill()`, `click()` |
| ตรวจสอบข้อความ | `getByText()`, `expect()` |
| ตรวจสอบฟอร์ม | `fill()`, `clear()`, `check()`, `selectOption()` |
| ตรวจสอบค่าคำนวณ | `expect()` |
| ตรวจสอบ API | `page.request`, `waitForResponse()` |
| เตรียมข้อมูลทดสอบ | JSON Fixtures |
| ตรวจสอบ Responsive | `setViewportSize()` |
| บันทึกภาพหน้าจอ | `screenshot()` |
| สร้างโค้ดทดสอบเบื้องต้น | `playwright codegen` |

## เอกสารอ้างอิง

- [Playwright Official Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-page)
- [Playwright Assertions](https://playwright.dev/docs/test-assertions)
- [Playwright VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
