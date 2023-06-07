const mysql=require("mysql")
const dotenv=require("dotenv")
const { response } = require("express")
const connect = mysql.createConnection({
    host:process.env.HOST_NAME,
    user:process.env.USER_NAME,
    port:process.env.PORT_NUMBER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
connect.connect((err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("db Connected")
    }
})
let instance =null



class DbService {
    static getDbServiceInstance(){
        return(instance?instance:new DbService())
    }
    async getAllData(){
        try{
                var response
                response= await new Promise((resolve,reject)=>{
                const query = "SELECT * from testtable"
                connect.query(query,(err,result)=>{
                    if(err){
                        reject(new Error (err.message))
                    }
                    else{
                        resolve(result)
                    }
                })
            })

        return(response)
        }catch(error){
            console.log(error)
        }
     
    }

    async insertHotel(a,b,c,d){
        try{
            const response1= await new Promise((resolve,reject)=>{
                const query = `INSERT INTO testtable (id,name,rating,imageURL) VALUES (${a}, ${b},${c},${d} )  `
                connect.query(query,(err,result)=>{
                    if(err){
                        reject(new Error (err.message))
                    }
                    else{
                        resolve(result)
                    }
                })
            })
            return(response1)
        }
        catch(error){
            console.log(error)
        }
    }

  async getAllReviews(a){
    try{
        console.log("hereAtgetALlREviews")
        const response1= await new Promise((resolve,reject)=>{
            const query = `SELECT * FROM reviews WHERE id=${a}`
            connect.query(query,(err,result)=>{
                if(err){
                    reject(new Error (err.message))
                }
                else{
                    resolve(result)
                }
            })
        })
    console.log(response1)
        return(response1)
    }
    catch(error){
        console.log(error)
    }
  }  


  async postReview(a,b){
    try{
        console.log("hereAtgetALlREviews")
        const response1= await new Promise((resolve,reject)=>{
            const query = ``
            connect.query(query,(err,result)=>{
                if(err){
                    reject(new Error (err.message))
                }
                else{
                    resolve(result)
                }
            })
        })
    console.log(response1)
        return(response1)
    }
    catch(error){
        console.log(error)
    }
  }  
}
module.exports=DbService