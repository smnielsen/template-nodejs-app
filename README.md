# template-nodejs-app

------ CHANGE THIS TO YOUR APPLICATIONS DESCRIPTIONS ---------

Template for creating a node application including tests with mocha + chai and ES2015

## Development

### Setup

**Install nvm if missing:**
#### Mac OSX

- `brew install nvm`
- `echo -e "[ -r ~/.bashrc ] && source ~/.bashrc" > ~/.bash_profile`

#### Windows

- Follow instructions: https://github.com/coreybutler/nvm-windows

### Installation

#### NodeJs

Version is defined in `.nvmrc`

- Install node by running: `nvm install`
- Install npm modules: `npm install`

### Start developing

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

Run tests with: `npm test`

### Scripts

Some pre-initiated npm scripts are included:

- `npm start` -> Starts application with nodemon for development
- `npm test` -> Will run tests with mocha + chai and ES2015 support.

A `Makefile` handles all configuration for runnable-scripts
