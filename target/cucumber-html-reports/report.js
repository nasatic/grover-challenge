$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("user-search.feature");
formatter.feature({
  "line": 2,
  "name": "Search and retrieve user",
  "description": "",
  "id": "search-and-retrieve-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@getUser"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "Resources is available",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "resource is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.resource_is_available()"
});
formatter.result({
  "duration": 2425768900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Get user details",
  "description": "",
  "id": "search-and-retrieve-user;get-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I make a request with parameter \"?username\u003dKamren\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The correct user details should be returned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "?username\u003dKamren",
      "offset": 33
    }
  ],
  "location": "stepDefinition.iMakeARequestWithParameter(String)"
});
formatter.result({
  "duration": 129745600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.userIdentification()"
});
formatter.result({
  "duration": 520715100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Resources is available",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "resource is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.resource_is_available()"
});
formatter.result({
  "duration": 122616600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Get posts written by above user",
  "description": "",
  "id": "search-and-retrieve-user;get-posts-written-by-above-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I make a request to fetch posts by user",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "correct posts should be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.iMakeARequestToFetchPostsByUser()"
});
formatter.result({
  "duration": 242045600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.correctPostsShouldBeReturned()"
});
formatter.result({
  "duration": 16793400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "#    Scenario: Get comments by user"
    },
    {
      "line": 16,
      "value": "#    And I make a request using the userId"
    }
  ],
  "line": 18,
  "name": "Fetch comments from user posts",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I make a request to fetch comment for \"\u003cposts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "response for \"\u003cposts\u003e\" should contain \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "email should be in the correct format for \"\u003cposts\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts;",
  "rows": [
    {
      "cells": [
        "posts",
        "email"
      ],
      "line": 23,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;1"
    },
    {
      "cells": [
        "postId1",
        "Noemie@marques.me"
      ],
      "line": 24,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;2"
    },
    {
      "cells": [
        "postId2",
        "Khalil@emile.co.uk"
      ],
      "line": 25,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;3"
    },
    {
      "cells": [
        "postId3",
        "Sophia@arianna.co.uk"
      ],
      "line": 26,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;4"
    },
    {
      "cells": [
        "postId4",
        "Jeffery@juwan.us"
      ],
      "line": 27,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;5"
    },
    {
      "cells": [
        "postId5",
        "Isaias_Kuhic@jarrett.net"
      ],
      "line": 28,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Resources is available",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "resource is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.resource_is_available()"
});
formatter.result({
  "duration": 106963900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Fetch comments from user posts",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@getUser"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I make a request to fetch comment for \"postId1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "response for \"postId1\" should contain \"Noemie@marques.me\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "email should be in the correct format for \"postId1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "postId1",
      "offset": 39
    }
  ],
  "location": "stepDefinition.iMakeARequestToFetchCommentFor(String)"
});
formatter.result({
  "duration": 210123400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId1",
      "offset": 14
    },
    {
      "val": "Noemie@marques.me",
      "offset": 39
    }
  ],
  "location": "stepDefinition.responseForShouldContain(String,String)"
});
formatter.result({
  "duration": 12959700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId1",
      "offset": 43
    }
  ],
  "location": "stepDefinition.shouldBeInTheCorrectFormatFor(String)"
});
formatter.result({
  "duration": 4391200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Resources is available",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "resource is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.resource_is_available()"
});
formatter.result({
  "duration": 102274700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Fetch comments from user posts",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@getUser"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I make a request to fetch comment for \"postId2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "response for \"postId2\" should contain \"Khalil@emile.co.uk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "email should be in the correct format for \"postId2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "postId2",
      "offset": 39
    }
  ],
  "location": "stepDefinition.iMakeARequestToFetchCommentFor(String)"
});
formatter.result({
  "duration": 292411000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId2",
      "offset": 14
    },
    {
      "val": "Khalil@emile.co.uk",
      "offset": 39
    }
  ],
  "location": "stepDefinition.responseForShouldContain(String,String)"
});
formatter.result({
  "duration": 14645600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId2",
      "offset": 43
    }
  ],
  "location": "stepDefinition.shouldBeInTheCorrectFormatFor(String)"
});
formatter.result({
  "duration": 830700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Resources is available",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "resource is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.resource_is_available()"
});
formatter.result({
  "duration": 100855900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Fetch comments from user posts",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@getUser"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I make a request to fetch comment for \"postId3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "response for \"postId3\" should contain \"Sophia@arianna.co.uk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "email should be in the correct format for \"postId3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "postId3",
      "offset": 39
    }
  ],
  "location": "stepDefinition.iMakeARequestToFetchCommentFor(String)"
});
formatter.result({
  "duration": 228390700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId3",
      "offset": 14
    },
    {
      "val": "Sophia@arianna.co.uk",
      "offset": 39
    }
  ],
  "location": "stepDefinition.responseForShouldContain(String,String)"
});
formatter.result({
  "duration": 8867800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId3",
      "offset": 43
    }
  ],
  "location": "stepDefinition.shouldBeInTheCorrectFormatFor(String)"
});
formatter.result({
  "duration": 692400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Resources is available",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "resource is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.resource_is_available()"
});
formatter.result({
  "duration": 104263300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Fetch comments from user posts",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@getUser"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I make a request to fetch comment for \"postId4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "response for \"postId4\" should contain \"Jeffery@juwan.us\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "email should be in the correct format for \"postId4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "postId4",
      "offset": 39
    }
  ],
  "location": "stepDefinition.iMakeARequestToFetchCommentFor(String)"
});
formatter.result({
  "duration": 232299000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId4",
      "offset": 14
    },
    {
      "val": "Jeffery@juwan.us",
      "offset": 39
    }
  ],
  "location": "stepDefinition.responseForShouldContain(String,String)"
});
formatter.result({
  "duration": 21373100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId4",
      "offset": 43
    }
  ],
  "location": "stepDefinition.shouldBeInTheCorrectFormatFor(String)"
});
formatter.result({
  "duration": 568100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Resources is available",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "resource is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.resource_is_available()"
});
formatter.result({
  "duration": 97750600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Fetch comments from user posts",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@getUser"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I make a request to fetch comment for \"postId5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "response for \"postId5\" should contain \"Isaias_Kuhic@jarrett.net\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "email should be in the correct format for \"postId5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "postId5",
      "offset": 39
    }
  ],
  "location": "stepDefinition.iMakeARequestToFetchCommentFor(String)"
});
formatter.result({
  "duration": 242108300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId5",
      "offset": 14
    },
    {
      "val": "Isaias_Kuhic@jarrett.net",
      "offset": 39
    }
  ],
  "location": "stepDefinition.responseForShouldContain(String,String)"
});
formatter.result({
  "duration": 9906300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postId5",
      "offset": 43
    }
  ],
  "location": "stepDefinition.shouldBeInTheCorrectFormatFor(String)"
});
formatter.result({
  "duration": 529200,
  "status": "passed"
});
});