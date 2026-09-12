const {faker} = require('@faker-js/faker');

 export const random = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    country: 'Romania',
    region: 'Bucuresti',
    zipCode: faker.location.zipCode(),
    loginName: faker.internet.username(),
    password: faker.internet.password()
};

export const testData = {
    automationStoreUrl: 'https://automationteststore.com/',
    homePageTitle: 'A place to practice your automation skills!',
    loginPageUrl: 'https://automationteststore.com/index.php?rt=account/login',
    continuePageUrl: 'https://automationteststore.com/index.php?rt=account/create'
};