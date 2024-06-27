const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'));

app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method.toLowerCase(), req.path);
    next();
})

app.use('/green',(req,res,next)=>{
    console.log('green');
    next();
})

app.use((req,res)=>{
    res.send('not found');
})
// app.use((req,res,next)=>{
//     console.log('This is m,y first middleware!');
//     next();
//     console.log('This is my first middlewre after calling next')
// })
// app.use((req,res,next)=>{
//     console.log('This is my second middleware');
//     next();
// })
// app.use((req,res,next)=>{
//     console.log('This is my third middleware');
// })

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/blue',(req,res)=>{
    res.send('blue');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
