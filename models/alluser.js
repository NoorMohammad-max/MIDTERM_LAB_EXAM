var db = require('./db');

module.exports ={
    validate: function(user, callback){

		var sql = "select * from alluser where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(result){
			if(result.length > 0)
			{
				callback(result);
			}
			else{
				callback([]);
			}
		});
	},

	insert: function(user,callback){
		var sql= "insert into alluser values('"+user.username+"','"+user.password+"','"+user.employeename+"','"+user.contact+"','"+user.role+"') ";
		db.execute(sql, function(status){
            if(status)
            {
                callback(true);
            }
            else{
                callback(false);
            }
		});
	},
	deleteUser:function(user,callback){
		var sql ="delete from alluser where username='"+user+"' ";
		db.execute(sql, function(status){
            if(status)
            {
                callback(true);
            }
            else{
                callback(false);
            }
		});
	}
}