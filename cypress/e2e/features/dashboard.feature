Feature: Exploring Dashboard
Valid Login

Scenario: Dashboard Exploring
Given that I Login to One Pitch Site
When I Enter my Username
When I Enter my Password
When I click on SignIn
Then I should be redirected to the Dashboard
When I go to Pitches
Then I should see the Create and Submit Link
When I go to Journalist
Then I should see Suggested and List
When I go to Emails
Then I should see Sent and Scheduled




