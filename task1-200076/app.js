import express from 'express'
import{ engine } from 'express-handlebars'
const app = express();
app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views','./templates')
//reply or respond from here frome backend but the request from web page

const arr = [{ id: 1, name: "ahmed", age: 21, city: "Egypt" },
{ id: 2, name: "ali", age: 24, city: "France" }
    , { id: 3, name: "yasser", age: 28, city: "THILAND" },{id: 4, name: "Shosha", age: 22, city: "Alexandria"}
]


const studentFunction = (request, response) => {
    console.log("ahmed")  

    let output = '<ul>';
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];
        output += "<li><a href='/students/" + x.id + "'>" + x.name + "</a></li>"

    }    

    output += '</ul>'
    response.send(output)
    

}

app.get('/students', studentFunction)

app.get('/students/:id',(req,res)=>{   
     
    const id =req.params.id
   const  y =arr.find((item)=>{
    return item.id==id
   })
   console.log(y)
   res.render("student",{layout:false})// all the views that will be exist in most common pages wil be exist when you need to call it in any time or in any where
})


app.listen(3000);