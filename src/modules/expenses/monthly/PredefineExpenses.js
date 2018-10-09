import  React from "react";
import { connect } from "react-redux";
import { getAll } from "../../../store/reducers/predefineExpensesReducer";
import ExpenseRow from "./PredefinedExpenseRow";
import { PredefinedExpensesActions } from "../../../store/actions/predefinedExpensesActions";
import Button from '@material-ui/core/Button';
import styled  from 'styled-components';

const Actions = styled.div`
  align-self: auto
`;

const Wrapper = styled.div`
  align-self: auto
`;



type Props = {
  actions: any;
  list: any[];
};

class PredefineExpenses extends React.Component {

  componentDidMount() {
    this.props.actions.load();
  }

  add = () => {
    this.props.actions.add();
  };

  render() {
    console.log(this.props.list)
    return (
      <div>
        <h3>Gastos Predefinidos</h3>
        <div className="list">
          {this.props.list.map(item => <ExpenseRow key={item.id} {...item} />)}
        </div>
        <div className="add">
          <Button variant="contained" color="primary" onClick={this.add}>Agregar uno mas</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ predefinedExpenses }: IStore) => ({
  list: getAll(predefinedExpenses)
})

const mapDispatchToProps = dispatch => ({
  actions: {
    add() { dispatch(PredefinedExpensesActions.savePredefinedExpenses()); },
    load() { dispatch(PredefinedExpensesActions.getPredefinedExpenses()); }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PredefineExpenses);
