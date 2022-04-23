//jshint esversion: 9
import React from "react";
import Counter from "./counter";
import { useDispatch } from "react-redux";
import { removeFromWishlist, addToCartAction } from "./../actions";

function EachWishlistItemCard(props) {
    const dispatch = useDispatch();

    return (
        <div className="each-wishlist-item-card d-flex justify-content-center overflow-hidden my-4 p-4">
            <div className="image mx-5">
                <img src={props.itemData.image} alt="product" height="100%" />
            </div>
            <div className="wishlist-item-desc pt-4 mx-5">
                <div className="fs-4 fw-bolder ls-1">{props.itemData.title.substring(0, 38)}</div>
                <div className="product-card-desc py-2 fs-6 color-light">
                    {props.itemData.description.substring(0, 80) + "..."}
                </div>
                <div className="product-price fs-5 fw-bold">Price: $ {props.itemData.price}</div>
            </div>
            <div className="align-self-center mx-5">
                <Counter />
            </div>
            <div className="wishlist-action-buttons mx-5 align-self-center">
                <div className="remove-from-wishlist pb-2">
                    <button
                        onClick={() => dispatch(removeFromWishlist(props.itemData.id))}
                        className="btn btn-outline-primary form-control"
                    >
                        Remove
                    </button>
                </div>
                <div className="add-to-cart pt-2">
                    <button onClick={() => dispatch(addToCartAction(props.itemData.id))} className="btn btn-primary form-control">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EachWishlistItemCard;
