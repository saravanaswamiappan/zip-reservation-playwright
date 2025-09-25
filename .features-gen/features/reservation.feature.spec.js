// Generated from: features\reservation.feature
import { test } from "playwright-bdd";

test.describe('Reservation features', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User lands on Home page', null, { page }); 
  });
  
  test('Verify the room features and make a reservation', async ({ When, Then, page }) => { 
    await When('Room listing is displayed', null, { page }); 
    await Then('There should be atleast one room without TV feature', null, { page }); 
    await When('Enter dates and click book now', null, { page }); 
    await When('reservation is tried with short firstname', null, { page }); 
    await Then('appropriate error message is thrown for firstname', null, { page }); 
    await When('reservation is tried with long firstname', null, { page }); 
    await Then('appropriate error message is thrown for firstname', null, { page }); 
    await When('reservation is tried with short lastname', null, { page }); 
    await Then('appropriate error message is thrown for lastname', null, { page }); 
    await When('reservation is tried with long lastname', null, { page }); 
    await Then('appropriate error message is thrown for lastname', null, { page }); 
    await When('reservation is tried with valid details', null, { page }); 
    await Then('reservation should be booked successfully', null, { page }); 
    await Then('reserved dates should be same as intended booking dates', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\reservation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User lands on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Room listing is displayed","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then There should be atleast one room without TV feature","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Enter dates and click book now","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When reservation is tried with short firstname","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then appropriate error message is thrown for firstname","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When reservation is tried with long firstname","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then appropriate error message is thrown for firstname","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When reservation is tried with short lastname","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then appropriate error message is thrown for lastname","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When reservation is tried with long lastname","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then appropriate error message is thrown for lastname","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When reservation is tried with valid details","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then reservation should be booked successfully","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then reserved dates should be same as intended booking dates","stepMatchArguments":[]}]},
]; // bdd-data-end