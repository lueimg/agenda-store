import React from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export default class Expense extends React.PureComponent {
  render() {
    const categoryShortcut = this.props.category.slice(0,3);
    const amount = `s./${this.props.amount}`
    return (
        <Chip 
            className="margin-right-one" 
            avatar={<Avatar>{categoryShortcut}</Avatar>} 
            label={amount} 
        />
    )
  }
}
