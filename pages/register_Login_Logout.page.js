import { random, testData } from '../test_data/test.js';

export class RegisterLoginLogoutPage {
    constructor(page) {
        this.page = page;

        this.loginButton = {
            menuButton: '#customer_menu_top'
    }
        this.continue = page.getByRole('button', { name: /Continue/ });

        this.approve = page.getByRole('button', { name: /Login/ });

        this.selectors = {
            firstName: '#AccountFrm_firstname',
            lastName: '#AccountFrm_lastname',
            email: '#AccountFrm_email',
            address1: '#AccountFrm_address_1',
            city: '#AccountFrm_city',
            region: '#AccountFrm_zone_id',
            zipCode: '#AccountFrm_postcode',
            country: '#AccountFrm_country_id',
            loginName: '#AccountFrm_loginname',
            password: '#AccountFrm_password',
            confirm: '#AccountFrm_confirm',
            subscribe: '#AccountFrm_newsletter1',
            agree: '#AccountFrm_agree',
            logoffBtn: '.side_account_list > :nth-child(10) > a',
            loginBtn: '#loginFrm_loginname',
            passBtn: '#loginFrm_password'
            //accountCreated: '.maintext'
        }
}

    async navigateToHomePage() {
    await this.page.goto(testData.automationStoreUrl, { waitUntil: 'domcontentloaded' });
    await this.page.waitForFunction(
        (expectedTitle) => document.title === expectedTitle,
        testData.homePageTitle,
        { timeout: 30000 }
    );
    }

    async loginRegister() {
        await this.page.locator(this.loginButton.menuButton).click();
    }

    async continueButton() {
        await this.continue.click();
    }

    async registrationForm() {
        await this.page.locator(this.selectors.firstName).fill(random.firstName);
        await this.page.locator(this.selectors.lastName).fill(random.lastName);
        await this.page.locator(this.selectors.email).fill(random.email);
        await this.page.locator(this.selectors.address1).fill(random.address1);
        await this.page.locator(this.selectors.city).fill(random.city);
        await this.page.locator(this.selectors.country).selectOption({ label: random.country });
        await this.page.locator(this.selectors.region).selectOption({ label: random.region });
        await this.page.locator(this.selectors.zipCode).fill(random.zipCode);
        await this.page.locator(this.selectors.loginName).fill(random.loginName);
        await this.page.locator(this.selectors.password).fill(random.password);
        await this.page.locator(this.selectors.confirm).fill(random.password);
        await this.page.locator(this.selectors.subscribe).check();
        await this.page.locator(this.selectors.agree).check();
        await this.continue.click();
    }

    async logoutUser(){
        await this.page.locator(this.selectors.logoffBtn).click();
    }

    async loginUser(){
        await this.page.locator(this.selectors.loginBtn).fill(random.loginName);
        await this.page.locator(this.selectors.passBtn).fill(random.password);
        this.approve.click();
    }
}