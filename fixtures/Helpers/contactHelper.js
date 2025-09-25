const {reservationPage} = require('../../page-objects/reservationPage.js')
const Reservationpage = new reservationPage();
class contactHelper {
    async settheContactdetails(page,contact) {
        await Reservationpage.typefirstnameInputtxt(page, contact.firstname);
        await Reservationpage.typelastnameInputtxt(page, contact.lastname);
        await Reservationpage.typephoneInputtxt(page,contact.phone);
        await Reservationpage.typeemailInputtxt(page,contact.email);    
    }
};
module.exports = {
  contactHelper
};
