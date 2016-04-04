# template-nodejs-app

------ CHANGE THIS TO YOUR APPLICATIONS DESCRIPTIONS ---------

Template for creating a node application including tests with mocha + chai and ES2015

## Development

### Installations NodeJs

**Install nvm if missing:**
#### Mac OSX

- `brew install nvm`
- Follow instructions in stdout
- `echo -e "[ -r ~/.bashrc ] && source ~/.bashrc" > ~/.bash_profile`

#### Windows

Version is defined in `.nvmrc`

- Install node by running: `nvm install`
- Install npm modules: `npm install`

##### Start developing

- Start and listen to changes by running:
```
npm start
```

### Testing

A test structure is setup and using:

- Mocha
- Chai + Sinon
- Istanbul

Great article on unit testing with istanbul, read it [here](https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/)

### Scripts

Some pre-initiated npm scripts are included:

- `npm start` -> Starts application with nodemon for development
- `npm test` -> Will run tests with mocha + chai and ES2015 support.
- `npm run test-cov` -> Will run tests and generate coverage report using instabul

A `Makefile` handles all configuration for runnable-scripts
