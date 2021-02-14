import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div id="navbar" color="text.primary">
            <AppBar position="static" >
                <ToolBar>
                    <Typography variant="h5" color="inherit">
                        Book Trader
                    </Typography>
                    <ul className="inline-list">
                        <li>
                            <Link href="/">
                                Home
                                {/* <Button variant="text" size="large" color="primary" href="/"> Home</Button> */}
                            </Link>

                        </li>
                        <li>
                            <Link href="/login">
                                Login
                            {/* <Button size="large" color="primary" href="/login"> Login</Button> */}
                            </Link>
                        </li>
                        <li>
                            <Link href="/my/book-shelves">
                                <a>

                                My shelves
                                </a>
                                {/* <Button size="large" color="primary" href="/my/book-shelves"> My Shelves</Button> */}
                            </Link>
                        </li>
                    </ul>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;