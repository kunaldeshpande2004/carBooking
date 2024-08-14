/*const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('connected')
})
.catch(()=>{
    console.log('failed')
})
*/

const mongoose = require('mongoose');

const uri = "mongodb+srv://kunalgirish135:EIjP5YYzondpVPaT@cluster0.iarmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas via Mongoose!");
}).catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
});


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