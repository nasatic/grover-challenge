package stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

import java.util.List;
import java.util.logging.Logger;
import java.util.regex.Pattern;

import static com.jcabi.matchers.RegexMatchers.matchesPattern;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

/**
 * step definition class which glues cucumber steps to its implementing code.
 */

public class stepDefinition {
    static Logger logger = Logger.getLogger(stepDefinition.class.toString());
    final String baseURI = "https://jsonplaceholder.typicode.com";
    final String sRegex = "([a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*)@([a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*[.][a-zA-Z]{2,})";
    //    final String sRegex = "[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}";
    Response response;
    String sResponse;
    List sPosts;

    @Given("^resource is available$")
    public void resource_is_available() {
        given().log().everything().when().get(baseURI + "/posts")
                .then().statusCode(200);
    }

    @When("^I make a request with parameter \"([^\"]*)\"$")
    public void iMakeARequestWithParameter(String sParam){
        response = given().when().get(baseURI + "/users" + sParam);
    }

    @Then("^The correct user details should be returned$")
    public void userIdentification() {
        assertTrue(response.then().extract().path("name").toString().contains("Chelsey Dietrich"));
        sPosts = response.then().extract().path("id");
    }

    @When("^I make a request to fetch posts by user$")
    public void iMakeARequestToFetchPostsByUser() {
        response = given().log().all().when().get(baseURI + "/users?username=Kamren");
        sPosts = response.then().extract().path("id");
        response = given().log().all().when().get(baseURI + "/posts?userId=" + sPosts.get(0));
    }

    @Then("^correct posts should be returned$")
    public void correctPostsShouldBeReturned() {
        List res = response.then().extract().path("id");
        logger.info("===============: " + res);
        assertEquals(res.size(), 10);

    }

    @When("^I make a request on \"([^\"]*)\" for posts written by user \"([^\"]*)\"$")
    public void iMakeARequestOnForPostsWrittenByUser(String endPoint, String arg1) {
        List res = response.then().extract().path("id");
        logger.info("+++++++++++++++ " + res.get(0));
        sResponse = res.get(0).toString();
        response = given().log().all().when().get(baseURI + endPoint + "?userId=" + sResponse);
        logger.info(response.asString());
    }

    @When("^I make a request to fetch comment for \"([^\"]*)\"$")
    public Response iMakeARequestToFetchCommentFor(String sCase) {
        response = given().log().all().when().get(baseURI + "/users?username=Kamren");
        sPosts = response.then().extract().path("id");
        switch (sCase) {
            case "postId1":
            case "postId5":
            case "postId2":
            case "postId3":
            case "postId4":
                response = given().when().get(baseURI + "/comments?postId=" + sPosts.get(0));
                break;

            default:
                logger.info("++++++++++++++++ Default Case Executed +++++++++++++++++++");
        }
        return response;
    }

    @Then("^response for \"([^\"]*)\" should contain \"([^\"]*)\"$")
    public void responseForShouldContain(String sCase, String sEmail) throws Throwable {
        sPosts = response.then().extract().path("email");
        switch (sCase) {
            case "postId1":
                assertEquals(sPosts.get(0), sEmail);
                break;

            case "postId2":
                assertEquals(sPosts.get(1), sEmail);
                break;

            case "postId3":
                assertEquals(sPosts.get(2), sEmail);
                break;

            case "postId4":
                assertEquals(sPosts.get(3), sEmail);
                break;

            case "postId5":
                assertEquals(sPosts.get(4), sEmail);
                break;

        }

    }

    @And("^email should be in the correct format for \"([^\"]*)\"$")
    public void shouldBeInTheCorrectFormatFor(String sCase) {
        String pattern = Pattern.compile(sRegex).toString();
        switch (sCase) {
            case "postId1":
                logger.info("==========:" + sPosts.get(0) + "============");
                assertThat(sPosts.get(0).toString(), matchesPattern(pattern));
                break;
            case "postId2":
                logger.info("==========:" + sPosts.get(1) + "============");
                assertThat(sPosts.get(1).toString(), matchesPattern(pattern));
                break;
            case "postId3":
                logger.info("==========:" + sPosts.get(2) + "============");
                assertThat(sPosts.get(2).toString(), matchesPattern(pattern));
                break;
            case "postId4":
                logger.info("==========:" + sPosts.get(3) + "============");
                assertThat(sPosts.get(3).toString(), matchesPattern(pattern));
                break;
            case "postId5":
                logger.info("==========:" + sPosts.get(4) + "============");
                assertThat(sPosts.get(4).toString(), matchesPattern(pattern));
                break;

            default:
                logger.info("++++++++++++++++ Default switch case +++++++++++++++++++");
        }

    }

}
