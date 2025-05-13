export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (item:any) => ({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = (itemId:any) => ({
    type: REMOVE_ITEM,
    payload: itemId,
});