const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection with Logging
mongoose
  .connect("mongodb+srv://kapildhavale602:kapil10849@connectiontemplate.vricl.mongodb.net/?retryWrites=true&w=majority&appName=connectiontemplate", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const User = require('./models/usermodel');

async function insert() {
  try {
    await User.create([
      { name: 'Kapil Dhavale', email: 'kapildhavale602@gmail.com' },
      { name: 'Bajirao', email: 'bajirao.com' },
      { name: 'mongo connection', email: 'ram.com' }
    ]);
    console.log("✅ Data Inserted Successfully");
  } catch (error) {
    console.error("❌ Error Inserting Data:", error);
  }
}

insert();

// Start Server
http.listen(3000, function () {
  console.log("🚀 Server is Running on http://localhost:3000");
});
