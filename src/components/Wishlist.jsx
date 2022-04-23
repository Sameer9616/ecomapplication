//jshint esversion: 9
import React from "react";
import EachWishlistItemCard from "./EachWishlistItemCard";
import { useSelector } from "react-redux";

function Wishlist() {
    const items = useSelector((store) => store.productsData.data);

    return (
        <div className="wishlist-page">
            <div className="container">
                {items.map((item) => {
                    if (item.wishlist) {
                        return <EachWishlistItemCard itemData={item} />;
                    }
                    return "";
                })}
                {/* <EachWishlistItemCard /> */}
            </div>
        </div>
    );
}

export default Wishlist;
