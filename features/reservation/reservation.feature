

Feature: Reservation features

Background:
	Given User lands on Home page
	
	Scenario: Verify the room features and make a reservation
		When Room listing is displayed
		Then There should be atleast one room without TV feature
		When Enter dates and click book now
		When reservation is tried with short firstname
		Then appropriate error message is thrown for firstname
		When reservation is tried with long firstname
		Then appropriate error message is thrown for firstname
		When reservation is tried with short lastname
		Then appropriate error message is thrown for lastname
		When reservation is tried with long lastname
		Then appropriate error message is thrown for lastname
		When reservation is tried with valid details
		Then reservation should be booked successfully
		Then reserved dates should be same as intended booking dates