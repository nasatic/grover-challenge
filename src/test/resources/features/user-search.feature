@getUser
Feature: Search and retrieve comments posted by user Kamren

  Background: Resources is available
    Given resource is available

  Scenario: Get user details
    When I make a request with parameter "?username=Kamren"
    Then The correct user details should be returned

  Scenario: Get posts written by above user
    When I make a request to fetch posts by user
    Then correct posts should be returned

  Scenario Outline: Fetch comments from user posts
    When I make a request to fetch comment for "<posts>"
    Then response for "<posts>" should contain "<email>"
    And email should be in the correct format for "<posts>"
    Examples:
      | posts   | email                    |
      | postId1 | Noemie@marques.me        |
      | postId2 | Khalil@emile.co.uk       |
      | postId3 | Sophia@arianna.co.uk     |
      | postId4 | Jeffery@juwan.us         |
      | postId5 | Isaias_Kuhic@jarrett.net |









