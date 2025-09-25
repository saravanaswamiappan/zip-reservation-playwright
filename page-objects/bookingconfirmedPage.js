class bookingconfirmedPage {
    constructor() {
        this.page = null; // Will hold the Playwright page instance
    }

    // Inject the Playwright page
    setPage(page) {
        this.page = page;
    }

    elements = {
        bookingconfirmeddates: () => '//h2[text()="Booking Confirmed"]/parent::div[@class="card-body"]//strong',
    };

    async getbookingconfirmeddates() {
        if (!this.page) throw new Error('Page is not initialized. Call setPage(page) first.');
        return await this.page.locator(this.elements.bookingconfirmeddates()).textContent();
    }
}

module.exports = { bookingconfirmedPage };
