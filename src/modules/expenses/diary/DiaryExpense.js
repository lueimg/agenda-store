import  React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DiaryExpensesActions } from "../../../store/actions/expenses";
import { Expense } from "../models/Expense";

export class DiaryExpense extends React.Component {
  
  state = { ...new Expense() };

  save = () => {
    this.props.save({...this.state }).then((response) => {
      console.log('🔥 save:', response);
    });
    this.setState({ ...(new Expense()) });
  };

  updateState = (name) => e => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    const isFormValid = this.state.category && this.state.amount && this.state.description
    return (
      <div className="flex flex-column flex-justify-content-center flex-align-items-center flex-grow-1 ">
        <div>
          <TextField
            id="date"
            label="Dia"
            type="date"
            onChange={this.updateState('day')}
            value={this.state.day}
          />
        </div>
        <div className="margin-one">
          <TextField
            label="categoria"
            value={this.state.category}
            onChange={this.updateState('category')}
          />
        </div>

        <div className="margin-one">
          <TextField
            label="Description "
            value={this.state.description}
            onChange={this.updateState('description')}
          />
        </div>

        <div className="margin-one"> 
          <TextField
            label="s./"
            value={this.state.amount}
            type="number"
            onChange={this.updateState('amount')}
          />
        </div>
        <div className="actions margin-top-two">
          <Button 
              onClick={this.save} 
              variant="contained" 
              color="primary" 
              disabled={!isFormValid}
          >
            Guardar
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  save: DiaryExpensesActions.save
};

export default connect(null, mapDispatchToProps)(DiaryExpense);
