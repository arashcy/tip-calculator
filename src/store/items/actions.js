export const ITEM_ADDED = 'ITEM_ADDED'

export const addNewItem = (type, price) => ({
        type: ITEM_ADDED,
        payload: {
            price
        }
})