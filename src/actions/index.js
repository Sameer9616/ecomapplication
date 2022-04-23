//jshint esversion: 9
export const fetchDataAction = (url) => (dispatch, getState) => {
    dispatch({
        type: "START_FETCH_DATA",
    });

    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw Error("Not able to fetch the data");
        })
        .then((data) => {
            dispatch({
                type: "FETCH_DATA_SUCCESS",
                payload: data,
            });
        })
        .catch((error) => {
            dispatch({
                type: "DATA_FETCH_FAILED",
                error: error,
            });
        });
};

export const showCartAction = () => {
    return {
        type: "SHOW_CART_SLIDER",
    };
};

export const hideCartAction = () => {
    return {
        type: "HIDE_CART_SLIDER",
    };
};

export const addToCartAction = (data) => {
    return {
        type: "ADD_TO_CART",
        payload: data,
    };
};

export const removeFromCartAction = (position) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: position,
    };
};

export const toggleWishlist = (id) => {
    return {
        type: "TOGGLE_WISHLIST",
        payload: id,
    };
};

export const removeFromWishlist = (id) => {
    return {
        type: "REMOVE_FROM_WISHLIST",
        payload: id,
    };
};
