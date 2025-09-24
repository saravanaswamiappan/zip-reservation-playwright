const dates = '../fixtures/data/dates/NewDates01.json';
const {homePage} = require('../../page-objects/homePage.js')
const Homepage = new homePage();
class datesHelper {
    async settheDates(dates) {        
        await Homepage.typecheckinInputTxt(dates.checkindate);
        await Homepage.typecheckoutInputTxt(dates.checkoutdate);     }
};
module.exports = {
  datesHelper
};