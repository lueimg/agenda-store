import React from "react";
import { Switch, Route } from "react-router-dom";
import { Expenses } from './expenses/Expenses';
import Layout from "./shared/ui/Layout";
import ModuleList from "./modules/List";

export class Main extends React.Component {
  render() {
    return (
      <Layout>
          <Switch>
              <Route path="/expenses" component={Expenses} />
              <Route exact path="/" component={ModuleList} />
          </Switch>
        </Layout>
    );
  }
}

export default Main;