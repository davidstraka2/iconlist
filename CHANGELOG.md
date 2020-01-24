# 1.1.5 (2020-01-24)

## Minor package changes

- Updated dependencies
- Added issue and pull request count badges to README

## Project changes

- Optimized CI workflow by splitting it up into 3 separate jobs (for linting
    main project, linting examples, and running tests) and by not installing
    unnecessary dependencies in lint jobs
- Renamed */demos* to */examples*
- Added a list of all examples to README in */examples*
- Moved clean script and linting logic outside of Next.js + Font Awesome demo
- Tweaked `npm start` script in Next.js + Font Awesome demo to run `npm i`
    before starting dev server

# 1.1.4 (2019-12-21)

## Minor package changes

- Updated dependencies
- Added badges to README

## Project changes

- Set up simple tests
- Set up CI
- When linting from the main package, demos' dependencies are installed to
    ensure any eslint plugins needed are there
- Disabled eslint linebreak-style rule

# 1.1.3 (2019-11-15)

## Minor package changes

- Updated dependencies
- Added changelog file

## Project changes

- Set up code linting

# 1.1.2 (2019-07-12)

## Minor package changes

- Removed demos from npm package to reduce package size
