# FinTech-with-MERN-and-TypeScript

Publisher: [Packt Publishing](https://www.packtpub.com/)

Repository: [FinTech-with-MERN-and-TypeScript](https://github.com/PacktPublishing/FinTech-with-MERN-and-TypeScript)

Author: Jon Guenther

## CLI Glossary

The following are a sequential representation by chapter of all command-line code demonstrated in the book. Git and Gitflow commands are omitted.

### Chapter 2: Modeling Financial Objects with TypeScript

```bash
yarn install
yarn start
yarn add -D typescript@4.2.4
yarn add -D @babel/preset-typescript@17.13.0
yarn add -D @types/react@17.0.8
touch tsconfig.json
mkdir api
touch api/member.ts
yarn tsc
yarn start
rm -rf dist/
yarn start
touch api/account.ts
yarn add -D chai@4.3.4 mocha@8.4.0
yarn add -D @types/chai@4.2.18 @types/mocha@8.2.2
touch coverage/accountTests.ts
yarn tsc coverage/accountTests.ts
yarn test
yarn tsc coverage/accountTests.ts
yarn test
```