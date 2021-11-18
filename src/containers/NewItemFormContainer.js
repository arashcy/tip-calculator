import { connect } from 'react-redux';
import {MenuItems} from '../components/MenuItems'
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: (name, price)=> dispatch(addNewItem(name, price))
//     }
// }

const mapDispatchToProps = {
    onSubmit: (name, price)=> addNewItem(name, price)
}

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm)
