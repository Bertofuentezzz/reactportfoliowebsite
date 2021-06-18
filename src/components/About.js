import React from 'react'
import { Grid, Avatar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

//About component will just give some info about me and how I started programming, 
//and what I intend to do with programming. This could probably be changed to a contact us page, or maybe 
//home component will be made

//Changes made, About page will be turn into Contact Me page which will include my personal info, links to relevant
//social media, and maybe a contact form that they can submit to directly.

//Styles used for image size 
const useStyles = makeStyles((theme) => ({
    largeAvatar: {
        width: theme.spacing(50),
        height: theme.spacing(50),
    },
    containerBlackBackgroundColor: {
        backgroundColor: '#424242'
    },
    containerYellowBackgroundColor: {
        backgroundColor: 'yellow'
    }
}));

const About = () => {

    const classes = useStyles();

    return (
        //Big outer container
        <Grid container>
            <Grid container item justify='center' xs={12} sm={6} >
                <Grid container justify='center' alignItems='center' direction='column'>
                    <Box marginTop='50px'>
                        <Avatar className={classes.largeAvatar} alt='Humberto Fuentes' src='https://lh3.googleusercontent.com/CW7vxjIZsS9W_VDBYrM59TJsl3XxqeTDqsp_gQZbAC52i1u9RhYFOnYy2UlA9z5pkm1r5fike3OpYf2CUR8iI7bODkDF7gj_wjvurwlXqq3-Mi2LkpkbzKZohekwfwv4HrVPjatJMMSfL-ojm6zrgJKfmttNg9sb23wr3GBEMNZn-8rwbZTn2YXgv-JbcV-pMWwZcZV7UVflQQTtg1p8Js1AkO-0GEEeXqDhJeCu0nACc11GC2w9MxScdxYynpimPt4W5kFP_t1SBAyCSgJKndwfVe3dZMakoEP_axX062hEGYooVupUmf-PzxVWi-Ev9p9xjCPglr1hVrDaJpaFrYPmDB7whwPfI4aX7RLrQKPDUnnB-LBLbc3KzC6wWQarm2lgOQRLja-xg0KzxVGzOOBUpdMPFvsmSY090-AIKlk9fpExJuprExMZBMpJ3VBxD5VlUlfrzoTp5eSLg0qmlOJtLnKA05Ud1DDAoffWAwNdYR-2AByPAzuW5Da3RDVH40AmtS9slgXF2B4reOuxClaBACR0o9Cmgp_7dUrXg9kTQDFec38KKfMRdcl5U0voEOq1aWjql1vheiYLWWsQY-_Q9qiUOovv4lhsrwv_tU7TcJAXY4irVw0ZyOwgdGUPZ3OAHga-vCqNBs9909CADtCxtv2Ah2NISxOrUegH_5Kd0hQdk3DeH8iKOAi6gKXoA3ijXF-zUHwEdKZO=w650-h866-no?authuser=0'/>
                    </Box>
                    <Box marginTop='10px' justifyContent='center'>
                        <Typography>Humberto Fuentes Martines</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container item justify='center' xs={12} sm={6} className={classes.containerYellowBackgroundColor}>
                <Grid container justify='center' alignItems='center' direction='column'>
                    <Box bgcolor='yellow'>
                        <Typography color='white'>Contact Me</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About
