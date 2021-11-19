import { connect } from "react-redux";
import { Summary } from "../components/Summary";
import { removeItem} from "../store/items/actions";

const mapStateToProps = (state, ownProps)=> {
    const items = state.items
    const subtotal = items.reduce((sum, item)=>(sum + item.quantity*item.price), 0)
    const tipAmount = subtotal * (state.tipPercentage/100)
    const total = tipAmount + subtotal
    return {
        subtotal,
        tipAmount,
        total
    }
}

export const SummaryContainer = connect(mapStateToProps)(Summary)