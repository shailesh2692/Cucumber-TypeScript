# Feature File for Login Functionality
# Tags can be added at Feature, Scenario, Scenario Outline levels
# Tags can be used to group scenarios and control their execution

@smoke @login
Feature: Login Functionality
  As a user
  I want to log in to the application 
  so that I can access my account dashboard

  Background:
    Given the user navigates to the facebook page
    When I will validate the title of the page

  @sanity @positive
  Scenario: Successful login with valid credentials
    Then I enter the username as "test_user"
    And I enter the password as "test_password"
    And I click on the login button

  @regression @negative
  Scenario: Successful login with different credentials
    Then I enter the username as "test_user1"
    And I enter the password as "test_password1"
    And I click on the login button
