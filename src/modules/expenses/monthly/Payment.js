import React from 'react';
import { connect } from 'react-redux';

class Payment extends React.Component {

    static defaultProps = {
      name: 'Agua',
      defaultAmount: '40',
      date: new Date().getTime(),
      amount: '',
      paid: false,
      id: 0
    }
  
    state = {
      showBody: false,
      amount: this.props.amount || this.props.defaultAmount
    }
  
    displayBody = () => {
      this.setState({showBody: !this.state.showBody})
    }
  
    updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({amount: event.target.value})
    }
  
    markAsPaid = () => {
      this.props.actions.markAsPaid({
          id: this.props.id,
          amount: this.state.amount,
          paid: true
      })
      this.setState({showBody: false})
    }
    
    render () {
      return (
        <div className="payment-wrapper">
          <div className="display" onClick={this.displayBody}>
            <span className="name">{this.props.name}</span> - 
            <span className="amount">{this.state.amount}</span> - 
            <span className="amount">{this.props.paid ? 'Pagado': ' Pendiente'}</span>

          </div>
          { this.state.showBody && (
            <div className="body">
                <div className="date">Date: {this.props.date}</div>
                <div className="final-amount">Final : 
                    <input type="text" defaultValue={this.state.amount} onChange={this.updateAmount} />
                </div>
                {!this.props.paid && (
                    <div className="action">
                        <input type="button" onClick={ this.markAsPaid } value="Paid" />
                    </div>
                )}
            </div>
          )}
        </div>
      )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            markAsPaid(payload) { dispatch({type: 'update', payload })}
        }
    }
}


export default connect(null, mapDispatchToProps)(Payment)
  