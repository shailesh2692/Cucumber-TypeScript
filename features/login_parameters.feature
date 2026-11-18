# Feature File for Login Functionality
Feature: Login Prod Functionality
    As a user
    I want to log in to the application 
    so that I can access my account dashboard

    Background:
        Given the user navigates to the facebook page
        When I will validate the title of the page

  Scenario Outline: Successful login on production with valid credentials

    Then I enter the username as "<username>"
    And I enter the password as "<password>"
    And I select the country and city
    |country|city      |
    |India  |Bangalore |
    |USA    |New York  |
    |UK     |London    |
    And I click on the login button

  Examples:
    | username         | password          |
    | prod_test_user   | prod_test_password |
    | prod_test_user1  | prod_test_password1|
    | prod_test_user2  | prod_test_password2|
    | prod_test_user3  | prod_test_password3|
    | prod_test_user4  | prod_test_password4|
