// filepath: /c:/Users/ADMIN/little-lemon/src/redux/reducers/userReducer.ts
const initialState = {
  // initial state
};

interface UserState {
    // Define your state properties here
}

interface UserAction {
    type: string;
    payload?: any;
}

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        // handle actions
        default:
            return state;
    }
};

export default userReducer;