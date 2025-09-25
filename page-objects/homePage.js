class homePage {

    elements = {
        roomscontainer: () => '//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"]',
        roomfeaturesnth: (index) => `(//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"])[${index}]//div[@class="card-text"]//span`,
        roomfeaturesntheach: (room, feature) => `((//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"])[${room}]//div[@class="card-text"]//span)[${feature}]`,
        booknownth: (index) => `(//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"])[${index}]//a[text()="Book now"]`,
        checkinInputTxt: () => '//label[@for="checkin"]/parent::div//input',
        checkoutInputTxt: () => '//label[@for="checkout"]/parent::div//input',
    };

    async typecheckinInputTxt(page, date) {
        await page.fill(this.elements.checkinInputTxt(), '');
        await page.fill(this.elements.checkinInputTxt(), date);
    }

    async typecheckoutInputTxt(page, date) {
        await page.fill(this.elements.checkoutInputTxt(), '');
        await page.fill(this.elements.checkoutInputTxt(), date);
    }

    async clickbooknownth(page, index) {
        await page.click(this.elements.booknownth(index));
    }

    async getroomscontainercount(page) {
        return await page.locator(this.elements.roomscontainer()).count();
    }

    async getroomfeaturesnth(page, index) {
        return await page.locator(this.elements.roomfeaturesnth(index)).textContent();
    }

    async getroomfeaturesnthcount(page, index) {
        return await page.locator(this.elements.roomfeaturesnth(index)).count();
    }

    async getroomfeaturesntheach(page, room, feature) {
        return await page.locator(this.elements.roomfeaturesntheach(room, feature)).textContent();
    }

    async open(page, url) {
        await page.goto(url);
        await page.waitForTimeout(5000);
    }
}

module.exports = { homePage };
