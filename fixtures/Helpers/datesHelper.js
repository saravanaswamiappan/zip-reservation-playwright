const dates = '../fixtures/data/dates/NewDates01.json';
const {homePage} = require('../../page-objects/homePage.js')
const Homepage = new homePage();
class datesHelper {
    async settheDates(page,dates) {        
        await Homepage.typecheckinInputTxt(page,dates.checkindate);
        await Homepage.typecheckoutInputTxt(page,dates.checkoutdate);     }
};
module.exports = {
  datesHelper
};