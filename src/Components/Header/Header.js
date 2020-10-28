import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: '30px',
      cursor: 'pointer',
    },
  }));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                   <Link to="/" style={{color: '#fff', textDecoration:'none'}}>Home</Link>
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;