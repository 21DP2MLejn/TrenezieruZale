const express = require('express')

const app =express()

app.get ('/',(req, res) => {
    res.send('Welcome to citronzale');
});

app.listen(4000, ()=>{
    console.log('burkans un desas')
})