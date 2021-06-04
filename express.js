const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const blogRouter = require('./routes/blogRoutes')
// express apps
const app = express()

//connect to mongo db
const dbURI = 'mongodb://vishnu:magellanic2171@myblog-shard-00-00.srure.mongodb.net:27017,myblog-shard-00-01.srure.mongodb.net:27017,myblog-shard-00-02.srure.mongodb.net:27017/node-blog?ssl=true&replicaSet=atlas-siv69z-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true}).then((result)=>{
   // listening for requests on port 8080
    app.listen(PORT)
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})

//register the view engine
app.set('view engine', 'ejs')

// middlewares and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))




app.get('/',(req,res)=>{
    // res.sendFile('home.html',{root: __dirname})
   res.redirect('/blogs')
})

// app.get('/blogs',(req,res)=>{
   
//         Blog.find().sort({createdAt:-1}).then((result)=>{
//             res.render('home',{title:'All-Blogs',blogs:result})
//         })
   
// })

// app.post('/blogs',(req,res)=>{
//     const blogs = new Blog(req.body)
//     blogs.save().then((result)=>{
//         res.redirect('/blogs')
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({                         
//         title:'My blog 2',
//         snippet:'About my blog',
//         body:'more about my blog'
//     })
//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

app.get('/about',(req,res)=>{
    // res.sendFile('about.html',{root:__dirname})
    res.render('about',{title:'About-us'})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

// app.get('/blogs/create',(req,res)=>{
//     res.render('add-blogs',{title:'Create Blog'})
// })

// app.get('/blogs/:id',(req,res)=>{
//     const id = req.params.id
//     Blog.findById(id).then((result)=>{
//         res.render('details',{blog:result, title:'Blog Content'})
//     }).catch(err =>(console.log(err)))
   
// })
// app.delete('/blogs/:id',(req,res)=>{
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//     .then((result)=>{
//         res.json({redirect:'/blogs'})
//     }).catch(err=>console.log(err))
// })
app.use('/blogs',blogRouter)

app.use((req,res)=>{
    res.status(404).render('404')
    
})