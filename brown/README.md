# Meadowlark Travel web app
- Web Development with Node and Express, 2nd Edition
- Ethan Brown, November 2019 (ISBN: 9781492053507)
# Chapter 3. Saving Time with Express
- `$ npm init`
- `$ npm install express`
- `$ npm install express-handlebars`
# Chapter 4. Tidying Up
- packaging fortunes in modules
- CommonJS (exports and require)
# Chapter 5. Quality Assurance
- `jest` for unit testing
  - `$ npm install -save-dev jest`
  - the `scripts` property of `package.json` should have `"test": "jest"`
  - create `...test.js` files in `__test__` directory
  - need to refactor your code for testability
  - `jest.fn()` creates a generic mock function 
  - `$ npm test` to execute tests
  - `$ npm test -- --coverage` provides code coverage analysis
- `puppeteer` for integration testing
  - Puppeteer is a controllable, headless version of Chrome
  - `$ npm install --save-dev puppeteer`
  - `$ npm install --save-dev portfinder`
  - create `...test.js` files that invoke Puppeteer APIs
  - `$ npm test` runs not only `jest` but `puppeteer` tests
- `eslint` helps prevent common errors by finding potential errors
  - `$ npm install --save-dev eslint`
  - `$ ./node_modules/.bin/eslin --init` creates `.eslintrc.js`
  - `package.json`
    ```
    "scripts": {
        "test": "jest",
        "lint": "eslint meadowlark.js lib"
    },
    ```
  - `.eslintrc.js`
    ```
    "env": {
        "jest": true,
        "node": true,
        "commonjs": true,
        "es2020": true
    },
    ...
    "rules": {
        "no-console": "off"
    }
    ```
  - `$ npm run lint`