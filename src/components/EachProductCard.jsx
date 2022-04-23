//jshint esversion: 9
import React from "react";
// import { Link } from "react-router-dom";
// import tempImg from "./../assets/tempImg.jpg";
import { addToCartAction, toggleWishlist } from "./../actions";
import { useDispatch } from "react-redux";

function EachProductCard(props) {
    const dispatch = useDispatch();

    return (
        <div className="product-card p-5 m-4 my-5 rounded-3">
            <div className="position-relative">
                <div
                    onClick={() => dispatch(toggleWishlist(props.productData.id))}
                    className="wishlist-icon cursor-pointer position-absolute right-5 top-5"
                >
                    {props.productData.wishlist ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="red"
                            className="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-heart d-none"
                            viewBox="0 0 16 16"
                        >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    )}
                </div>
                <div className="product-card-img overflow-hidden d-flex justify-content-center">
                    <img src={props.productData.image} alt="product" height="100%" />
                </div>
                <div className="product-desc pt-4">
                    <div className="fs-5 fw-bolder ls-1">{props.productData.title.substring(0, 38)}</div>
                    <div className="product-card-desc py-2 fs-6 color-light">
                        {props.productData.description.substring(0, 80) + "..."}
                    </div>
                </div>
                <div className="product-price fs-5 fw-bold">Price: $ {props.productData.price}</div>
                <div className="add-to-cart pt-4">
                    <button onClick={() => dispatch(addToCartAction(props.productData))} className="btn btn-primary form-control">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EachProductCard;
