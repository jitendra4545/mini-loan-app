

const jwt=require('jsonwebtoken')

const Auth=(req,res,next)=>{
    const token= req.headers.authorization;
console.log(token)
    if(token){
        jwt.verify(token, 'jitendra', function(err, decoded) {
            if(decoded){
                console.log(decoded)
                req.body.UserID=decoded.UserID
                next()
            }else{
                res.send({"msg":"Token didn't match, Please Login First!"})
            }
          });  
    }else{
        res.send({"msg":"Please Login First!"})
    }

}


module.exports={
    Auth
}