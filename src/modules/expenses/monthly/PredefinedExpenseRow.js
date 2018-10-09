import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { PredefinedExpensesActions } from '../../../store/actions/predefinedExpensesActions';


const Row = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;


class ExpenseRow extends React.Component {

    state = {
      name: this.props.name,
      defaultAmount: this.props.defaultAmount,
      editMode: false
    }
  
    update = () => {
      this.props.actions.update({
        id: this.props.id,
        name: this.state.name,
        defaultAmount: this.state.defaultAmount
      })
      this.setState({editMode: false});
    }
  
    remove = () => {
      this.props.actions.remove({ id: this.props.id })
    }
  
    changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ name: event.target.value});
    }
  
    amountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ defaultAmount: event.target.value});
    }

    edit = () => {
      this.setState({editMode: true})
    }
    
    render () {

      if (!this.state.editMode) {
        return (
          <Row className="row">
            <div>
              {this.state.name} - {this.state.defaultAmount} 
            </div>
            <Button variant="fab" color="secondary" aria-label="Edit"  onClick={this.edit}>
              <Icon>edit_icon</Icon>
            </Button>
          </Row>
        )
      }

      return (
        <Row className="row">
          <div className="description">
            <TextField style={{ width: 100 }} id="name" label="Name" type="text" onChange={this.changeDescription } value={this.state.name} />
          </div>
          <div className="amount">
            <TextField style={{ width: 100 }}  id="name" label="Name" type="number" onChange={this.amountChange } value={this.state.defaultAmount} />
          </div>
          <div className="actions">
            <Button variant="fab" color="secondary" aria-label="Edit"  onClick={this.update}>
              <Icon>edit_icon</Icon>
            </Button>
            <Button variant="fab" aria-label="Delete" onClick={this.remove} >
              <DeleteIcon />
            </Button>

          </div>
        </Row>
      )
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: {
      update (doc) { dispatch(PredefinedExpensesActions.updatePredefinedExpenses(doc)) },
      remove (doc) { dispatch(PredefinedExpensesActions.removePredefinedExpense(doc)) },
    }
  }
}

  export default connect(null, mapDispatchToProps)(ExpenseRow)