import { connect } from "react-redux";
import MenuItem from "../components/MenuItem";
import { removeItem } from "../store/items/actions";
/*
[ownProps​]
If your mapStateToProps function is declared as taking two parameters, 
it will be called whenever the store state changes or when the wrapper component 
receives new props (based on shallow equality comparisons). It will be given the store 
state as the first parameter, and the wrapper component's props as the second parameter.
*/
const mapDispatchToProps = (dispatch, ownProps)=> {
    return {
        remove:  () => dispatch(removeItem(ownProps.uuid))
    }
}

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem)