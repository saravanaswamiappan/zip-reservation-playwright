This framework will perform/validate the below using playwright-

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

Steps to run the test

After cloning the repo from Github. Please perform the below

1. Switch to the project folder using 'cd' command if it's not already switched to correct folder.
2. Perform npm install using below(npm i) from commandline
	zip-reservation-playwright> npm i
3. Perform npm run to run the test as below from commandline
	zip-reservation-playwright> npm run test:zipreservation
	
After the test completes, the report can be viewed in below locations-
1. Under zip-reservation-playwright\support\reports,

cucumber-html-report -> cucumber HTML report
cucumber-report -> cucumber json report

Note: If there is any client error at the end, it could be with the room is not available for the selected dates. Please try with different dates.
In that case, please adjust the dates in fixtures\Builders\datesBuilder.js file and re-run the test. 