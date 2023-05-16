interface AuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    email: string;
    password: string;
}
  
const initialState: AuthState = {
    isLoggedIn: false,
    accessToken: null,
    email: '',
    password: ''
};
  
function authReducer(state = initialState, action: any): AuthState {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                email: action.payload.email,
                password: action.payload.password,
                accessToken: action.payload.accessToken
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                email: '',
                password: '',
                accessToken: ''
            };    
        default:
            return state;
    }
  }
  
  export default authReducer;