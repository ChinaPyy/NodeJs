let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'node'
});
connection.connect();

// 列表查询
connection.query('SELECT * FROM user limit 10',function (error, results, fields) {
    if (error) throw error ;
    console.log(results)
});

// 添加
// connection.query("INSERT INTO user(user_name,user_tel,user_pwd) VALUES('哥斯拉','*********','123123')",function (error,results,fields){
//     if(error) throw error ;
//     console.log(results)
// })

// 删除
// connection.query("DELETE FROM user WHERE user_id=4 ",function (error,results,fields){
//     if(error) throw error ;
//     console.log(results)
// })

// 修改
// connection.query("UPDATE user SET user_name = '二愣子',user_tel = '18872381923',user_pwd = '1231231' WHERE user_id = 5",function (error,results,fields){
//     if(error) throw error ;
//     console.log(results)
// })
connection.end()