# React Live Markdown Editor &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## Features

- Markdown support 
- Code support
- Image support
- Math symbols and formulas
- Emoji chat

## Installation

`npm install`

## Starting server

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## More Scripts avaliables

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Build and run with Docker

`docker build -f Dockerfile.prod -t markdown-editor .`
`docker run --rm -p 3000:80 --name app-markdown markdown-editor`

Now that we have our optimized Docker image, let’s push it to Docker Hub:
`docker tag markdown-editor alexjcm/markdown-editor`
`docker login`
`docker push alexjcm/markdown-editor`

Now that you’re in the droplet, let’s create that docker container:
`docker run -d -p 3000:80 --name app-markdown alexjcm/markdown-editor`

## Contributing

Pull requests are welcome.

## License

[MIT licensed](./LICENSE).
