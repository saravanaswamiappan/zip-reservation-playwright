const {reservationPage} = require('../../page-objects/reservationPage.js')
const Reservationpage = new reservationPage();
class contactHelper {
    async settheContactdetails(contact) {
         await Reservationpage.typefirstnameInputtxt(contact.firstname);
         await Reservationpage.typelastnameInputtxt(contact.lastname);
         await Reservationpage.typephoneInputtxt(contact.phone);
         await Reservationpage.typeemailInputtxt(contact.email);    
    }
};
module.exports = {
  contactHelper
};
