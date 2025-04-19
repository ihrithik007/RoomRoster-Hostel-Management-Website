const mongoose = require('mongoose')
const mongouri ="mongodb+srv://ihrithik23sept:fnhpSyyFleBHMPWv@cluster0.q6jj6d9.mongodb.net/"
const connectToMongo =async ()=>{
    mongoose.connect(mongouri,()=>{
     
         console.log('connected to mongose succesfully')
    })
}
module.exports= connectToMongo;
