// Typescript file for step definitions
import { Given, When, Then } from '@cucumber/cucumber';


Given('the user navigates to the facebook page', function () {
           
           console.log('User is on facebook login page');
         });

When('I will validate the title of the page', function () {
           
           console.log('Page Title is validated');
         });

Then('I enter the username as {string}', function (string) {

           console.log(`Username is entered as: ${string}`);
         });

Then('I enter the password as {string}', function (string) {
    
           console.log(`Password is entered as: ${string}`);
         });

Then('I select the country and city', function (dataTable) {

           const rows = dataTable.hashes();
           console.log(`Country selected: ${rows[0].country}`);    // Used to exclude the header And Display First Row Data
           console.log(`City selected: ${rows[0].city}`);          // Used to exclude the header And Display First Row Data  

         });

Then('I click on the login button', function () {
           
           console.log('Login button is clicked');
         });