const express = require("express");
const app = express();
const axios = require('axios');
const port = process.env.PORT || 4000;
app.set('view engine', 'ejs');
app.use(express.static('public'));


// route to get product details
app.get("/products", (req, res) => {
  //const order = req.body.data;
  try {
    axios.get('https://eve.theiconic.com.au/catalog/products?gender=female&page=1&page_size=10&sort=popularity').then(resp => {
      if ((resp.data._embedded!=null) && (resp.data._embedded.product.length>0))
        {
          res.render('pages/products', {
          products: resp.data._embedded.product
          });
        }
      else
        {
          res.status(200).send({ "status": "info", "message" : "Product data not found." });
        }
    });
}
catch(error)
	{
		return res.status(500).json({
			status: 'error',
			message: 'An error occurred trying to retrieve data',
		})
	}
});


// route to get the product video Url and display the Video
app.get("/productvideo", (req, res) => {
  try {
        axios.get('https://eve.theiconic.com.au/catalog/products/LO569SA80GXF/videos').then(resp => {
        
        //console.log(resp.data._embedded.videos_url[0].url);
        if ((resp.data._embedded!=null) && (resp.data._embedded.videos_url.length>0)) {
          res.render('pages/productvideo', {
            videourl: resp.data._embedded.videos_url[0].url
          });
        }
        else
        {
          res.status(200).send({ "status": "info", "message" : "Product Video not found." });
        }
        
      })
   }
   catch(error)
   {
     return res.status(500).json({
       status: 'error',
       message: 'An error occurred trying to retrieve data',
     })
   }
});


app.listen(port, () => {
  console.log(`running at port ${port}`);
});
