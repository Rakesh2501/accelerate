import { Grid, Typography,Paper, Card } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import {Doughnut} from  'react-chartjs-2'
import {withStyles} from '@material-ui/core/styles'


const state = {
    labels: ['Health','Misc Health','Other','Retirement'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81]
      }
    ]
  }

const styles=(theme)=>({

    paper:{
        // padding:15,
        width:'80%',
        height:300,
        backgroundColor:'#e3f2fd',
        padding:theme.spacing(3)
    },
    doughnut:{
        width:'80%',
        height:'70%',
        paddingTop:25
    }

})


class Dashboard extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        const {classes,themes} = this.props

        return(
            <div style={{ display: 'flex', flexDirection: 'row' }} className={clsx(classes.content, { [classes.contentShift]: this.props.drawerOpen })}>
                <Grid container justify="space-around" spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs = {12}>
                        <Typography>Welcome to your personalized benefit dashboard, Anna</Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h3">Dashboard</Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} spacing={2}>
                        <Paper className={classes.paper} >
                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                                <div style={{ flexGrow: 9 }}>
                                    <Typography variant="h5">Benefits Overview</Typography>
                                </div>
                                <div style={{ flexGrow: 1, paddingTop: 10 }}>
                                    <Typography style={{ color: 'blue' }}>Edit</Typography>
                                </div>
                            </div>
                            <div className={clsx(classes.doughnut)}>
                                <Doughnut
                                    data={state}
                                    options={{
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Paper className={classes.paper}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
                                <div style={{ flexGrow: 9 }}>
                                    <Typography variant="h5">Contributions Overview</Typography>
                                </div>
                                <div style={{ flexGrow: 1, paddingTop: 10 }}>
                                    <Typography style={{ color: 'blue' }}>Edit</Typography>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom:5 }}>
                                <div style={{ fontSize: 13 }}>
                                    <p>TOTAL BALANCE</p>
                                </div>
                                <div style={{ marginTop: -20 }}>
                                    <h4>$0</h4>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 5 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', marginRight: 60 }}>
                                    <div style={{ fontSize: 13 }}>
                                        <p>TOTAL PRUDENTIAL ASSETS</p>
                                    </div>
                                    <div style={{ marginTop: -20 }}>
                                        <h4>$0</h4>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: 13 }}>
                                        <p>CONNECTED ACCOUNT BALANCE</p>
                                    </div>
                                    <div style={{ marginTop: -20 }}>
                                        <h4>$0</h4>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', marginRight: 45 }}>
                                    <div style={{ fontSize: 13 }}>
                                        <p>TOTAL YEARLY CONSUMPTION</p>
                                    </div>
                                    <div style={{ marginTop: -20 }}>
                                        <h4>$0</h4>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: 13 }}>
                                        <p>RISK ATTITUDE</p>
                                    </div>
                                    <div style={{ marginTop: -20 }}>
                                        <h4>MODERATE</h4>
                                    </div>
                                </div>
                            </div>

                        </Paper>
                    </Grid>

                    {/* goals */}

                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(Dashboard)