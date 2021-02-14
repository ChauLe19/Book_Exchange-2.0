import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from 'next/link'

const NavBar = () => {
    return (
        <div id="navbar" color="text.primary">
            <CssBaseline/>
            <AppBar position="static" >
                <ToolBar style={{margin: 0}}>
                    <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
                        Book Trader
                    </Typography>
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
        </div>
    )
}

export default NavBar;