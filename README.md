![deploy](https://github.com/gabrielgiordan/carbon-react-example/workflows/deploy/badge.svg)
[![codecov](https://codecov.io/gh/gabrielgiordan/carbon-react-example/branch/master/graph/badge.svg)](https://codecov.io/gh/gabrielgiordan/carbon-react-example)

This project follows the [Airbnb React style guide](https://github.com/airbnb/javascript/tree/master/react) with also the help of `eslint` and `prettier` configured for such.

## Usage

Use [`yarn`](https://classic.yarnpkg.com/en/docs/install) as the package manager.

Install the dependencies:

```bash
yarn install
```

Format your code when needed:

```bash
yarn format
```

Tests can be run with:

```bash
yarn test
```

Start the development server using:

```bash
yarn start
```

## Deployment

After passing the continous integration, the deployment is handled by the continous deployment pipeline, every commit to master is build and then pushed to `gh-pages` branch, which serves the [GitHub Pages](https://pages.github.com) static content.
