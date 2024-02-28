const initialState = {
    user:{
        name:'',
        lastName:'',
        age:'',
    }
}
const userReducer = (state= initialState, action) => {
    switch (action.type){
        case 'ADD_USER':
            return {
                ...state,
                user:{
                    ...action.payload
                }

            }
        default:
            return state
    }
}
export default userReducer