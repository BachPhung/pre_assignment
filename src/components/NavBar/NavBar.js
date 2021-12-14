import React from "react"
import Container from '@mui/material/Container';
import { Typography, Toolbar, AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="nav">
                        <Typography className="nav-item"
                            variant="h5"
                            noWrap
                            component="div"
                        >
                        <Link className="nav-item" to="/">My Location</Link>
                        </Typography>
                        <Typography className="nav-item"
                            variant="h5"
                            noWrap
                            component="div"
                        >
                         <Link className="nav-item" to="/search">Search</Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default NavBar;