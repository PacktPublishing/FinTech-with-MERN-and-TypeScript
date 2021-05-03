# FinTech-with-MERN-and-TypeScript

Publisher: [Packt Publishing](https://www.packtpub.com/)

Repository: [FinTech-with-MERN-and-TypeScript](https://github.com/PacktPublishing/FinTech-with-MERN-and-TypeScript)

Author: Jon Guenther

## CLI Glossary

The following are a sequential representation by chapter of all command-line code demonstrated in the book. Git and Gitflow commands are omitted.

### Chapter 1: Bootstrapping the Project App

```bash
mkdir ach-transfers
mkdir ach-transfers/coverage
mkdir ach-transfers/public
mkdir ach-transfers/src
mkdir ach-transfers/tools
npm i -g yarn@1.22.10
yarn init -y
yarn add -D @babel/core@7.22
yarn add -D @babel/core@7.13.0
yarn add -D @babel/plugin-proposal-class-properties@7.13.0
yarn add -D @babel/plugin-proposal-object-rest-spread@7.13.8
yarn add -D @babel/preset-env@7.3.1
yarn add -D @babel/preset-react@7.13.13
yarn add -D @babel/preset-typescript@7.13.0
yarn add -D typescript@4.2.4
touch .babelrc
yarn add -D webpack@4.27.0
yarn add -D webpack-cli@3.2.1
yarn add -D webpack-dev-server@3.1.4
yarn add -D babel-loader@8.2.2
yarn add -D css-loader@4.3.0
yarn add -D html-webpack-plugin@4.5.2
yarn add -D html-loader@1.3.2
yarn add -D style-loader@2.0.0
yarn autoclean --init
yarn add react@17.0.2 react-dom@17.0.2
yarn add react-scripts@4.0.3
yarn audit
yarn audit fix
yarn audit fix --force
touch public/index.html
touch src/App.jsx
touch src/index.js
```
