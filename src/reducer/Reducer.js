import { GET_REGISTER_SUCCESS,FAILURE, GET_LOGIN_SUCCESS} from "../constants"
const initialState = {
    dashboard:[],
    key:998
}

const Reducer = (state=initialState,action) => {

    switch(action.type){
        case GET_REGISTER_SUCCESS:
            // console.log(action.user);
            const a = state.dashboard.concat(action.user)
            localStorage.setItem('info',JSON.stringify(a));
            // console.log("reducer page invoked",action.user);
            return ({
                ...state,
                dashboard:state.dashboard.concat(action.user)
            })

            case GET_LOGIN_SUCCESS:
                // console.log(999,action.user);
                return ({
                    ...state,
                    key:action.user
                })

        case FAILURE:
            return ({
                ...state,
            })

        default :
        return state
    }
}
export default Reducer;