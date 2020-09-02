const express = require("express");
const app = express();
const axios = require('axios');
const port = process.env.PORT || 4000;
app.set('view engine', 'ejs');
app.use(express.static('public'));


// route to get product details
app.get("/products", (req, res) => {
  //const order = req.body.data;
  axios.get('https://eve.theiconic.com.au/catalog/products?gender=female&page=1&page_size=10&sort=popularity').then(resp => {
    
    console.log(resp.data);
    
    res.render('pages/products', {
      products: resp.data._embedded.product
    });
  });
 
});


// route to get the product video Url and display the Video
app.get("/productvideo", (req, res) => {
  //const order = req.body.data;
  axios.get('https://eve.theiconic.com.au/catalog/products/LO569SA80GXF/videos').then(resp => {
    
    console.log(resp.data._embedded.videos_url[0].url);
    
    res.render('pages/productvideo', {
      videourl: resp.data._embedded.videos_url[0].url
    });
    
  })
 
});




app.listen(port, () => {
  console.log(`running at port ${port}`);
});