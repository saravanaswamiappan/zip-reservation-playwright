const dayjs = require('dayjs');
const config = require('../config.json'); 
const { Given, When, Then } = require('@cucumber/cucumber')
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const {homePage} = require('../page-objects/homePage.js')
const {reservationPage} = require('../page-objects/reservationPage.js')
const {datesHelper} = require('../fixtures/Helpers/datesHelper.js')
const {contactHelper} = require('../fixtures/Helpers/contactHelper.js')
const { generateDates } = require('../fixtures/Builders/datesBuilder');
const { setupdataContact,setupdataContact_shortfirstname,setupdataContact_longfirstname,
    setupdataContact_shortlastname,setupdataContact_longlastname} = require('../fixtures/Builders/contactBuilder');

const Homepage = new homePage();
const Reservationpage = new reservationPage();
const Dateshelper = new datesHelper();
const ContactHelper = new contactHelper();

let loginuser;
let dates;
let numberofrooms = 0;
let numberofroomswithtv = 0;

Given('User lands on Home page', async function(){
    //await page.goto('/');
    //await Homepage.open("https://automationintesting.online");
    await page.goto(config.Url);
    await page.waitForTimeout(5000);
});

When("Room listing is displayed", async function () {

    numberofrooms = await Homepage.getroomscontainercount();
});

Then("There should be atleast one room without TV feature", async function () {       
    
    for (let i = 1; i <= numberofrooms; i++) {
        
        const featurecount =  await Homepage.getroomfeaturesnthcount(i);
        for (let j = 1; j <= featurecount; j++) {
            let featureeach =  await Homepage.getroomfeaturesntheach(i,j);
            if (featureeach.includes("TV")) {
                numberofroomswithtv = numberofroomswithtv + 1; 
            }  
        }            
    }
    expect(numberofrooms).toBeGreaterThan(numberofroomswithtv);
});

When("Enter dates and click book now", async function () {
    
    dates = generateDates();
    await Dateshelper.settheDates(dates);
    await Homepage.clickbooknownth(1);
    await Reservationpage.clickreservenowBtn();
})
When("reservation is tried with short firstname", async function () {
    
    const contact = setupdataContact_shortfirstname();
    await ContactHelper.settheContactdetails(contact);
    await Reservationpage.clickreservenowconfirmBtn();
});
When("reservation is tried with long firstname", async function () {    
    
    const contact = setupdataContact_longfirstname();
    await ContactHelper.settheContactdetails(contact);
    await Reservationpage.clickreservenowconfirmBtn();    
});

When("reservation is tried with short lastname", async function () {    
    
    const contact = setupdataContact_shortlastname();
    await ContactHelper.settheContactdetails(contact);
    await Reservationpage.clickreservenowconfirmBtn();    
});
When("reservation is tried with long lastname", async function () {
    
    const contact = setupdataContact_longlastname();
    await ContactHelper.settheContactdetails(contact);
    await Reservationpage.clickreservenowconfirmBtn();
});

When("reservation is tried with valid details", async function () {    

    const contact = setupdataContact();
    await ContactHelper.settheContactdetails(contact);
    await Reservationpage.clickreservenowconfirmBtn();
});

Then("appropriate error message is thrown for firstname", async function () {
   
    expect(await Reservationpage.getalertmessage()).toEqual('size must be between 3 and 18');
});
Then("appropriate error message is thrown for lastname", async function () {
    
    expect(await Reservationpage.getalertmessage()).toEqual('size must be between 3 and 30');
});
Then("reservation should be booked successfully", async function () {
    expect(await Reservationpage.getbookingconfirmedmessage()).toEqual('Booking Confirmed');

});
Then("reserved dates should be same as intended booking dates", async function () {
    
    var bookeddates = await Reservationpage.getbookeddates();
    expect(await dayjs(bookeddates.substring(0, 10)).format('DD/MM/YYYY')).toEqual(dates.checkindate);
    expect(await dayjs(bookeddates.substring(13, 23)).format('DD/MM/YYYY')).toEqual(dates.checkoutdate);
});