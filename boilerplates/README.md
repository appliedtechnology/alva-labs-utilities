# Code test Boilerplates

Here you can find boilerplates for setting up [custom code test at Alva Labs](https://app.alvalabs.io/o/assessment/coding-tests). 

A strong focus on tests is to not overwhelm the candidate taking the test. There are many new things here for a novice so we need to make sure they feel safe.

## Languages

### JavaScript

#### Dependencies
  - Node v22
  - npm

The JavaScript boilerplate is setup to be free of dependencies and use the Node test runner for validation. The test result generation workflow file has been setup to not care about the test suite nesting and flatten all the tests into a simple array.

We do not need to use a custom dev-container for the GitHub Codespace since Node v22 is included by default.

### .NET / C#

#### Dependencies
  - .NET SDK 8
  - xUnit
  - AwesomeAssertions

The C# tests are setup following a Arrange / Act / Assert pattern for each test.

We do not need to use a custom dev-container for the GitHub Codespace since .NET 8 is included by default.

### Java

#### Dependencies
  - JDK 11
  - Maven
  - JUnit

We do not need to use a custom dev-container for the GitHub Codespace since JDK 11 is included by default.
