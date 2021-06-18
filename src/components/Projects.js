import React from 'react'
import { Grid, Card, CardContent, CardMedia, CardActions, Typography, Button } from '@material-ui/core';
import Testpic from '../Images/Testpic.jpg';

// For Projects component, grid layout with projects in a sort of cardview fasion, each will display title, 
// coding language used, and the time frame of when it was made (optional). Think of like netflix's grid.

//TODO: Fix the typography for card text, it looks weird and out of place. You may have to use makeStyles or make a 
//a new themeprovider to provide that specific theme for that part
//Links still do not lead to any projects, just to dummy links.
const Projects = () => {

    return (
        <Grid container>
            {/* First Card Displayed: React Form Project */}
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia 
                        style={{
                            height: 0, 
                            paddingTop: '56%'
                        }}
                        image={Testpic}
                        title="React Form Project"
                    />
                    <CardContent>
                        <Typography>React Form</Typography>
                        <Typography>React js, Bootstrap, HTML, CSS</Typography>
                        <Typography>Summer 2021</Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button color="secondary" size="small">Check it out!</Button> */}
                        <a
                        href="http://www.google.com/"
                        target="_blank"
                        rel="noreferrer">
                            <Button
                            color="secondary"
                            size="small">
                                Check it out!
                            </Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>

            {/* 2nd Card being displayed */}
            <Grid item xs={12} sm={6} md={4}>
                    <CardMedia/>
                    <CardContent/>
                    <CardActions></CardActions>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                    <CardMedia/>
                    <CardContent/>
                    <CardActions></CardActions>
            </Grid>
        </Grid>
    )
}

export default Projects
