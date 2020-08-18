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
  "duration": 2121700900,
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
  "duration": 219785000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.userIdentification()"
});
formatter.result({
  "duration": 562798900,
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
  "duration": 216010200,
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
  "duration": 430938300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.correctPostsShouldBeReturned()"
});
formatter.result({
  "duration": 30762400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Fetch comments from user posts",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I make a request to fetch comment for \"\u003cposts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "response for \"\u003cposts\u003e\" should contain \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "email should be in the correct format for \"\u003cposts\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "search-and-retrieve-user;fetch-comments-from-user-posts;",
  "rows": [
    {
      "cells": [
        "posts",
        "email"
      ],
      "line": 20,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;1"
    },
    {
      "cells": [
        "postId1",
        "Noemie@marques.me"
      ],
      "line": 21,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;2"
    },
    {
      "cells": [
        "postId2",
        "Khalil@emile.co.uk"
      ],
      "line": 22,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;3"
    },
    {
      "cells": [
        "postId3",
        "Sophia@arianna.co.uk"
      ],
      "line": 23,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;4"
    },
    {
      "cells": [
        "postId4",
        "Jeffery@juwan.us"
      ],
      "line": 24,
      "id": "search-and-retrieve-user;fetch-comments-from-user-posts;;5"
    },
    {
      "cells": [
        "postId5",
        "Isaias_Kuhic@jarrett.net"
      ],
      "line": 25,
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
  "duration": 186262400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
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
  "line": 16,
  "name": "I make a request to fetch comment for \"postId1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "response for \"postId1\" should contain \"Noemie@marques.me\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
  "duration": 394199700,
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
  "duration": 11374600,
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
  "duration": 2960600,
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
  "duration": 183143500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
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
  "line": 16,
  "name": "I make a request to fetch comment for \"postId2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "response for \"postId2\" should contain \"Khalil@emile.co.uk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
  "duration": 427869400,
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
  "duration": 11211900,
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
  "duration": 472500,
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
  "duration": 251329600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
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
  "line": 16,
  "name": "I make a request to fetch comment for \"postId3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "response for \"postId3\" should contain \"Sophia@arianna.co.uk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
  "duration": 576363200,
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
  "duration": 37376800,
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
  "duration": 810200,
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
  "duration": 174797400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
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
  "line": 16,
  "name": "I make a request to fetch comment for \"postId4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "response for \"postId4\" should contain \"Jeffery@juwan.us\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
  "duration": 423336100,
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
  "duration": 8951000,
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
  "duration": 420700,
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
  "duration": 173472200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
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
  "line": 16,
  "name": "I make a request to fetch comment for \"postId5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "response for \"postId5\" should contain \"Isaias_Kuhic@jarrett.net\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
  "duration": 424107500,
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
  "duration": 34736700,
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
  "duration": 825800,
  "status": "passed"
});
});