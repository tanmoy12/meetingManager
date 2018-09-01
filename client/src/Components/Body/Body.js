import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import DateRadio from './DateRadio';
import CardBox from '../Card/CardBox';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: "column",
    padding: "16px 20%",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 12px",
    }
  },
});


class Body extends Component {

  render() {
  	const { classes } = this.props;

    return (
      <div className={classes.container}>
        <DateRadio/>
        <CardBox/>
      </div>
    );
  }
}

export default withStyles(styles)(Body);
