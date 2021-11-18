/*
Your actions should only know the bare minimum they need for the sake 
of maintainability. The rest should be handled in your reducers. [From FEM Redux course]
*/
export const ITEM_ADDED = 'ITEM_ADDED'
export const ITEM_REMOVED = 'ITEM_REMOVED'
export const UPDATED_PRICE_ITEM = 'UPDATE_PRICE_ITEM'

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

export const updatePriceItem = (uuid, price)=> ({
    type: UPDATED_PRICE_ITEM,
    payload: {
        price,
        uuid
    }
})