import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from '@material-ui/core';



class NavBar extends React.Component {
    
    render() {
      return (
        <>
        <AppBar position="static" style={{margin: 0}}>
            <ToolBar>
                <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
                    Book Trader
                </Typography>
                <IconButton color="inherit" onClick={this.props.toggleTheme}>
                    <Brightness4Icon/>
                </IconButton>
                <Link href="/" passHref>
                    <Button variant="contained" color="primary" size="large" disableElevation>Home</Button>
                </Link>
                <Link href="/login" passHref>
                    <Button variant="contained" color="primary" size="large" disableElevation>Login</Button>
                </Link>
                <Link href="/my/book-shelves">
                <Button variant="contained" color="primary" size="large" disableElevation>My Shelves</Button>
                </Link>
            </ToolBar>
        </AppBar>
        </>
      )
    }
  }



export default NavBar;