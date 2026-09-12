//import { test, expect } from '@playwright/test';
import { test, expect } from '../test_data/fixtures.js';
import { RegisterLoginLogoutPage } from '../pages/register_Login_Logout.page.js';
import { testData } from '../test_data/test.js';

test('Register, Login and Loguot test', async ({ page }) => {
    const registerLoginLogoutPage = new RegisterLoginLogoutPage(page);
    await registerLoginLogoutPage.navigateToHomePage();
    await expect(page).toHaveTitle(testData.homePageTitle);
    await registerLoginLogoutPage.loginRegister();
    await expect(page).toHaveURL(testData.loginPageUrl);
    await registerLoginLogoutPage.continueButton();
    await expect(page).toHaveURL(testData.continuePageUrl);
    await registerLoginLogoutPage.registrationForm();
    await expect(page).toHaveURL(testData.succesLogin);
    await registerLoginLogoutPage.logoutUser();
    await expect(page).toHaveURL(testData.logoutPageUrl);
    await registerLoginLogoutPage.loginRegister();
    await expect(page).toHaveURL(testData.loginPageUrl);
    await registerLoginLogoutPage.loginUser();
    await expect(page).toHaveURL(testData.accountPageUrl);
    await registerLoginLogoutPage.logoutUser();
    await expect(page).toHaveURL(testData.logoutPageUrl);
});
