const express= require('express')
const path=require('path')

const geocodeURL=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')


//Load the hbs
const hbs=require('hbs')

const app=express()

//Define path for Express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../template/views')
const partialsPath=path.join(__dirname,'../template/partial')

//Setup handlebars Engine and Views Location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup Static Directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
     res.render('index', {
         name: 'Nishant Sharma',
         profession:'Web developer'
     })
})

app.get('/about', (req, res) => {
     res.render('about',{
         title:'About Section',
         course:'Node js',
         instructor:'Andrew Mead'
     })
})

app.get('/work', (req, res) => {
     res.render('work',{
          title:'Work Section',
          role:'Full Stack Developer'
     })
})

app.get('/help', (req, res) => {
     res.render('help',{
          title:'Helping Section',
          help:'help'
     })
})


app.get('/quickInfo',(req,res)=>{
     res.send([{
         name:'nishant sharma',
         age:21
     },{
         name: 'aakash',
         age:22
     }])
})

app.get('/pricing.html',(req,res)=>{
     res.send('<h1>Free free Free</h1>.Nishi beleives in Hardwork')
})



app.get('/contact.html',(req,res)=>{
     res.send('Contact number is <h4> +91 7830071955</h4>')
})


app.get('/weather',(req,res)=>{
     if(!req.query.address){
            return res.send({
                error:'You must provide an Address'
            })
     }
     else
     {
          geocodeURL(req.query.address,(error,{latitude,longitude,place}={})=>{
              if(error)
              {
                   return res.send({
                      error:error
                   })
              }

              forecast(latitude,longitude,(error,forecastData)=>{
              if(error)
              {
                   return res.send({
                      error:error
                   })
              }
              res.send({
                  forecast:forecastData,
                  location: place,
                  address:req.query.address
              })
              
              })
         })
     }
     
})

app.get('/products',(req,res)=>{
     if(!req.query.search){
            return res.send({
                error:'You Must provide a search item'
            })
     }
     //console.log(req.query.search)
     res.send({
         products: []
     })
})

app.get('/help/*',(req,res)=>{
      res.render('404',{
          title:'404',
          error:'Help Article Not Found'
     })
})

app.get('*', (req, res) => {
     res.render('404',{
          title:'404',
          error:'404 Not Found'
     })
})

app.listen(3000,()=>{
     console.log('Server is Up on port 3000')
})

