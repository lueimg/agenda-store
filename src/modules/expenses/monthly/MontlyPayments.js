import React from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../../store/reducers/expenses';
import Payment from './Payment';

export class MonthlyPayments extends React.Component {

  render() {
    return (
      <div>
        {this.props.payments && this.props.payments.map((item) => (
          <Payment key={item.id} {...item}  />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  payments: getAll(state.predefinedExpenses) || []
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyPayments)





