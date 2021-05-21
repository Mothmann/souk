<template>
<body>
    <div class="topnav" id="myTopnav">
        <router-link id="active" class="link" to="/" tag="button">Home</router-link>
        <router-link class="link" to="/logout" tag="button">Logout</router-link>
        <router-link class="link"  to="/category" tag="button">Categories</router-link>
        <router-link class="link"  to="/product" tag="button">Products</router-link>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <div class="arrivals">
        <h1>New Arrivals</h1>
    </div>
            <fetch-products v-for="product in fetchedProducts" 
            :key="product.productId" 
            :productName="product.productName"
            :productPicturePath="product.productPicturePath" 
            :productPrice="product.productPrice"/>
                  <div class="section group">
            <div class="col span_1_of_3">
                <i class="fa fa-car"></i>
                <h3>GLOBAL DELIVERY</h3>
                <p>Far far away, behind the word mountains,<br> far from the countries.</p>
            </div>
            <div class="col span_1_of_3">
                <i class="fa fa-comments"></i>
                <h3>SECURE PAYMENTS</h3>
                <p>Far far away, behind the word mountains,<br> far from the countries.</p>
            </div>
            <div class="col span_1_of_3">
                <i class="fa fa-user"></i>
                <h3>SIMPLE RETURNS</h3>
                <p>Far far away, behind the word mountains,<br> far from the countries.</p>
            </div>
        </div>
        <footer class="footer">
            <div class="footer-left">
                <img src="../../public/images/logo3.png" alt="">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada leo mauris, non ultricies nunc</p>
                <div class="socials">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                    <a href="#"><i class="fa fa-tumblr"></i></a>
                </div>
            </div>
            <ul class="footer-right">
                <li>
                    <h2>Product</h2>

                    <ul class="box">
                        <li><a href="#">Theme Design</a></li>
                        <li><a href="#">Plugin Design</a></li>
                        <li><a href="#">Wordpress</a></li>
                        <li><a href="#">Joomla Template</a></li>
                        <li><a href="#">HTML Template</a></li>
                    </ul>
                </li>
                <li class="features">
                    <h2>Useful Links</h2>

                    <ul class="box">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Tickets</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </li>
                <li>
                    <h2>Address</h2>

                    <ul class="box">
                        <li><a href="#">8 ibnou khatima</a></li>
                        <li><a href="#">Rue Les Hopitaux</a></li>
                        <li><a href="#">Casablanca</a></li>
                        <li><a href="#">Maroc</a></li>
                    </ul>
                </li>
            </ul>

            <div class="footer-bottom">
                <p>All Rights Reserved By &copy;Souk 2021</p>
            </div>

        </footer>

</body>
</template>
<script>
import fetchProducts from '../components/product/fetchProducts';
export default{
     components: {
       fetchProducts,
    },
  data(){
  return {
      productId: null,
      productName: '',
      productDescription: '',
      productUnitsinStock: null,
      productPicturePath: '',        
      productPrice: null,
      productCategories: [],
  };

},
  created() {
    this.fetchProducts();
  },
  computed: {
        fetchedProducts() {
            return this.$store.getters['product/products'];
        },
    },
  methods : {
    fetchProducts() {
            this.$store.dispatch('product/fetchProducts');
        }
  }
}
</script>
<style>
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: xx-large;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 3%;
}
/* Slideshow container */
.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

/* Hide the images by default */
.mySlides {
    display: none;
    margin-top: 5%;
}

/* Next & previous buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}
  
  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
  
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}
  
  /* Caption text */
  .text {
    color: #f2f2f2;
    font-size: 25px;
    letter-spacing: 2px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}
  
  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}
  
  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    margin-bottom: 2%;
}
  
  .active, .dot:hover {
    background-color: #717171;
}
  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}
/*  SECTIONS  */
.section {
    clear: both;
    padding: 0px;
    margin: 0px;
    text-align: center;
    padding-bottom: 2%;
    padding-top: 2%;
    margin-bottom: 3%;
    margin-left: 2%;
    margin-right: 2%;
}

/*  COLUMN SETUP  */
.col {
	display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
  background-color: rgb(65, 65, 65);
  padding-bottom: 2%;
  color: white;
}
.col:first-child { margin-left: 0; }

/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }


/*  GRID OF THREE  */
.span_3_of_3 { width: 100%; }
.span_2_of_3 { width: 66.13%; }
.span_1_of_3 { width: 32.26%; }



/*  GO FULL WIDTH BELOW 480 PIXELS */
@media only screen and (max-width: 480px) {
	.col {  margin: 1% 0 1% 0%; }
	.span_3_of_3, .span_2_of_3, .span_1_of_3 { width: 100%; }
  .items {flex-direction: column;}
  .items button {width: 120%;}

}

  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
  
  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}  

.img-slider {
    position: relative;
    width: 800px;
    height: 500px;
    margin: 10px;
    background-color: rgba(51, 51, 51, 0.712);
}
/*{}*/

.img-slider .slide {
    z-index: 1;
    position: absolute;
    width: 100%;
}

.img-slider .slide img {
    z-index: 1;
    width: 100%;
    border-radius: 5px;
}

.img-slider .slide .info {
    position: absolute;
    top: 0;
    padding: 15px 30px;
}

.img-slider .slide .info h2 {
    color: white;
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
}

.img-slider .slide .info p {
    color: white;
    background: rgba(0, 0, 0, 0.1);
    font-size: 16px;
    width: 60%;
    padding: 10px;
    border-radius: 4px;
}

@media (max-width: 820px){
    .img-slider{
      width: 600px;
      height: 375px;
    }
  
    .img-slider .slide .info{
      padding: 10px 25px;
    }
  
    .img-slider .slide .info h2{
      font-size: 35px;
    }
  
    .img-slider .slide .info p{
      width: 70%;
      font-size: 15px;
    }
  
    .img-slider .navigation{
      bottom: 25px;
    }
  
    .img-slider .navigation .btn{
      width: 10px;
      height: 10px;
      margin: 8px;
    }
  }
  
  @media (max-width: 620px){
    .img-slider{
      width: 400px;
      height: 250px;
    }
  
    .img-slider .slide .info{
      padding: 10px 20px;
    }
  
    .img-slider .slide .info h2{
      font-size: 30px;
    }
  
    .img-slider .slide .info p{
      width: 80%;
      font-size: 13px;
    }
  
    .img-slider .navigation{
      bottom: 15px;
    }
  
    .img-slider .navigation .btn{
      width: 8px;
      height: 8px;
      margin: 6px;
    }
  }
  
  @media (max-width: 420px){
    .img-slider{
      width: 320px;
      height: 200px;
    }
  
    .img-slider .slide .info{
      padding: 5px 10px;
    }
  
    .img-slider .slide .info h2{
      font-size: 25px;
    }
  
    .img-slider .slide .info p{
      width: 90%;
      font-size: 11px;
    }
  
    .img-slider .navigation{
      bottom: 10px;
    }
  }
.arrivals h1 {
  text-align: center;
  letter-spacing: 5px;
  font-weight: 600;
  color: rgb(255, 183, 0);
  margin-bottom: 5%;
  font-size: xx-large;
  margin-top: 5%;
  font-size: 40px;
}
.add{
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    background: rgb(255, 183, 0);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
}

.add:hover{
  transform: scale(1.1);
  background: rgb(255, 183, 0);
}
</style>
