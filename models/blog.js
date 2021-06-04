const mongoose = require('mongoose')
const Schema = mongoose.Schema


const blogSchema = new Schema({    
         // creating our schema
    name :{
        type:'string',
        required:true
    },    
    title:{
        type:'string',
        required:true
    },
    snippet:{
        type:'string',
        required:true
    },
    body:{
        type:'string',
        required:true
    }


},{timestamps:true})

const Blog = mongoose.model('Blog',blogSchema) // as we have blogs in our database and we are using 'Blog' ....it's because mongoose searches for plural form of it like cat for cats

module.exports = Blog //exporting Blog so we can use it elsewhere in the project

