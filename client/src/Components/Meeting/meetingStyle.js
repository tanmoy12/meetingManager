const styles = theme =>  ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'column',
    padding: "8px 20%",
    marginTop: 12,
    [theme.breakpoints.down("sm")]: {
      padding: "8px 12px",
    }
  },
  
  btn: {
    [theme.breakpoints.down("sm")]: {
      padding: 8, minWidth: 36
    }
  },
  button: {
    marginBottom: 220
  }
});

export default styles;