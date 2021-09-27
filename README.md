## How to run the project

In the project directory, you can run:

### npm install

It will install the required packages for the application.

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Connect the application with the metamask wallet on ropsten network.

## Project Description
The application was created with the purpose of letting the user connect the metamask wallet using test network and the user will be able to see the wallet information. The user will also be able to swap the eth tokens with the dai tokens. Additionally the user will be able to see the previous transactions, pair data and the daily data graph.

## Issues faced
While using the npm package bnc-onboard, the issue with the web socket connection was poping up occasionally. Used try catch to handle the exception.
- Alternative: Web3Modal would have been a better way to integrate the same functionality.