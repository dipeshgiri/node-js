const authorize=(req,res,next)=>{
    const {user}=req.query;
    if(user==='john'){
        req.user={name:'john',id:20}
        next()
    }
    else{
        res.status(401).send('Unauthorized User')
    }
}
module.exports=authorize