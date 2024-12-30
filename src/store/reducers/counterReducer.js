let initialState = {
    number: 1,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_NUMBER":
            return {...state, number: state.number + action.payload};
        case "DECREMENT_NUMBER":
            return {...state, number: state.number - action.payload};
        default:
            return state;
    }
};

export default counterReducer;