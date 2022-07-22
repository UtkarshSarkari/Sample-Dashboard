import React from 'react';
import './Profile.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image from '../images/profile.jpg'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function Profile() {
    const [value] = React.useState(2);
    return (
        <div className="containerProfile">
            <div className="one1"></div>
            <div className="two2"></div>
            <div className="float">
                <div className="floatone">
                    <Card className="cards" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Anil Dubey
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit Profife
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="floattwo">
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Typography component="legend">Your Ratings</Typography>
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                    <div>
                        POSTS
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10"></div>
                        </div>
                        PAGES
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="10"></div>
                        </div>
                        COMMENTS
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="10"></div>
                        </div>
                        ACTIVITY
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
