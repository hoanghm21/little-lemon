// filepath: /c:/Users/ADMIN/little-lemon/src/redux/reducers/menuReducer.ts
const initialState = {
  // initial state
};

interface MenuState {
    // define state shape here
}

interface MenuAction {
    type: string;
    payload?: any;
}

const menuReducer = (state: MenuState = initialState, action: MenuAction): MenuState => {
    switch (action.type) {
        // handle actions
        default:
            return state;
    }
};

export default menuReducer;