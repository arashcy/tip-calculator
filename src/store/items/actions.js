/*
Your actions should only know the bare minimum they need for the sake 
of maintainability. The rest should be handled in your reducers. [From FEM Redux course]
*/
export const ITEM_ADDED = 'ITEM_ADDED'
export const ITEM_REMOVED = 'ITEM_REMOVED'
export const UPDATE_PRICE = 'UPDATE_PRICE'

export const addNewItem = (name, price) => ({
        type: ITEM_ADDED,
        payload: {
            price
        }
})

export const removeItem = (uuid) => ({
    type: ITEM_REMOVED,
    payload: {
        uuid
    }
}) 

// export const updatePrice = ()=> ({
//     type: ITEM_REMOVED
// })