# Node Express Server Quick Start Guide

## NPM Commands

- `npm init -y`: Creates a `package.json` with a base template for your Express server.
- `npm install express`: Adds the Express dependency and updates the `dependencies` section in your `package.json`.
- `npm install nodemon`: Adds the Nodemon dependency, which refreshes your server whenever you save your `index.js` file.

## Steps to Build a Node Express Server
1. Execute the npm commands above.
2. In the package.json remove the
```javascript
"test"
```
script and replace it with
```javascript
"start": "nodemon index.js"
```
3. Create an index.js file and add the express dependency
```javascript
const express = require("express")
```
4. Activate express with 
```javascript
const app = express()
```
And then give it a port with
```javascript
app.listen(3000, () => {
   console.log(" Server running on port 3000 http://localhost3000 ")
}) 
```
5. Create your first get endpoint with 
```javascript
app.get("/", (req, res) => {
   res.send("Hello world"). // Note you can put html instead of "Hello world"
})
```

To run your Node Express server, use:

```bash
npm run start
```

# Happy Coding!
Ps. PLEASE ask questions if you get stuck anywhere I am always happy to help! Just @ me in discord or DM me.