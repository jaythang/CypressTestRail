Feature: Going to Pitch Page
Valid Login

Scenario: Creating a Pitch
Given that I Login to One Pitch Site
When I Enter my Username
When I Enter my Password
When I click on SignIn
Then I should be redirected to the Dashboard
When I click on Submit Pitch
When I should go to Create Pitch
When I scroll down
Then It should show me a prompt
