import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "../dropmenu/ProductDetail.css";
import { FaCircle } from "react-icons/fa";
import { STATUSES } from "../../Redux/Reducers/productSlice";
import { fetchProduct } from "../../Redux/Reducers/productSlice";
import { add } from "../../Redux/Reducers/cartSlice";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  // const products = useSelector((state) => state.product);
  // const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // const { status } = useSelector((state) => state.myproduct);
  // const  status  = useSelector((state) => state.product);
  // const { products } = useSelector((state) => state.myproduct);
  // const  products  = useSelector((state) => state.product);

  const { productid } = useParams();

//   useEffect(()=>{
//     dispatch(getProduct(productid));
// },[products])

// const {rating,title,image,description,price,category}= products;


  useEffect(() => {
    dispatch(fetchProduct(productid));
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, [productid, dispatch]);

  // useEffect(() => {
  //   dispatch(fetchProducts(productid));
  //   // const fetchProducts = async () => {
  //   //     const res = await fetch('https://fakestoreapi.com/products');
  //   //     const data = await res.json();
  //   //     console.log(data);
  //   //     setProducts(data);
  //   // };
  //   // fetchProducts();
  // }, [productid, dispatch]);
  // }, [products]);

  const handleAdd = (product) => {
    dispatch(add(product));
};

console.log(productid )

  // const handleAdd = (product) => {
  //   dispatch(add(product));
  // };

  if (status === STATUSES.LOADING) {
    return (
      <>
        <div className="disp-2">
          <div className="col-md-6">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6">
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            {/* <Skeleton height={50} width={100} /> */}
          </div>
        </div>
      </>
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {/* {products.map((p) =>( */}
                <div className="disp-2" key={products.id}>
                  <div className="col-md-6 ">
                    <img
                      className="pdimg"
                      src={products.image}
                      alt=""
                      height="400px"
                      width="400px"
                    />
                  </div>
                  <div className="col-md-6 pdt">
                    <h4 className="text-uppercase text-black-50 pdh4">
                      {products.category}
                    </h4>
                    <h1 className="display-5 pdh1">{products.title}</h1>
                    <p className="lead fw-bolder pdp">
                      Rating {products.rating && products.rating.rate}{" "}
                      <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4 pdh3">
                      Rs: {products.price}
                    </h3>
                    <p className="lead pdp">{products.description}</p>
                    <p className="pdtp">Colour: </p>
                    <div className="pdcbtn">
                      <FaCircle style={{ color: "red" }} />
                      <FaCircle style={{ color: "black" }} />
                      <FaCircle style={{ color: "blue" }} />{" "}
                      <FaCircle style={{ color: "grey" }} />{" "}
                      <FaCircle style={{ color: "green" }} />{" "}
                    </div>

                    <motion.button whileTap={{scale:1.1 }}
                      className="btn btn-outline-dark pdbtn"
                      onClick={() => handleAdd(products.id)}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
            {/* )
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
