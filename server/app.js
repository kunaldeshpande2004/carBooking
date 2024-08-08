const express= require('express')
const collection = require('./mongo')
const cors=require('cors')
const mailer=require('nodemailer')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const port = process.env.PORT || 8000;
app.post('/confirm', cors(), async (req, res) => {
    const { name, car, fromDate, toDate, hours, amount } = req.body;
    try {
        
        const data={
            car,
            fromDate,
            toDate,
            hours,
            amount
        }
        
        const result = await collection.updateOne(
            { name: name },
            { $push: { bookings:data}},
            { upsert: true }
        );
        
        console.log("Update result: ", result);

        if (result.matchedCount > 0) {
          
            res.json('done');
        } else if (result.upsertedCount > 0) {
          
            res.json('inserted');
        } else {
          
            res.json('no');
        }
    } catch (err) {
        console.log('Error: ' + err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/Bookings',cors(),async(req,res)=>{
    const name=req.query.name;
    try{
       const result= await collection.find({name:name},'bookings').exec();
       if(result.length===0){
        res.json('no bookings found'+name)
       }else{
        res.json(result)
       }
    }
    catch(err){
        res.json('some problem try again ')
    }

})

app.post('/logsignin',cors(),async (req,res)=>{
    const{name,password,email,action}=req.body;
    if(action ==='signup'){
        const data={
            name:name,
            password:password,
            email:email
        }
        try{
            const check=await collection.findOne({name:name})
            const check2=await collection.findOne({email:email})
            if(check || check2){
                res.json('exist')
            }
            else{
                res.json('notexist')
                await collection.insertMany([data])
            }
        }
        catch(err){
            console.log(err)
        }
    }
    else if(action==='login'){
        try{
            const check=await collection.findOne({name:name,password:password})
            if(check){
                res.json('exist')
            }
            else{
                res.json('notexist')
            }
        }
        catch(err){
             res.json(err)
        }
    }
})

app.post('/sendEmail',(req,res)=>{
    const{name,email,text}=req.body;
    const transporter=mailer.createTransport({
        host: "smtp.gmail.com", 
  auth: {
    user: 'kunalgirish135@gmail.com',
    pass: "xgoe lfyz moto hbdh",
  },
    })
    const options ={
        from:email,
        to:'kunalgirish135@gmail.com',
        replyTo:email,
        subject:'enquire',
        text:`From:${name}  \n\n mailid : ${email} \n\n ${text}`
    };
    transporter.sendMail(options,(err,info)=>{
        if(err){
            res.status(500).json("failed to Send Email Check your mailId")
        }
        else{
            res.json('Send Success Fully!!')
        }
    })

})


app.listen(port);