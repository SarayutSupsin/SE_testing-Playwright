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