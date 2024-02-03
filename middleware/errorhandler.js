const errorhandler = (err,req,res,next) =>{
   return res.sendStatus(500).json({msg: `something went wrong`});
}

module.exports = errorhandler