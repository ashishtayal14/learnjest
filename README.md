# Isomorphic React
## A Starter Isomorphic React Application with All Best Practices and No Frills
![image](https://user-images.githubusercontent.com/4268152/31387801-c091f5c8-ad99-11e7-9cb6-42fcde98fc88.png)
### About The Application
This application is a basic API client which gathers data from an outside API (in this case, Stackoverflow) and generates an isomorphic, single-page application (SPA).

### Why Isomorphic React?
Great question!
- Uses React / Redux as main application engine
- Supports hot reloading and server rendering!
- Uses React Router (in a combination with server rendering that is truly amazing)
- No fluff, just the good stuff

### Getting Started
1) Clone the repository
2) install dependencies
`npm install && npm run postinstall`
3) Run the dev server
`npm run start-dev`
4) Navigate to the application's url
`http://localhost:3000/`

### Usage
#### Enabling / Disabling Server Rendering
Server rendering is great, but sometimes we want to disable it when there's an error in our render and we'd rather troubleshoot it in the client.
This setting is passed in as a CLI argument via the `--useServerRender=true` argument.
You can modify this in `package.json` to `--useServerRender=false` which will disable any server-side rendering functionality.

#### Enabling / Disabling Live Data
This application is designed to grab the latest data from `Stackoverflow.com`. However, their API has a strict request limit which means that no questions will be returned after X requests (usually 300).
Therefore, the application comes loaded with mock-questions in the data directory.
To ease the learning process by eliminating potential sources of error, live data is disabled by default.
However, you are strongly encouraged to use live data once you understand the associated pitfalls.
* Note: You can increase your allotted requests to a much larger number by registering an application here,
`https://stackapps.com/apps/oauth/register` and then appending the key to the URLs in `data/api-real-url.js`

### Production Build
This application fully supports a production build setting, which disables live reloading in favor of precompiled and uglified JS, which boosts performance.
To run production, run the command `npm run start-prod`, which automatically triggers the `build` script.
This mode is recommended for production. However, this boilerplate has never been used in actual production so utilize caution if deploying as a real application.

### Troubleshooting
#### `unexpected token import`
This error appears when babel is not configured correctly. This can actually be caused by outdated global dependencies, and is hard to fix. For best results, try the following -
- Install `babel-register` as a local saved dependency
- Update global versions of `babel`, `webpack` and all dependencies to latest / course versions

#### Any Error That is Taking a Long Time to Troubleshoot
Things can always go wrong in the world of programming. If this happens, clone the master branch of this repo to a new directory and run the installation instructions. If desired, you can work backwards, pruning extra files until you get the application in the state you want.

#### Problems with the Repo
I want this repo to work perfectly for as many users as possible. Got a problem? <a href=https://github.com/danielstern/isomorphic-react/issues/new>Open an issue!</a> Let's figure out a solution together.

# Learn Jest 

JEST(Zero Configuration Testing Platform)

- Need Of Test :
    1. Assures that the code will work as we expect it to.
    2. Help us in modular development of application.
    3. Prevents REGRESSION

- Regression :
When some other part of the application reaches to some unintended state due to the changes made by you.

- Types Of Test :

1. Unit Test -> Helps you test individual function
2. Component Test -> Helps you test individual component which includes user interaction.
3. Snapshot Test -> Subtype of component test. It uses snapshots to test the component rendering.
4. Performance Test -> Helps you test the performance of your application.
5. Coverage Test -> Test of Test. Helps you find out the percentage of code which is tested in the application.
6. End To End Test -> Lets you test your application end to end ie the way it would show up on a browser. It uses a virtual browser to
		   do that.

- JASMINE/MOCHA :
    1. Test Runners 
    2. Organise test into describe(suite) and it(test) blocks.

- ENZYME :

    1. Not a Test Runner
    2. Expresses component out as HTML. 
    3. Used for Component Test.

- Running package using npm script(npm run test) vs Running package using CLI (jest)
  npm script runs your package you have installed locally using your package.json file. If it doesn't find it locally then it looks for the package
  globally.On the other hand the command line runs the globally installed package.The CI tool also runs it using he command line.

- JEST :

    1. Build on top of JASMINE/MOCHA.
    2. ENZYME works with JEST.

Features		|	JEST  |			MOCHA
--- |   --- |   ---
Test Runner		|	Yes			|			Yes
Asynchronous Test 	|	Yes			|			Yes
Includes SPIES/Mock Func. |	Yes			|			No
Snapshot Test	|		Yes			|			No
Module Mocking		|	Yes			|			No

- Jest vs Jest CLI -> 

    Jest is basically installed locally in your project whereas the Jest CLI is installed globally.
    Jest is generally use with the npm script like npm run test("test" : "jest"). Whereas the Jest CLI can be run directly from the command line.
    Jest is a task runner whereas Jest CLI is a command line tool to get the arguments from the command line and configure Jest based on them.
    Jest CLI is used by us in development mode to run jest directly in the command line and is also used by the CI tool to run Jest.

- React and Jest - THE CONNECTION?

    Recommended by react team in react documentation and both are by Facebook.
    Both are MIT licence.

- Watching for changes
    1. CI generally runs test and Developers watch test
    2. Jest runs only those test which are related to changes files.
    3. In the watch mode it detects the change by itself and we don't need to tell it when it is supposed to run.


- `"test" : "jest"`

    When we run a npm script "npm run test" it throws an error in-case a test case breaks or jest exits with an error. This help the CI build tool to stop the integration when the script fails.

- How are test files identified?
    1. _test_/*.js
    2. *.spec.js
    3. *.test.js

- GLOBALS :

    1. Describe/Suite
    2. It/Test
    3. BeforeEach/BeforeAll
    4. AfterEach/AfterAll

- Skipping vs Isolating Test

    Skipping is discarding the test you have skipped and running all the other test.
    Isolating is discarding all the other test and running only those test you have isolated.
    Skipping OPPOSITE OF Isolating

- ASYNC TEST (max timeout is 5000 ms):

    1. Using Done -> "done" is the async callback which needs to be invoked when the async operation resolves.
    2. Using Promise -> In this we return a Promise form "it" and the test is passed then the promise is resolved.
    3. Using async/await -> Pass an async callback to "it" and put await in from of the method which return Promise.

- How to run JEST in command prompt 

    Jest regex -> Provide the regex for the files you want to execute or you could even provide the file name.

MOCKING



