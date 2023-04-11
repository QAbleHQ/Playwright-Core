# Playwright-Core

**Playwright-Core Framework**

  

Simple to Use Framework for PlayWright developed by QAble

**Pre-requisite : NPM should be installed**
  

**Steps to Start :**


1. Clone this repository into your local

2. Navivate to root directory and execute this command 

        `npm init playwright@latest`

3. Choose the below Congiguration

        ```
	
        Do you want to use TypeScript or JavaScript? · JavaScript
        √ Where to put your end-to-end tests? · e2e
        √ Add a GitHub Actions workflow? (y/N) · false
        √ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

        ```
  
4. Multiple new directories will be created. 
  ```
  Update below fields in playwtight.confif.js  
    a. update "baseURL" with your url
   for eg. baseURL: 'http://www.webdriveruniversity.com/',
    b. update 
       testDir: './tests',
  ```
  
5. Execute test using below command 
   `  npm playwright test tests/test.spec.js --headed `

**Folder Structure**

```
--main___
	|____api
        |____web____
                    |__mouse.js
                    |__verify.js
                    |__base.js
--node_modules
--object_repository ____
                        |__moduleName___
                                        |__locators.js
                                        |__locatorMethod.js
-- playwright-report
--test-results
--tests ____
            |__moduleName___
                            |__test.spec.js
--package-lock.json
--package.json
-- playwright.config.js

```
