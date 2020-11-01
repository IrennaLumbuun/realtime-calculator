# Sezzle-2020-Calculator
This is the source code for my sezzle take-home coding project. 

## What it does
A web app that logs calculations as they happen and shares those calculations with everyone connected to the app.  
  
For example, user A and user B go use the app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it. Results remain between sessions.  

## How I build it
Front-End: React.js  
Back-End: Node.js  
Deployment: Heroku  

## Try it Out!
https://calculator-sezzle-2020.herokuapp.com/  
**See demo**: [Issue #1](https://github.com/IrennaLumbuun/sezzle-2020-calculator/issues/1)

## How to run in local machine
1. Clone this git repository
2. Run `node app.js` to fire the backend  
(p.s. In `./front_end/src/App.js`, change `ENDPOINT`  
    From `const ENDPOINT = "https://calculator-sezzle-2020.herokuapp.com/";`  
    To `const ENDPOINT = "localhost:4001/";`)
3. Run `cd front_end`
4. Run `npm install` to install all dependencies
5. Run `npm start` to start the front-end
