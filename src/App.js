
import './App.css';

import Header from './Header';
import ProductList from './ProductList';
import { useState } from 'react';
import CartList from './CartList';



function App() {

  const [product, setProduct] = useState([
    {
      url:"images/image1.jpg",
      name:"TRQ White Shoe",
      category: "Shoes",
      seller: "AMZ Seller Ghz",
      price: 1999,
    },
    {
      url:"images/image2.webp",
      name:"URQ White Shoe",
      category: "Shoes",
      seller: "BMZ Seller Ghz",
      price: 2999,
    },
    {
      url:"images/image3.webp",
      name:"URQ White Shoe",
      category: "Shoes",
      seller: "BMZ Seller Ghz",
      price: 2999,
    },
    {
      url:"images/image4.jpg",
      name:"VRQ White Shoe",
      category: "Shoes",
      seller: "Seller Ghz",
      price: 999,
    },
    {
      url:"images/image5.jpg",
      name:"White Shoe",
      category: "Shoes",
      seller: "CMZ Seller Ghz",
      price: 199,
    },
    
  ])

  const [cart, setCart] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) =>{
    console.log(data);
    setCart([...cart, {...data, quantity:1}])


  }

  const handleShow = (value) => {
    setShowCart(value);

  }
  return (


    
  


    <div className="App">
    
      <Header count={cart.length} 
      handleShow={handleShow}></Header>
       

       

      

      {
        showCart ? 
       
        
        
        <CartList cart={cart}></CartList>  : <ProductList product={product} addToCart={addToCart}></ProductList> 

        


      }
      
     
     
    </div>
  );
}

export default App;
