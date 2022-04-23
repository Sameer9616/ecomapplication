//jshint esversion: 9
import React, { useEffect } from "react";
import EachProductCard from "./EachProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "./../actions";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDataAction("https://fakestoreapi.com/products"));
    }, []);

    const productsData = useSelector((store) => store.productsData.data);

    return (
        <div className="home py-4">
            <div className="container">
                <div className="row">
                    {productsData.length > 0
                        ? productsData.map((product, index) => {
                              return (
                                  <div key={index} className="offset-1 offset-md-0 col-10 col-sm-10 col-md-6 col-lg-6 col-xl-4">
                                      <EachProductCard productData={product} />
                                  </div>
                              );
                          })
                        : ""}
                </div>
            </div>
        </div>
    );
}

export default Home;
