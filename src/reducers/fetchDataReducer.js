//jshint esversion: 9
const init = {
    data: [],
    isLoading: false,
    error: null,
};

const fetchDataReducer = (initState = init, action) => {
    switch (action.type) {
        case "START_FETCH_DATA":
            return {
                ...initState,
                isLoading: true,
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...initState,
                isLoading: false,
                data: action.payload,
            };
        case "DATA_FETCH_FAILED":
            return {
                ...initState,
                isLoading: false,
                error: "there is an error",
            };
        case "TOGGLE_WISHLIST":
            const tempState = [];
            initState.data.forEach((item) => {
                console.log(item.id);
                console.log(item.id.toString() === action.payload.toString());
                if (item.id.toString() === action.payload.toString()) {
                    item.wishlist = item.wishlist !== undefined && item.wishlist !== null ? !item.wishlist : true;
                }
                tempState.push(item);
            });
            return {
                ...initState,
                data: tempState,
            };
        case "REMOVE_FROM_WISHLIST":
            const tempData = [];
            initState.data.forEach((item) => {
                console.log(item.id);
                console.log(item.id.toString() === action.payload.toString());
                if (item.id.toString() === action.payload.toString()) {
                    item.wishlist = false;
                }
                tempData.push(item);
            });
            return {
                ...initState,
                data: tempData,
            };
        default:
            return initState;
    }
};

export default fetchDataReducer;
