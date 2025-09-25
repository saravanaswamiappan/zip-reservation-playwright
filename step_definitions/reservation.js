const dayjs = require('dayjs');
const config = require('../config.json');
const { Given, When, Then } = require('playwright-bdd');  // Changed this line
const { expect } = require('@playwright/test');

//const { Given, When, Then } = require('@cucumber/cucumber');
//const { expect } = require('@playwright/test');
const { homePage } = require('../page-objects/homePage.js');
const { reservationPage } = require('../page-objects/reservationPage.js');

const Homepage = new homePage();
const Reservationpage = new reservationPage();

let numberofrooms = 0;

Given('User lands on Home page', async ({ page })  => {
    await Homepage.open('https://your-url.com', this.page);
});

When('Room listing is displayed', async ({ page })  => {
    numberofrooms = await Homepage.getroomscontainercount(this.page);
});

Then('There should be atleast one room without TV feature', async ({ page })  => {
    let numberofroomswithtv = 0;
    for (let i = 1; i <= numberofrooms; i++) {
        const featurecount = await Homepage.getroomfeaturesnthcount(i, this.page);
        for (let j = 1; j <= featurecount; j++) {
            let featureeach = await Homepage.getroomfeaturesntheach(i, j, this.page);
            if (featureeach.includes('TV')) numberofroomswithtv += 1;
        }
    }
    expect(numberofrooms).toBeGreaterThan(numberofroomswithtv);
});

When('Enter dates and click book now', async ({ page })  => {
    await Homepage.typecheckinInputTxt('2025-10-01', this.page);
    await Homepage.typecheckoutInputTxt('2025-10-05', this.page);
    await Homepage.clickbooknownth(1, this.page);
    await Reservationpage.clickreservenowBtn(this.page);
});

When('reservation is tried with short firstname', async ({ page })  => {
    await Reservationpage.typefirstnameInputtxt('Jo', this.page);
    await Reservationpage.clickreservenowconfirmBtn(this.page);
});

Then('appropriate error message is thrown for firstname', async ({ page })  => {
    expect(await Reservationpage.getalertmessage(this.page)).toEqual('size must be between 3 and 18');
});

When('reservation is tried with valid details', async ({ page })  => {
    await Reservationpage.typefirstnameInputtxt('John', this.page);
    await Reservationpage.typelastnameInputtxt('Doe', this.page);
    await Reservationpage.typephoneInputtxt('1234567890', this.page);
    await Reservationpage.typeemailInputtxt('john.doe@example.com', this.page);
    await Reservationpage.clickreservenowconfirmBtn(this.page);
});

Then('reservation should be booked successfully', async ({ page })  => {
    expect(await Reservationpage.getbookingconfirmedmessage(this.page)).toEqual('Booking Confirmed');
});
