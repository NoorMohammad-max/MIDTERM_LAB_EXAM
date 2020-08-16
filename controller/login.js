var express 	    = require('express');
var router 		    = express.Router();
var allusermodel    = require.main.require("./models/alluser");


router.get('/', function(req, res){

    res.render('login');
    
});


router.post('/', function(req, res)
{
    var user= {
		username:req.body.username,
		password:req.body.password
    };
    
    allusermodel.validate(user,function(result){
        if(result.length==1)
        {
            req.session.username=user.username;
            user.role=result[0].role;
            if(user.role=="admin")
            {
                res.redirect("/admin/home");
            }
        }
        else
        {
            res.redirect("/login");
        }
    });
});

module.exports = router;