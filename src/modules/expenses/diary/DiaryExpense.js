import  React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DiaryExpensesActions } from "../../../store/actions/expenses";
import { Expense } from "../models/Expense";
import styled from 'styled-components';
import moment from 'moment';
export class DiaryExpense extends React.Component {
  
  state = { ...new Expense() };

  save = () => {
    this.props.save({...this.state });
    this.setState({ ...(new Expense()) });
  };

  updateState = (name) => e => {
    this.setState({ [name]: e.target.value });
  };

  onSelectCategoryList = (category) => {
    this.setState({category})
  }

  updateDay = (days) => () => {
    const day =  moment().add(days, 'days').format("YYYY-MM-DD");
    this.setState({day});
  }
  

  render() {
    const isFormValid = this.state.category && this.state.amount && this.state.description
    return (
      <div className="flex flex-column flex-justify-content-center flex-align-items-center flex-grow-1 ">
        <div className="margin-one width-90vw overflow-auto flex flex-justify-content-center">
          <Styled.Button onClick={this.updateDay(-2)}>AnteAyer</Styled.Button>
          <Styled.Button onClick={this.updateDay(-1)}>Ayer</Styled.Button>
          <Styled.Button onClick={this.updateDay(0)}>hoy</Styled.Button>
        </div>
        <div>
          <TextField
            id="date"
            label="Dia"
            type="date"
            onChange={this.updateState('day')}
            value={this.state.day}
          />
        </div>
        <div className="margin-one width-90vw overflow-auto">
          <CategoryList list={categories} selectItem={this.onSelectCategoryList} />
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
              disabled={!isFormValid}>
            Guardar
          </Button>
        </div>
      </div>
    );
  }
}

const categories = [
  'comida',
  'transporte',
  'bebe',
  'casa',
  'Mercado',
  'ocio',
]

const CategoryList = ({ list , selectItem }) => {
  return (<div className="flex">{ 
    list.map(name => 
      (<Categoryitem name={name} selectItem={selectItem}  />))}
    </div>)
}

const Categoryitem = ({name, selectItem }) => {
  const onClick = () => selectItem(name);
  return(<Styled.Button onClick={onClick}>{name}</Styled.Button>)
}



export default connect(null, { save: DiaryExpensesActions.save })(DiaryExpense);


const Styled = {
  Button: styled.div`
    background: aliceblue;
    margin: .2rem;
    padding: .5rem;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
  `
}