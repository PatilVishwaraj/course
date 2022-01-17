const mongoose = require('mongoose')

import mongoose from 'mongoose'

 

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const Post = new Schema({
    Id : {type:String},
    name : {type : String, required : true},
    email : {type : String, required : true},
    profile_photo_url : {type : String},
    roles : [],
    time : {type: Date, default: Date.now}
})

