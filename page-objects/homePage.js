class homePage {

    elements = {
        roomscontainer: () => '//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"]',
        roomfeaturesnth: (index) => `(//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"])[${index}]//div[@class="card-text"]//span`,
        roomfeaturesntheach: (room,feature) => `((//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"])[${room}]//div[@class="card-text"]//span)[${feature}]`,
        booknownth: (index) => `(//section[@id="rooms"]//div[@class="col-md-6 col-lg-4"])[${index}]//a[text()="Book now"]`,

        checkinInputTxt: () => '//label[@for="checkin"]/parent::div//input',
        checkoutInputTxt: () => '//label[@for="checkout"]/parent::div//input',
    };

    async typecheckinInputTxt(date) {
        await page.fill(this.elements.checkinInputTxt(), '');
        await page.fill(this.elements.checkinInputTxt(), date);
    }
    async typecheckoutInputTxt(date) {
        await page.fill(this.elements.checkoutInputTxt(), '');
        await page.fill(this.elements.checkoutInputTxt(), date);
    }

    async clickbooknownth(index) {        
        await page.click(this.elements.booknownth(index));        
    }
    async getroomscontainercount() {
        return await page.locator(this.elements.roomscontainer()).count();
    }
    async getroomfeaturesnth(index){
        return await page.locator(this.elements.roomfeaturesnth(index)).textContent();
    }    
    async getroomfeaturesnthcount(index){
        return await page.locator(this.elements.roomfeaturesnth(index)).count();
    }
    async getroomfeaturesntheach(room,feature){ 
        return await page.locator(this.elements.roomfeaturesntheach(room,feature)).textContent();
    }
    async open(url) {        
        await page.goto(url);        
        await page.waitForTimeout(5000);
        //await page.waitForTimeout(10000);
    }
}
module.exports = {
  homePage
};
