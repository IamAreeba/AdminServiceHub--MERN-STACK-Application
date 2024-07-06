
// ======================= 03 =============================
/*
    We need file to maintain packages so for that we have package.json just like we have Account manager which maintains our all accounts
    npm init -y: 'y/yarn/pnpm/bun' for filling auto detail of the app
    We are creating server with express.js cuz Node.js is very lengthy
*/

// ======================= 04 =============================
/*
    Server.js is our main app and nodemon constantly checkout this file
    mount: Where do you want to show them
*/

// ================= 05 ======================
/*
    Controllers: Contain all the functionality / all actions
    "action": Desc of what u want to do
    "dispatch": func that carries out that action
    In useReducer we have dispatch and we have action
    
*/

// ============== 06 ==================
/*
    Working with req.body() => Show be the data of the body
    When we are working with json or sharing and displaying the Json data we need to use middlewares
    nodemon always refreshes server.js file

    app.use(express.json())
    The above line give us permission to use json in our app otherwise it always refereshes the app
    We have to use it before the request or top of all the requests when we are working with json data so that we can access the json data in response

    app.use(express.json());: This line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.

*/

// ====================== 07 ====================
/*


*/