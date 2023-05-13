import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../Redux/Reducers/productSlice";
import { STATUSES } from "../../Redux/Reducers/productSlice";
import { add } from "../../Redux/Reducers/cartSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import  "../dropmenu/Product.css"
import { MdProductionQuantityLimits } from "react-icons/md";


const Product = () => {
  // copied
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const products = useSelector((state) => state.product);
  // const  status  = useSelector((state) => state.product);
const [filter, setFilter] = useState(products);

  
  useEffect(() => {
    dispatch(fetchProducts());
    
}, [dispatch]);


const handleAdd = (product) => {
  dispatch(add(product));
};

// if (status === STATUSES.LOADING) {
//   return <h2>Loading....</h2>;
// }

if (status === STATUSES.ERROR) {
  return <h2 style={{color:"red"}}>Something went wrong!</h2>;
}


  const Loading = () => {
    return (
      <>
      <div className="loadingdisp">
        <div className="col-md-3">
          <Skeleton width={300}  height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton width={300}  height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton width={300}  height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton width={300}  height={350} />
        </div>
        {/* <div className="col-md-3">
          <Skeleton width={300} height={350} />
        </div> */}
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedlist = products.filter((x) => x.category === cat);
    setFilter(updatedlist);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="Probuttons">
          <motion.button whileTap={{scale:1.1 }}
            className="Prbtn"
            onClick={() => setFilter(products)}
          style={{background:"lightskyblue"}}>
            All 
          </motion.button>
          <button
            className="Prbtn"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="Prbtn"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
          <button
            className="Prbtn"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="Prbtn"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
        </div>
        <div className="pmap"> 
        {filter.map((p , index) => {
          return (
            <> 
              <div className="pro4" key={p.id} >
                <div className="cards" >
               
                  <img 
                    src={p.image}
                    className="cardimg"
                    alt={p.title}
                  />
                  <div className="cardbody" >
                    <h5 >
                      {p.title.substring(0, 12)}
                    </h5>
                    <span>${p.price}</span>
                    <br/>
                    <br/>
                    <br/>
                    <Link to={`/products/${p.id}`} className="Prbtn">
                      Buy Now
                    </Link>
                    <motion.button whileTap={{scale: 1.1}}  onClick={() => handleAdd(p)} className="Prbtn">
                      Add to Cart
                    </motion.button>
                    {/* <br/>
                    <br/>
                    <br/> */}
                   
                  </div>
               
                </div>
              </div>
            </>
          );
        })}
        </div>
      </>
    );
  };

  // neeeeeeeeeeeeeew
  // const Productslist = () => {
  //   return (
  //     <>
  //       <div className="pmap"> 
  //       {products.map((p , index) => {
  //         return (
  //           <> 
  //             <div className="pro4" key={p.id} >
  //               <div className="cards" >
               
  //                 <img 
  //                   src={p.image}
  //                   className="cardimg"
  //                   alt={p.title}
  //                 />
  //                 <div className="cardbody" >
  //                   <h5 >
  //                     {p.title.substring(0, 12)}
  //                   </h5>
  //                   <span>Rs: {p.price}</span>
  //                   <br/>
  //                   <br/>
  //                   <br/>
  //                   <Link to={`/products/${p.id}`} className="Prbtn">
  //                     Buy Now
  //                   </Link>
  //                   <motion.button whileTap={{scale: 1.1}}  onClick={() => handleAdd(p)} className="Prbtn">
  //                     Add to Cart
  //                   </motion.button>
  //                   {/* <br/>
  //                   <br/>
  //                   <br/> */}
                   
  //                 </div>
               
  //               </div>
  //             </div>
  //           </>
  //         );
  //       })}
  //       </div>
  //     </>
  //   );
  // };

  // endddddddddd


  return (
    <>
      <div>
      <div>
        <div className="Aimg">
          <img src="./Dropdown/ProductCategories.jpeg" alt="" />
        </div>
        <div className="Acentered">
          <h1>Product Categories</h1>
        </div>
      </div>
        <div className="container w-100vw my-5 py-5">
          <div className="prorow">
              
                <h1>
                <MdProductionQuantityLimits/>
                Latest Products
              </h1>
            </div>
          </div>
          <div className="rrr">
          {status === STATUSES.LOADING ? <Loading /> : <ShowProducts/>}

            {/* {status === STATUSES.LOADING ? <Loading /> :  <Productslist/> || <ShowProducts/> } */}
          </div>
      </div>
      <hr className="Aline"/>
      
    </>
  );
};

export default Product;
