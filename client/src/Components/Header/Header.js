import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from "@material-ui/icons/Menu";

import styles from './headerStyle';

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.setState({ anchorEl: null });
    this.props.logout();
  };

  render() {
    const { classes, tender } = this.props;
    const { anchorEl } = this.state;
    let button = <Button
                  href="/"
                  color="inherit"
                  style={{color: '#FFF', fontFamily: 'Dekko', fontSize: 36, textTransform: 'none', padding: 4}}
                  
                  >
                  MeetGo
              </Button>
    if(tender){
      button = <Button
                href="/tenders"
                color="inherit"
                style={{color: '#FFF', fontFamily: 'Dekko', fontSize: 36, textTransform: 'none', padding: 4}}
                
                >
                BigTender
              </Button>
    } 

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.bar}>
          <Toolbar style={{padding: 0}}>
              
              <div style={{flex: 1}}>
                {button}
              </div>
              <div>
                <div style= {{display: 'flex'}}>
                  <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    color="inherit" 
                    onClick={this.handleMenu}
                  >
                    <MenuIcon style={{marginLeft: 0}}/>
                  </Button>
                  
                </div>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={() => this.props.history.push("/")}>MeetGo</MenuItem>
                  <MenuItem onClick={() => this.props.history.push("/tenders")}>BigTender</MenuItem>
                  <MenuItem onClick={this.handleLogout}>Logout - 
                      <Typography variant="display1" style={{color: '#263238', fontSize: 12}} >
                           {" " + this.props.name} 
                      </Typography>
                  </MenuItem>
                </Menu>
              </div>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);