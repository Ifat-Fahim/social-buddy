import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
     width: '250px',
     boxShadow: '2px 2px 3px 2px rgba(0, 0, 0, 0.2)',
     marginBottom: '15px',
     display: 'grid',
     background: '#383B53',
     color: '#fff',
     padding: '0.8em'
    },
    btn: {
     alignSelf: 'end'
    }
  });

function Post(props) {
    const {title, body, id} = props;
    const classes = useStyles();
  
    return (
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}  gutterBottom>
            Popular Post
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions className={classes.btn}>
          <Link to={`/post-detail/${id}`} ><Button variant="contained" color="primary" size="small">Learn More</Button></Link>
        </CardActions>
      </Card>
    );
}


export default Post;