import React from "react";
import Card from "./Card";
import { Divider } from '@material-ui/core';

class ModuleList extends React.Component {

  state = {
    modules: [
      {
        id: 'QVIkYcBZDlOaz4nzQccJ',
        name: "Gestion de Ahorro",
        description: "Ahorro Simple",
        path: "/expenses"
      }
    ]
  }

  render() {
    return (
      <div className="module-list">
        { this.state.modules.map(( module ) => (
         <React.Fragment key={module.path}>
          <Card {...module} />
          <Divider />
         </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ModuleList;
