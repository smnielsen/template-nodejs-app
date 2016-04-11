lint:
	node_modules/eslint/bin/eslint.js --ext .js -c .eslintrc  ./app

lint-fix:
	node_modules/eslint/bin/eslint.js --ext .js -c .eslintrc --fix ./app

test:
	@NODE_ENV=test ./node_modules/.bin/mocha --recursive --opts ./test/mocha/mocha.opts --require ./test/mocha/mocha.setup

test-cov:
	@NODE_ENV=test ./node_modules/.bin/babel-node \
	./node_modules/.bin/isparta cover \
	./node_modules/.bin/_mocha -- --opts ./test/mocha.opts

.PHONY: test
