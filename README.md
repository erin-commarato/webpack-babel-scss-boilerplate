# Webpack Babel SCSS Boilerplate

Quickstart boilerplate for single page JS applications that utilizes Webpack, Babel and SCSS. Features include:
- [x] ECMAScript 6
- [x] Cache busting
- [x] Latest Webpack (v.3)
- [x] Separate CSS stylesheets
- [x] Export separate vendor files
- [x] SCSS support

## Getting Started

There are two methods for getting started with this repo.

### Familiar with Git?

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/erin-commarato/webpack-babel-scss-boilerplate.git
> cd webpack-babel-scss-boilerplate
> npm install
```

### Not familiar with Git?

Download the .zip file. Extract the contents of the zip file, then open your terminal, change
to the project directory and then:

```
> npm install
```

## Deployment

Build webpack bundles using

```
> npm run build - create build files in `build` folder
> npm clean - delete the build folder
```

Serve webpack bundles using

```
> npm run serve
```

Webpack dev server will serve on http://localhost:8080
