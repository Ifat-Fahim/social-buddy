import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
     width: '350px',
     boxShadow: '2px 2px 3px 2px rgba(0, 0, 0, 0.2)',
     marginBottom: '15px',
     background: '#383B53',
     color: '#fff',
     padding: '1em',
     margin: '0 auto',
     marginTop: '80px',
     display: 'grid', 
    },
  });

function PostDetail() {
    const{postid} = useParams();
    console.log(postid)
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(res => res.json())
        .then(data => {
            console.log(posts);
            return setPosts(data)
        });
    }, [])

    const[comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?PostId=${postid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data.slice(0, 5)))
    }, [])

    const classes = useStyles();
    return (
        
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title}  gutterBottom>
                        Popular Post
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {posts.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {posts.body}
                    </Typography><br/>
                    <small>Comments:</small><br/>
                    {
                        comments.map(comment => {

                            return (
                                <div className="comment-container">
                                    <div className="user-info">
                                        <p>Name: {comment.name} </p>
                                        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="User" />
                                    </div>
                                    <p> {comment.body} </p>
                                </div>
                            )
                        })
                    }
                </CardContent>
      </Card>
       
    );
}

export default PostDetail;