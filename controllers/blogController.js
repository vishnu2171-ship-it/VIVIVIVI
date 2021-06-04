const Blog = require('../models/blog')

const all_Bolgs = (req,res)=>{
    
    Blog.find().sort({createdAt:-1}).then((result)=>{
        res.render('home',{title:'All-Blogs',blogs:result})
    })
}

const create_blogs = (req,res)=>{
    const blogs = new Blog(req.body)
    blogs.save().then((result)=>{
        res.redirect('/blogs')
    }).catch((err)=>{
        console.log(err)
    })
}

const get_create_blog = (req,res)=>{
    res.render('add-blogs',{title:'Create Blog'})
}

const blog_Details = (req,res)=>{
    const id = req.params.id
    Blog.findById(id).then((result)=>{
        res.render('details',{blog:result, title:'Blog Content'})
    }).catch(err =>(console.log(err)))
}

const delete_blogs = (req,res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'})
    }).catch(err=>console.log(err))
}


module.exports = {
    all_Bolgs,
    create_blogs,
    get_create_blog,
    blog_Details,
    delete_blogs
}