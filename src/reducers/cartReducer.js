//jshint esversion: 9
const init = {
    isOpen: false,
    items: [],
};

const cartReducer = (initState = init, action) => {
    switch (action.type) {
        case "SHOW_CART_SLIDER":
            return {
                ...initState,
                isOpen: true,
            };
        case "HIDE_CART_SLIDER":
            return {
                ...initState,
                isOpen: false,
            };
        case "ADD_TO_CART":
            return {
                ...initState,
                items: [...initState.items, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                isOpen: true,
                items: initState.items.filter((item) => {
                    return item.id.toString() !== action.payload.toString();
                }),
            };
        default:
            return initState;
    }
};

export default cartReducer;
