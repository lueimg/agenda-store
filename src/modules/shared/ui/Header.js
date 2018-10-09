import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  root: {},
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Header extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };



  render() {

    const { classes } = this.props;
    
    const sideList = (
      <div className={classes.list}>
        <List component="nav">
        <ListItem button>
          <Link to="/expenses">Gastos</Link>
        </ListItem>
        <ListItem button>
          <Link to="/transactions">Transactions</Link>
        </ListItem>
      </List>
      </div>
    );


    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense" className="flex flex-justify-content-space">
            <IconButton
              className={this.props.classes.menuButton}
              onClick={this.toggleDrawer('left', true)}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              <Link to="/">Agenda Store</Link>
            </Typography>
            <Button color="inherit">
              {this.props.user && <Link to="/logout">Logout</Link>}
              {!this.props.user && <Link to="/logout">Login</Link>}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user })


export default withStyles(styles)(connect(mapStateToProps)(Header));
