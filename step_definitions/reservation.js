const dayjs = require('dayjs');
const config = require('../config.json');
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { homePage } = require('../page-objects/homePage.js')
const { reservationPage } = require('../page-objects/reservationPage.js')
const { datesHelper } = require('../fixtures/Helpers/datesHelper.js')
const { contactHelper } = require('../fixtures/Helpers/contactHelper.js')
const { generateDates } = require('../fixtures/Builders/datesBuilder');
const { setupdataContact, setupdataContact_shortfirstname, setupdataContact_longfirstname,
    setupdataContact_shortlastname, setupdataContact_longlastname } = require('../fixtures/Builders/contactBuilder');

const Homepage = new homePage();
const Reservationpage = new reservationPage();
const Dateshelper = new datesHelper();
const ContactHelper = new contactHelper();

let loginuser;
let dates;
let numberofrooms = 0;
let numberofroomswithtv = 0;


Given('User lands on Home page', async ({ page })  => {
    //await Homepage.open('https://your-url.com', page);
    await page.goto(config.Url);
    await page.waitForTimeout(5000);
});

When('Room listing is displayed', async ({ page })  => {
    numberofrooms = await Homepage.getroomscontainercount(page);
});

Then('There should be atleast one room without TV feature', async ({ page })  => {
    //let numberofroomswithtv = 0;
    for (let i = 1; i <= numberofrooms; i++) {
        const featurecount = await Homepage.getroomfeaturesnthcount(page,i);
        for (let j = 1; j <= featurecount; j++) {
            let featureeach = await Homepage.getroomfeaturesntheach(page,i, j);
            if (featureeach.includes('TV')) numberofroomswithtv += 1;
        }
    }
    expect(numberofrooms).toBeGreaterThan(numberofroomswithtv);
});

When('Enter dates and click book now', async ({ page })  => {
    dates = generateDates();
    await Dateshelper.settheDates(page,dates);
    await Homepage.clickbooknownth(page,1);
    await Reservationpage.clickreservenowBtn(page);
});

When('reservation is tried with short firstname', async ({ page })  => {
    const contact = setupdataContact_shortfirstname();
    await ContactHelper.settheContactdetails(page,contact);
    await Reservationpage.clickreservenowconfirmBtn(page);
});
When("reservation is tried with long firstname", async ({ page }) => {

    const contact = setupdataContact_longfirstname();
    await ContactHelper.settheContactdetails(page,contact);
    await Reservationpage.clickreservenowconfirmBtn(page);
});
When("reservation is tried with short lastname", async ({ page }) => {

    const contact = setupdataContact_shortlastname();
    await ContactHelper.settheContactdetails(page,contact);
    await Reservationpage.clickreservenowconfirmBtn(page);
});
When("reservation is tried with long lastname", async ({ page }) => {

    const contact = setupdataContact_longlastname();
    await ContactHelper.settheContactdetails(page,contact);
    await Reservationpage.clickreservenowconfirmBtn(page);
});

Then('appropriate error message is thrown for firstname', async ({ page })  => {
    expect(await Reservationpage.getalertmessage(page)).toEqual('size must be between 3 and 18');
});
Then("appropriate error message is thrown for lastname", async ({ page }) => {

    expect(await Reservationpage.getalertmessage(page)).toEqual('size must be between 3 and 30');
});

When('reservation is tried with valid details', async ({ page })  => {
    const contact = setupdataContact();
    await ContactHelper.settheContactdetails(page,contact);
    await Reservationpage.clickreservenowconfirmBtn(page);
});
Then("reserved dates should be same as intended booking dates", async ({ page }) => {

    var bookeddates = await Reservationpage.getbookeddates(page);
    expect(await dayjs(bookeddates.substring(0, 10)).format('DD/MM/YYYY')).toEqual(dates.checkindate);
    expect(await dayjs(bookeddates.substring(13, 23)).format('DD/MM/YYYY')).toEqual(dates.checkoutdate);
});

Then('reservation should be booked successfully', async ({ page })  => {
    expect(await Reservationpage.getbookingconfirmedmessage(page)).toEqual('Booking Confirmed');
});
