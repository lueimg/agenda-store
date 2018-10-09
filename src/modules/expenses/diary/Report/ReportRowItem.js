import React from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export default class Expense extends React.PureComponent {
  render() {
    const amount = `s./${this.props.amount}`
    return (
        <div className='expense-item'>
          <div className="amount">{ amount }</div>
          <div className="category">{this.props.category}</div>
        </div>
    )
  }
}
