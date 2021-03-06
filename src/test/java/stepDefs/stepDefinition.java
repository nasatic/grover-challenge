package stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.apache.log4j.Logger;

import java.util.List;
import java.util.regex.Pattern;

import static com.jcabi.matchers.RegexMatchers.matchesPattern;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

/**
 * step definition class which glues cucumber steps to its implementing code.
 */

public class stepDefinition {
    Logger logger = Logger.getLogger(stepDefinition.class);
    final String baseURI = "https://jsonplaceholder.typicode.com";
    final String sRegex = "([a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*)@([a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*[.][a-zA-Z]{2,})";
    Response response;
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
        logger.info("========== post ids by user "+sPosts.get(0)+ ": " + res);
        assertEquals(res.size(), 10);
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
            default:
                logger.info("============== Default Case Executed ==================");
        }
    }

    @And("^email should be in the correct format for \"([^\"]*)\"$")
    public void shouldBeInTheCorrectFormatFor(String sCase) {
        String pattern = Pattern.compile(sRegex).toString();
        switch (sCase) {
            case "postId1":
                logger.info("========== First email from record: " + sPosts.get(0) + "============");
                assertThat(sPosts.get(0).toString(), matchesPattern(pattern));
                break;
            case "postId2":
                logger.info("==========Second email from record: " + sPosts.get(1) + "============");
                assertThat(sPosts.get(1).toString(), matchesPattern(pattern));
                break;
            case "postId3":
                logger.info("==========Third email from record: " + sPosts.get(2) + "=============");
                assertThat(sPosts.get(2).toString(), matchesPattern(pattern));
                break;
            case "postId4":
                logger.info("==========Fourth email from record: " + sPosts.get(3) + "============");
                assertThat(sPosts.get(3).toString(), matchesPattern(pattern));
                break;
            case "postId5":
                logger.info("==========Fifth email from record: " + sPosts.get(4) + "=============");
                assertThat(sPosts.get(4).toString(), matchesPattern(pattern));
                break;

            default:
                logger.info("================ Default switch case executed ====================");
        }
    }
}
