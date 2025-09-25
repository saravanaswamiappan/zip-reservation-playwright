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
    await Homepage.open('https://your-url.com', page);
});

When('Room listing is displayed', async ({ page })  => {
    numberofrooms = await Homepage.getroomscontainercount(page);
});

Then('There should be atleast one room without TV feature', async ({ page })  => {
    let numberofroomswithtv = 0;
    for (let i = 1; i <= numberofrooms; i++) {
        const featurecount = await Homepage.getroomfeaturesnthcount(i, page);
        for (let j = 1; j <= featurecount; j++) {
            let featureeach = await Homepage.getroomfeaturesntheach(i, j, page);
            if (featureeach.includes('TV')) numberofroomswithtv += 1;
        }
    }
    expect(numberofrooms).toBeGreaterThan(numberofroomswithtv);
});

When('Enter dates and click book now', async ({ page })  => {
    await Homepage.typecheckinInputTxt('2025-10-01', page);
    await Homepage.typecheckoutInputTxt('2025-10-05', page);
    await Homepage.clickbooknownth(1, page);
    await Reservationpage.clickreservenowBtn(page);
});

When('reservation is tried with short firstname', async ({ page })  => {
    await Reservationpage.typefirstnameInputtxt('Jo', page);
    await Reservationpage.clickreservenowconfirmBtn(page);
});

Then('appropriate error message is thrown for firstname', async ({ page })  => {
    expect(await Reservationpage.getalertmessage(page)).toEqual('size must be between 3 and 18');
});

When('reservation is tried with valid details', async ({ page })  => {
    await Reservationpage.typefirstnameInputtxt('John', page);
    await Reservationpage.typelastnameInputtxt('Doe', page);
    await Reservationpage.typephoneInputtxt('1234567890', page);
    await Reservationpage.typeemailInputtxt('john.doe@example.com', page);
    await Reservationpage.clickreservenowconfirmBtn(page);
});

Then('reservation should be booked successfully', async ({ page })  => {
    expect(await Reservationpage.getbookingconfirmedmessage(page)).toEqual('Booking Confirmed');
});
