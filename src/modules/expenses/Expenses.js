import  React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { MonthlyPayments } from "./monthly/MontlyPayments";
import DiaryExpense from "./diary/DiaryExpense";
import ReportDailyExpense from "./diary/Report/Report";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddIcon from "@material-ui/icons/Add";
import ListIcon from "@material-ui/icons/List";
import PetsIcon from "@material-ui/icons/Pets";


export class Expenses extends React.Component {
  state = {
    value: "diary"
  };

  handleChange = (event, value) => {
    this.setState({ value }, () => {
      this.props.history.push(this.props.match.url + '/' + value)
    });
  };

  render() {
    const nav = (
      <nav>
        <Link to={this.props.match.url}>Pagos Mes</Link>
        <Link to={this.props.match.url + "/diary"}>Diario</Link>
        <Link to={this.props.match.url + "/diary-report"}>Reporte</Link>
      </nav>
    );

    return (
      <React.Fragment>
        <div className="expenses-wrapper overflow-auto height-90vh flex">
          <Switch>
            <Route
              path={this.props.match.url + "/monthly"}
              component={MonthlyPayments}
            />
            <Route
              path={this.props.match.url + "/diary"}
              component={DiaryExpense}
            />
            <Route
              path={this.props.match.url + "/diary-report"}
              component={ReportDailyExpense}
            />
            <Route
              exact
              path={this.props.match.url}
              component={DiaryExpense}
            />
          </Switch>
        </div>
        <BottomNavigation value={this.state.value} onChange={this.handleChange}>
          <BottomNavigationAction
            label="registra"
            value="diary"
            icon={<AddIcon />}
          />
          <BottomNavigationAction
            label="Reporte"
            value="diary-report"
            icon={<ListIcon />}
          />
          <BottomNavigationAction
            label="consolidado"
            value="monthly"
            icon={<PetsIcon />}
          />
        </BottomNavigation>
      </React.Fragment>
    );
  }
}

export default Expenses;
