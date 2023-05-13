import React from "react";
import "../cart/Cart.css";
// import { getdata } from "../Header/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { remove } from "../Redux/Reducers/cartSlice";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  // const { data: product } = useSelector((state) => state.product);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  // copied........
  const [totalprice, setTotalPrice] = useState(0);
  // const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalPrice(products.reduce((acc, curr) => acc + curr.price, 0));
  }, [products]);
  // .........

  return (
    <>
      <section>
        <div className="cart-items">
          <div className="containercc dc_flex">
            <div className="cart-details">
              {products.length === 0 && (
                <h3 className="no-items productcc">Cart is Empty</h3>
              )}

              {products.map((product , index) => (
                <>
                  <div className="cart-list productcc dc_flex" key={index}>
                    <div className="img">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="cart-details">
                      <h3>{product.title}</h3>
                      <h4>
                        ${product.price} <AiOutlineClose /> {product.qty}
                      </h4>
                    </div>
                    <div className="cart-items-function">
                      <div className="removeCart">
                        <button
                          className="removeCart cartbtn"
                          onClick={() => handleRemove(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}

              {/* </div> */}
            </div>
            {products.length === 0 ? " " : 
            <div className="cart-total  productccc">
              <h2>Cart Summary</h2>

              <div className=" dc_flex">
                <h4>Total Price :</h4>
                <h3>${totalprice}</h3>
              </div>
              <motion.button whileTap={{scale: 1.1}} className="checkouttbtn ">Checkout </motion.button>
            </div>
             }
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
