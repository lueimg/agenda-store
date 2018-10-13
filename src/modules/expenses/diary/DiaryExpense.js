import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DiaryExpensesActions } from "../../../store/actions/expenses";
import styled from "styled-components";
import moment from "moment";

import LinearOptions from "./CategoryField";
import { Expense } from "../models/Expense";

const categories = ["comida", "transporte", "bebe", "casa", "Mercado", "ocio"];
const Accounts = ["casa", "Semanal", "Varios", "Ahorro"];

export class DiaryExpense extends React.Component {
    state = { ...new Expense() };

    save = () => {
        this.props.save({ ...this.state });
        this.setState({ ...new Expense() });
    };

    updateState = name => e => {
        this.setState({ [name]: e.target.value });
    };

    updateDay = days => () => {
        const day = moment()
            .add(days, "days")
            .format("YYYY-MM-DD");
        this.setState({ day });
    };

    updateCategory = category => {
        this.setState({ category });
    };

    updateAccount = account => {
        this.setState({ account });
    };

    render() {
        const isFormValid =
            this.state.category && this.state.amount && this.state.description;
        return (
            <div className="flex flex-column flex-justify-content-center flex-align-items-center flex-grow-1 ">
                <LinearOptions
                    data={Accounts}
                    label="cuentas"
                    showLabel={false}
                    value={this.state.account}
                    onUpdateOptions={this.updateAccount}
                />
            
                <div className="margin-one width-90vw overflow-auto flex flex-justify-content-center">
                    <Styled.Button onClick={this.updateDay(-2)}>
                        AnteAyer
                    </Styled.Button>
                    <Styled.Button onClick={this.updateDay(-1)}>
                        Ayer
                    </Styled.Button>
                    <Styled.Button onClick={this.updateDay(0)}>
                        hoy
                    </Styled.Button>
                </div>
                <div>
                    <TextField
                        id="date"
                        label="Dia"
                        type="date"
                        onChange={this.updateState("day")}
                        value={this.state.day}
                    />
                </div>

                <LinearOptions
                    data={categories}
                    label="category"
                    value={this.state.category}
                    onUpdateOptions={this.updateCategory}
                />

                <div className="margin-one">
                    <TextField
                        label="Description "
                        value={this.state.description}
                        onChange={this.updateState("description")}
                    />
                </div>

                <div className="margin-one">
                    <TextField
                        label="s./"
                        value={this.state.amount}
                        type="number"
                        onChange={this.updateState("amount")}
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

export default connect(
    null,
    { save: DiaryExpensesActions.save }
)(DiaryExpense);

const Styled = {
    Button: styled.div`
        background: aliceblue;
        margin: 0.2rem;
        padding: 0.5rem;
        text-align: center;
        border: 1px solid #ccc;
        cursor: pointer;
    `
};
