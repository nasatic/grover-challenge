INSTRUCTIONS

Clone the repo: from git bash or windows command line, run <git clone https://github.com/nasatic/grover-challenge.git>.

Running project:

Build Tool: Maven 1. Open a command window and run: <mvn test -Dtest="testRunner" -DfailIfNoTests=false> - this will run the tests as well as generate reports.

From IDE go to src/test/java/runners and run "testRunner" file.

Test Result Reporting:

This project has cucumber reports generated via maven surefire plugin. Report is generated by running "mvn verify" command and cucumber report is generate and placed in: target/cucumber-html-reports/*.html.

Test Result Reporting:

1. This project has cucumber reports generated via maven surefire plugin. Report is generated by running "mvn verify" command and cucumber report is generate and placed in: target/cucumber-html-reports/*.html.

2. Also, simple html report is generated and placed in: target/html/cucumber-html-reports/index.html.

CI/CD Integration:

This project can be integrated with CI/CD e.g Jenkins by specifying the maven goals settings and POM xml setting in Jenkins.
Build can be pointed to github clone url for the project and can be specified to run from desired master/branch.
For reporting, Jenkins come with plugins which allow the cucumber report generated to be loaded into Jenkins.