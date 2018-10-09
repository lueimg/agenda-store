import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 500,
  },
};

class Footer extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    return (
      <BottomNavigation value={this.state.value} onChange={this.handleChange}>
        <BottomNavigationAction label="Lista" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Form" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Chart" value="nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}


export default Footer;