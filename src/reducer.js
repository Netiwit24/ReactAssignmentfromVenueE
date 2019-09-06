const initialState = {
    data : []
}

const setData = (state = initialState, action) => {
    switch (action.type) {
        case "setData":
                state = {
                    ...state,
                    data: action.payload
                }
            break;
        default:
    }
    return state;
}

export default setData