package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * This is a runner class to run cucumber scenario(s) for all or selected features.
 * @Params: file, sValue,
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = {"stepDefs"},
        format = {"pretty", "html:target/cucumber-html-reports", "json:target/cucumber.json"},
        tags = {"@getUser"})
public class testRunner {
}
