const express = require('express')
const router = new express.Router()
const blogController = require('../controllers/blogController')

router.get('/',blogController.all_Bolgs)
  
router.post('/',blogController.create_blogs)
   
router.get('/create',blogController.get_create_blog)
   
router.get('/:id',blogController.blog_Details) 

router.delete('/:id',blogController.delete_blogs) 

module.exports = router
















//all-blogs
 
    // Blog.find().sort({createdAt:-1}).then((result)=>{
    //     res.render('home',{title:'All-Blogs',blogs:result})
    // })


// create-blogs

    // const blogs = new Blog(req.body)
    // blogs.save().then((result)=>{
    //     res.redirect('/blogs')
    // }).catch((err)=>{
    //     console.log(err)
    // })

//get-create-blog
     // res.render('add-blogs',{title:'Create Blog'})


//blog-details
     // const id = req.params.id
    // Blog.findById(id).then((result)=>{
    //     res.render('details',{blog:result, title:'Blog Content'})
    // }).catch(err =>(console.log(err)))


//delete-blog
    // const id = req.params.id
    // Blog.findByIdAndDelete(id)
    // .then((result)=>{
    //     res.json({redirect:'/blogs'}) 
    // }).catch(err=>console.log(err))
                                          