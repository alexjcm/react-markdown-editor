# React Markdown Editor

[![Deploy](https://github.com/alexjcm/react-markdown-editor/actions/workflows/deploy.yml/badge.svg)](https://github.com/alexjcm/react-markdown-editor/actions) [![codecov](https://codecov.io/gh/alexjcm/react-markdown-editor/branch/main/graph/badge.svg)](https://codecov.io/gh/alexjcm/react-markdown-editor) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![Build & deploy](https://github.com/alexjcm/react-markdown-editor/actions/workflows/build-and-deploy.yml/badge.svg?branch=main)](https://github.com/alexjcm/react-markdown-editor/actions/workflows/build-and-deploy.yml)

## Features

- Markdown support
- Code support
- Image support
- Math symbols and formulas
- Emoji chat

## Installation

`npm install`

## Starting server

In the project directory, you can run the app in the development mode:

`npm start`

## More Scripts avaliables

`npm test`

Launches the test runner in the interactive watch mode.

`npm build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Installation with Docker

`npm run docker-build`

`npm run docker-run`

Or

`docker build --rm -t markdown-editor .`

`docker run --rm -p 3000:3000 --name markdown-app markdown-editor`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing

Pull requests are welcome.

## License

[MIT licensed](./LICENSE).
