const app = require('express')();
const http = require('http').Server(app);


const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect("mongodb+srv://kapildhavale602:KOHXKNuKMVxWZhjF@connectiontemplate.vricl.mongodb.net/?retryWrites=true&w=majority&appName=connectiontemplate");


const User = require('./models/usermodel');

async function insert()
{
    await User.create([
        {
            name: 'Kapil Dhavale',
            email: 'kapildhavale602@gmail.com'
        },
        {
            name: 'Bajirao',
            email: 'bajirao.com'
        },
        {
            name: 'Hare Ram',
            email: 'ram.com'
        }
    ]);

}
insert();


http.listen(3000,function(){
    console.log('Server is Running');
});
