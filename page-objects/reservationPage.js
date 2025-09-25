class reservationPage {

    elements = {
        reservenowBtn: () => '//button[@id="doReservation"]',
        firstnameInputtxt: () => '//input[@name="firstname"]',
        lastnameInputtxt: () => '//input[@name="lastname"]',
        phoneInputtxt: () => '//input[@name="phone"]',
        emailInputtxt: () => '//input[@name="email"]',
        reservenowconfirmBtn: () => '//button[text()="Reserve Now"]',
        alertmessage: () => '//div[@role="alert"]',
        bookingconfirmedmessage: () => '//h2[text()="Booking Confirmed"]',
        bookeddates: () => '//div[@class="card border-0 shadow booking-card"]//strong',
    };

    async clickreservenowBtn(page) {
        await page.click(this.elements.reservenowBtn());
    }

    async clickreservenowconfirmBtn(page) {
        await page.click(this.elements.reservenowconfirmBtn());
        await page.waitForTimeout(8000);
    }

    async typefirstnameInputtxt(page, firstname) {
        await page.fill(this.elements.firstnameInputtxt(), '');
        await page.fill(this.elements.firstnameInputtxt(), firstname);
    }

    async typelastnameInputtxt(page, lastname) {
        await page.fill(this.elements.lastnameInputtxt(), '');
        await page.fill(this.elements.lastnameInputtxt(), lastname);
    }

    async typephoneInputtxt(page, phone) {
        await page.fill(this.elements.phoneInputtxt(), '');
        await page.fill(this.elements.phoneInputtxt(), phone);
    }

    async typeemailInputtxt(page, email) {
        await page.fill(this.elements.emailInputtxt(), '');
        await page.fill(this.elements.emailInputtxt(), email);
    }

    async getalertmessage(page) {
        return await page.locator(this.elements.alertmessage()).textContent();
    }

    async getbookingconfirmedmessage(page) {
        return await page.locator(this.elements.bookingconfirmedmessage()).textContent();
    }

    async getbookeddates(page) {
        return await page.locator(this.elements.bookeddates()).textContent();
    }
}

module.exports = { reservationPage };
