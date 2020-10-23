import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {AppBar, Tabs, Toolbar,Typography,Tab, Link,Drawer, IconButton, Divider, ListItem, ListItemText,List} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {createMuiTheme,ThemeProvider,makeStyles,withStyles} from '@material-ui/core/styles'
import { ChevronLeft } from '@material-ui/icons';
import clsx from 'clsx';
import Dashboard from './components/Dashboard'


const themes = createMuiTheme({
  palette:{
    primary:{
      main:'#2196f3',
    },
    secondary:{
      main:'#e3f2fd'
    }
  }
})

const styles = (theme) =>({
  drawerWidth:{
    width:160
  },
  topDivider:{
    height:63
  },
  appBar:{
    transition:theme.transitions.create(['margin','width'],{easing:theme.transitions.easing.sharp, 
      // duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift:{
    width:`calc(100% - 160px)`,
    marginLeft:160,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      // duration: theme.transitions.duration.enteringScreen,
    })
  },
  content:{
    marginLeft:180,
    marginRight:40,
    marginTop:80,
    transition:theme.transitions.create(['margin','width'],{
      easing:theme.transitions.easing.sharp,
      // duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentShift:{
    marginLeft:200,
    width:`100% - 160px`,
    transition: theme.transitions.create(['margin','width'], {
      easing: theme.transitions.easing.easeOut,
      // duration: theme.transitions.duration.enteringScreen,
    })
  },
  paper:{
    background:'#e3f2fd'
  }
})

class App extends React.Component{

  constructor(){
    super()
    this.state={
      drawerOpen:false
    }
  }

  handleDrawer=()=>{
    this.setState({drawerOpen:!this.state.drawerOpen})
  }

  render(){

    const { classes } = this.props;

    return(
      <React.Fragment>
        <ThemeProvider theme={themes}>
          <Router>
            <AppBar position="fixed" color="primary" className={clsx(classes.appBar,{[classes.appBarShift]:this.state.drawerOpen})}>
              <Toolbar>
                <IconButton color="inherit" onClick={this.handleDrawer} edge="start">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h5">Vanguard</Typography>
                <Tabs>
                  <Tab label="Participant" />
                </Tabs>
              </Toolbar>
            </AppBar>

            <Drawer variant="persistent" anchor="left" open={this.state.drawerOpen} classes={{paper:classes.paper}}>
              <div className={clsx(classes.drawerWidth, classes.topDivider)} style={{ display: 'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                
                  <IconButton onClick={this.handleDrawer}>
                    <ChevronLeft />
                  </IconButton>
                
              </div>
                <Divider/>
                <List>
                  <ListItem button>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemText>Accounts</ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemText>Activity</ListItemText>
                  </ListItem>
                </List>
            </Drawer>

            <Route path='/' render={()=><Dashboard classes={classes} theme = {themes} drawerOpen={this.state.drawerOpen}/>} />
            
          </Router>
        </ThemeProvider>
      </React.Fragment>
    )
  }

}

export default withStyles(styles)(App);
// export default App;
