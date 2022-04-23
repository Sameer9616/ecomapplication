//jshint esversion: 9
import React from "react";
import EachCartCard from "./EachCartCard";
import { useSelector, useDispatch } from "react-redux";
import { hideCartAction } from "./../actions";

function MyCart() {
    const dispatch = useDispatch();
    const isOpen = useSelector((store) => store.cart.isOpen);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="mycart h-100">
            <div className="position-absolute top-0 right-0 bg-secondary border-start border-1 border-dark py-5 h-100">
                <div className="my-1 h-100">
                    <div className="close-icon d-flex justify-content-between px-4">
                        Your Items
                        <div onClick={() => (isOpen ? dispatch(hideCartAction()) : "")} className="cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="35"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-100 overflow-auto">
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => <EachCartCard itemData={item} key={index} />)
                        ) : (
                            <div className="p-4 fs-6">Cart is empty</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCart;
