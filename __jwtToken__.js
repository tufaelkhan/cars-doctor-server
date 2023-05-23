/**
 * JWT: Secure your API
 * --------------
 * CREATE CREATE
 * -------------
 * 1. Client: after user login send basic information to create token
 * 2. In the server install npm install jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires})
 * 5. return token to the client side.
 * 
 * 6. after reciving the token store it either httponly cookies or localstorage
 * 
 * 7. use a general space onAuthStateChange> AuthProvider
 * ----------------------
 * SEND TOKEN
 * ------------------------
 * 1. for sensitive api calls () send authorization headers {authorization: `Bearer token`}
 * 
 * ---------------------
 * VERIFY TOKEN
 * ------------------------
 * 1. Create a function called verifyJWT(middleware)
 * 2. this function will have three params: (req, res, next)
 * 3. First check whether the authorization headers exists
 * 4. if not send 401.
 * 5. get the token out of the authorization header
 * 6. call jwt.verify(token, secret, (error, decoded)=>{})
 * 7. if error => send 401
 * 8. set decoded to the req so that we can retrieve it later
 * 9. call the next() to go to the next function
 * 
 * ------------------------
 * 1. check wether token has the email that matches with the request email.
 * 
 */