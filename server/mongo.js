const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('connected')
})
.catch(()=>{
    console.log('failed')
})

const bookingSchema=new mongoose.Schema({
    car: String,
    fromDate: Date,
    toDate: Date,
    hours: Number,
    amount: Number

});
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bookings:[bookingSchema]
   
})
const collection = mongoose.model("Coolcars",newSchema)
module.exports=collection