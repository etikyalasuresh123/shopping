import Display from "./Display";
import Home from "./Home";


function ProductList({product, addToCart}){

   
    return(
        <div>
            <Home></Home>

            <Display></Display>

            <h1 className="block2">salesbeez offers</h1>
        <div className="container">
            
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{width:"50%"}}>
                            <div className="product-item">
                                <img src={productItem.url} width="100%" />
                                <p>{productItem.name} | {productItem.category}</p>
                                <p>{productItem.seller}</p>
                                <p>{productItem.price}</p>
                                <button onClick={() => addToCart(productItem)}>Add to cart</button>
                                </div>
                            
                            </div>
                    )
                })
            }
            </div><br></br><br></br>


            
           

        </div>
    )

}

export default ProductList;