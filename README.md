# HackaOne 2023 Spring Workshop Lab - dApp 101 - Algorand Auction Demo

This demo is the main content for the workshop for HackaOne 2023 Spring, implementing an on-chain NFT auction using smart contracts on the Algorand blockchain.
The workshop slides can be found at: https://docs.google.com/presentation/d/1Acqma6bzBFtZi2_AekI5MN4n_ah7OKmQ4q-TVtRzJYw/edit#slide=id.p

## Usage

### Step 1: Start Algorand Blockchain local Environment
```
./sandbox up
```

### Step 2: Start backend service
This service will serve as the blockchain client and call the blockchain functionalities via sandbox shell scripts or python library.
In a seperate window, run the following:
```
pipenv shell
pipenv install
flask run
```
The service will be serving on 
```
http://127.0.0.1:5000
```
Run the following to verify the blockchain env is up and running. The following shall return a list of accounts in JSON format.
```
curl http://127.0.0.1:5000/accounts
[{"status": "offline", "address": "QJFSGTSIQ7XHNBS5KOQGIJRQWLIHWGFZMGGMR3RLUX7EFNXX6O6ZP3DQHA"}, {"status": "offline", "address": "YFWCRRT6F54AETG23YHHKK5HTMBEGL3ACMIWFLNKOYJXX4P7DPPWJJCSSE"}, {"status": "online", "address": "2US5CPRUKRLL7L6U7ZGAAVR42PBMXY2CN4SVC6PN5FEH5VZQRLTKA5S7FY"}]
```

### Step  3 - Start the local Web-app (written in React)
In a seperate window, run the following:
```
cd auction-app
npm install
npm start
```
The web-app will start a browser to access the web-app at: http://localhost:3000
