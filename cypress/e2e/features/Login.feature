Feature: Login using Correct Credentials
Valid Login

Scenario: Valid Login
Given that I Login to One Pitch Site
When I Enter my Username
When I Enter my Password
When I click on SignIn
Then I should be redirected to the Dashboard

