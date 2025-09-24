class bookingconfirmedPage {
    elements = {

        bookingconfirmeddates: () => '//h2[text()="Booking Confirmed"]/parent::div[@class="card-body"]//strong',

    }

    async getbookingconfirmeddates() {
        return this.elements.bookingconfirmeddates().textContent();        
    }

}

export default bookingconfirmedPage;
