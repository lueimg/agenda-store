import React from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
export default class Expense extends React.PureComponent {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const amount = `s./${this.props.amount}`
    console.log('this.props: ', this.props);
    return (
        <div className='expense-item' onClick={this.handleClick}>
          <div className="amount">{ amount }</div>
          <div className="category">{this.props.category}</div>

          <Snackbar
          
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          message={<span id="message-id">{this.props.category}: {this.props.description}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        </div>
    )
  }
}
