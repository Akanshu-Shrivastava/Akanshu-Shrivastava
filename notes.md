const fs = require("fs")

const text = JSON.parse(fs.readFileSync('text.json','utf-8'));
const products = text.products;

app.use(express.json());

//Restful API's

//read

app.get("/products",(req,res)=>{
    res.json(products);
});

app.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const product = products.find(p=>p.id===id);
    res.json(product);
})

//create

app.post('/products',(req,res)=>{
    products.push(req.body);
    res.json(req.body);
})

//update

app.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json()   
})

app.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()   
})

app.delete('/products/id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1);
    res.status(200).json(product)
})