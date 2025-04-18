# Alva-Labs-Utilities

This repository contains a collection of GitHub Actions workflow files and tech-stack boilerplates for usage with Alva Labs code tests.

> [!WARNING]
> **Do NOT add code tests here, since this is a public repository.**  
> **This is a location for the boilerplates and workflow files only!**

## What Alva Labs needs for code-tests to work

We need to generate and submit the test takers test results and have them create a pull request in order for them to be able to submit their code.

### 1. Auto-submission the test results

Alva Labs picks up which tests have passed or failed via GitHub Actions. In order for code tests to be submitted properly on a git push, a workflow file with the name `publish-test-results.yml` is needed.

> [!NOTE]
> **Alva Labs requires the exact file name of `publish-test-results.yml` for the workflow in order to setup the test properly!**

The submission workflow inside `publish-test-results.yml` calls on two other workflows responsible for the following

1. **Generate test results**

    The test results need to be generated and converted to a JSON-array with the following schema
    
    ```json
    [
      { "test": "<test-name-1>", "result": "passed OR failed" },
      { "test": "<test-name-2>", "result": "passed OR failed" },
      "and so on...."
    ]
    ```

    This is done in separately for each language in the [generate_test-results_lang.yml](./.github/workflows/generate_test-results_dotnet.yml) workflow.

1. **Send the test results to Alva Labs**

    The test results need be submitted to a auto-generated url available via the GitHub variable `${{ vars.AUTO_SCORE_WEBHOOK_URL }}`, using the auto-generated authorization token `${{ secrets.AUTO_SCORE_TOKEN }}`.
    
    This is done in the workflow file [publish_test-results_alva-labs](./.github/workflows/publish_test-results_alva-labs.yml) shared among all languages
    
> [!TIP]
> Examples of pre-made `publish-test-results.yml` files can be found in the boilerplates for each language.
    
### 2. Create a pull request

For the test taker to be able to submit the test, they need to create a pull request.

Since many of the test takers have never worked with GitHub before, we can help them out by giving them a pre-generated relative that will auto-generate a pull request with a helpful message

```markdown
[Pull-Request](./../../compare/submission...main?quick_pull=1&title=Code+Submission&body=Create+a+pull+request+and+then+%5Bsubmit+your+results+over+at+alva+labs%5D%28https%3A%2F%2Fapp.alvalabs.io%2Fstart%2Fapply%2F298)
```

A link back to Alva Labs is included in the body of the pull request

## Additional info

### Generating the test array

The workflow use a tool included in GitHubs default runner image called [yq](https://mikefarah.gitbook.io/yq). It extracts the test results from XML and generates the required JSON file.

Once the JSON has been generated, it's immediately escaped using [sed](https://www.gnu.org/software/sed/manual/sed.html) `sed 's/"/\\"/g'` since an unescaped JSON-array can cause issues for `curl` when we post the array to Alva Labs. Using single quotes with curl instead of escaping the array is not recommended since single quotes might appear in the test names.

### Test names

Alva Labs have a limited amount of space for displaying test names. So keep the display name of your tests short.

### Links to Alva Labs own materials files

Main GitHub organization: [DevSkillsHQ](https://github.com/DevSkillsHQ)

- [Publish test results workflow](https://github.com/DevSkillsHQ/publish-test-results-workflow/blob/main/.github/workflows/publish-test-results.yml)
- [Setup Boilerplate workflow](https://github.com/DevSkillsHQ/setup-boilerplate-workflow-test/blob/main/.github/workflows/setup-boilerplate.yml)
  - [.NET backend boilerplate](https://github.com/DevSkillsHQ/backend-boilerplate-dotnet)
  - [Express.js backend boilerplate](https://github.com/DevSkillsHQ/backend-boilerplate-expressjs)
  - [Java Spring Boot boilerplate](https://github.com/DevSkillsHQ/backend-boilerplate-java-springboot-maven)
