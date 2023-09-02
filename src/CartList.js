import { useEffect, useState } from "react";

function CartList ({cart}){

    const [ CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)


    }, [cart])

    function deleteitem(cartItem){
        setCART(CART.filter(cartItems => cartItems.name !== cartItem.name));
        alert("delete sucess");
    }
    return(
        <div>
            {
                CART ?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src={cartItem.url} width={40}></img>
                            <span>{cartItem.name}</span>
                            <button
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ?  {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0} : item
                                })
                                setCART(_CART);
                            }}
                            >-</button>
                            <span>{cartItem.quantity}</span>
                            <button onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ?  {...item, quantity: item.quantity+1} : item
                                })
                                setCART(_CART);
                            }}
                            >+</button>
                            <span>{cartItem.price * cartItem.quantity}</span>

                           
                           <button onClick={()=> deleteitem(cartItem)} >remove</button>
                            
                        </div>
                    )
                })
            }

            <p>
                {
                    CART.map(item => item.price * item.quantity). reduce((total,value) => total + value, 0)
                }
            </p>
        </div>
    )
}

export default CartList;