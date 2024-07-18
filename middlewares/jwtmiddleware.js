const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res, next) => {
  console.log(req.headers)

  try{
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)

    const jwtResponse = jwt.verify(token,process.env.JWT_SECRET)
    console.log(jwtResponse)
    req.payload = jwtResponse ;
    next();
  }catch(error){
    res.status(401).json(`Invalid token ${error}`)
  }

}

module.exports = jwtMiddleware;

