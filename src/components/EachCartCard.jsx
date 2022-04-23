//jshint esversion: 9
import React from "react";
import Counter from "./counter";
import { removeFromCartAction } from "./../actions";
import { useDispatch } from "react-redux";

function EachCartCard(props) {
    const dispatch = useDispatch();
    console.log(props.itemData);

    return (
        <div className="each-cart-card my-5 overflow-hidden mx-5">
            <div className="d-flex h-100 w-100 pb-4">
                <div className="image align-self-center ">
                    <img src={props.itemData.image} alt="product" height="100%" />
                </div>
                <div className="each-cart-content ms-3">
                    <div className="fs-5 fw-bolder ls-1">{props.itemData.title}</div>
                    <div className="d-flex pt-3">
                        <Counter />
                        <div className="ps-4">
                            <button
                                onClick={() => {
                                    dispatch(removeFromCartAction(props.itemData.id));
                                }}
                                className="btn btn-outline-primary form-control"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="product-price fs-5 mt-3 fw-bold">Price: $ {props.itemData.price}</div>
                </div>
            </div>
        </div>
    );
}

export default EachCartCard;
