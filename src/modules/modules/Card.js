import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


export default class ModuleCard extends React.Component {

  static defaultProps = {
    name: "Gestion de Ahorro simple",
    description: "Ahorro Simple",
    path: "/expenses"
  };

  render() {
    return (
      <Card className="module-card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.name}
          </Typography>
          <Typography component="p">{this.props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={this.props.path}>Entrar</Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}
