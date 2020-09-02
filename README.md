# productapi
REST API Solution which displays product information using Node.js, Express, TypeScript, EJS

This RET API solution has been developed using Node.js, Express, TypeScript EJS, HTML, CSS
It exposes 2 end points through which users can get product information.

Following are the 2 end points of the application:


Type: GET
/products:
Display product details including name of the product, price in $,
Color(s) available for that product, Shipment Type, Description of the product,
SKU details, Return policy etc

Type: GET
/productvideo:
Displays a video preview of the product


Layout:
The layout of the pages to display product information is done at the front end using Templating Engine EJS.
The logic to display product information is in the file views/pages/products.ejs
The logic to display product video is in the file views/pages/productvideo.ejs

Partial Pages for header and footer have been used so that they have a commmon header and footer
It also means that code has been reused in these pages.

Styling has been done using a stylesheet under the public/css folder

Please Note: Some details from API which need not be displayed to the user are not displayed in the pages

Folder structure
root
    index.ts
	public
	     
	views
	     pages
		         products.ejs
			 	     productvideo.ejs
		   partials
		         header.ejs
				     footer.ejs
				 




