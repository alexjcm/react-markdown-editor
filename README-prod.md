# Build and run with Docker for development

`docker build --rm -t alexjcm/markdown-editor .`

`docker run --rm -p 3000:3000 --name markdown-app alexjcm/markdown-editor`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Build and run with Docker for production

`docker build --rm -f Dockerfile.prod -t alexjcm/markdown-editor .`

Now that we have our optimized Docker image, let’s push it to Docker Hub:

`docker login`

`docker push alexjcm/markdown-editor`

Now that you’re in the droplet, let’s create that docker container:

`docker pull alexjcm/markdown-editor`

`docker run --rm -d -p 80:80 -p 443:443 -v /etc/ssl/my-server:/etc/nginx/certs --name markdown-app alexjcm/markdown-editor`


# Build and run with gh-pages

Add github workflow with JamesIves/github-pages-deploy-action@4.1.4