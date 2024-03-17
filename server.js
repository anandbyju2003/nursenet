const express = require('express');
const session=require('express-session');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const {Users,Workers,Reviews}=require('./schema');
const app=express();
app.use(session({
    secret:'youwillnevergetthisshit',
    resave:false,
    saveUninitialized:true
}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/test').then(console.log('Connected to DB'));

app.route('/')
    .get((req, res) => {
        res.sendFile(__dirname + '/public/mainpage.html');
    })

app.route('/usersignup')
    .get((req, res) => {
        res.sendFile(__dirname+'/public/usersignup.html')
    })
    .post((req, res) => {
        const {name,email,address,city,pincode,contact,password} = req.body;
        const user = new Users({name:name, email:email, address:address, city:city, pincode:pincode, contact:contact,password:password });
        user.save().then(() => {
            res.send('Data saved');
        });
    });

app.route("/userlogin")
    .get((req,res)=>{
        res.sendFile(__dirname+'/public/userlogin.html');
    })
    .post((req,res)=>{
        const {email,password}=req.body;
        Users.findOne({email:email,password:password}).then((data)=>{
            if(data){
                req.session.myid=data.id;
                res.sendFile(__dirname+'/public/userhome.html');
            }
            else{
                res.send('failed to login');
            }
        })});

app.route("/userhome")
        .get((req,res)=>{
            const profession=req.query.profession;
            Workers.find({ profession: profession}).then((data) => {
                res.render('listworkers', { data });
            })
        })

app.route("/workerdetails")
    .get((req,res)=>{
        const id=req.query.id;
        const userid=req.session.myid;
        req.session.workerid=id;
        Workers.findById(id).then((data)=>{
            res.render('workerdetails',{ data , userid});
        });
    });

app.route("/bookings")
    .get((req,res)=>{
        const workerid=req.session.workerid;
        const userid=req.session.myid; 
        res.render('booking',{workerid,userid});
    });

    app.post('/location', (req, res) => {
        const workerid = req.session.workerid;
        const userid = req.session.myid;
        const coordinates = req.body; // Access JSON body
        console.log('Received coordinates:', coordinates);
        res.json({ message: 'Location received successfully.' });
    });
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});