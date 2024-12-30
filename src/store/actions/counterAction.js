export const increment = (payload) => {
    return {
        type: "INCREMENT_NUMBER",
        payload: payload,
    }
}

export const decrement = (payload) => {
    return {
        type: "DECREMENT_NUMBER",
        payload: payload,
    }
}

