import Head from "next/head";
import * as React from 'react';
import { ButtonGroup, Divider, Menu, MenuItem, Paper, Typography, Button, Box, Toolbar, AppBar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "../data/companyInfo";
import MenuIcon from '@mui/icons-material/Menu';
import { Opacity } from "@mui/icons-material";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Paper sx={{ width: 400, maxWidth: '100%' }}>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                id='menu'
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                
                <Link href='/'><a>
                    <MenuItem>
                        <Typography>
                            Home
                        </Typography>
                    </MenuItem>
                </a></Link>

                <Divider sx={{ my: 0.5 }} />

                <Link href='/about'><a>
                    <MenuItem>
                        <Typography>
                            About Us
                        </Typography>
                    </MenuItem>
                </a></Link>

                <Divider sx={{ my: 0.5 }} />

                <Link href='/join'><a>
                    <MenuItem>
                        <Typography>
                            Drive For Us
                        </Typography>
                    </MenuItem>
                </a></Link>

                <Divider sx={{ my: 0.5 }} />

                <Link href='/government-contracting'><a>
                    <MenuItem>
                        <Typography>
                            Government Contracting
                        </Typography>
                    </MenuItem>
                </a></Link>

                <Divider sx={{ my: 0.5 }} />

                <Link href='/contact'><a>
                    <MenuItem>
                        <Typography>
                            Contact
                        </Typography>
                    </MenuItem>
                </a></Link>
            </Menu>
        </Paper>
        
    );


    return (
        <div>
            <Head>
                {/* Metadata */}
                <meta name="description" content="Professional dispatch and trucking services based in southwest Georgia" />
                <meta name="keywords" content="Designed by Bivens Blueprint LLC, dispatching, trucking, Georgia" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="canonical" href="https://bivensblueprint.com" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" variant="dense" sx={{ backgroundColor: { xs: '#000000', md: 'transparent'}, paddingY: 1 }}>
                    <Toolbar>
                        <Image 
                            className="Company Logo"
                            src={companyInfo.image}
                            layout="intrinsic"
                            height={80}
                            width={80}
                            alt="Company Logo"
                        />

                        <Box sx={{ flexGrow: 1 }} />
                        
                        <Box>
                            <ButtonGroup variant="text" size="large">
                                <Box sx={{ display: {xs: 'none', md: 'flex'}}}>
                                    <Link href="/"><Button sx={{color: '#FFF', '&:hover': { color: '#FFC947'}}}><a>
                                        Home
                                    </a></Button></Link>
                                    
                                    <Link href="/about">
                                        <Button sx={{color: '#FFF', '&:hover': { color: '#FFC947'}}}><a>
                                            About Us
                                        </a></Button>
                                    </Link>

                                    <Link href="/join">
                                        <Button sx={{color: '#FFF', '&:hover': { color: '#FFC947'}}}><a>
                                            Drive For Us
                                        </a></Button>
                                    </Link>
                                
                                    {/* <Link href="/services">
                                        <Button sx={{color: '#FFF', '&:hover': { color: '#FFC947'}}}>
                                        <a>    
                                            Services
                                        </a>   
                                        </Button>
                                    </Link>  */}

                                    <Link href="/government-contracting">
                                        <Button sx={{color: '#FFF', '&:hover': { color: '#FFC947'}}}>
                                        <a>    
                                            Government Contracting
                                        </a>   
                                        </Button>
                                    </Link> 

                                    <Button sx={{color: '#FFF', '&:hover': { color: '#FFC947'}}}>
                                        <Link href="/contact"><a>    
                                            Contact
                                        </a></Link>    
                                    </Button>
                                
                                </Box>
                            </ButtonGroup>

                            <Box sx={{ textAlign: 'end', my: 0.5 }}>
                                <Link href="/docs/RT Capability Statement 2025.pdf" download><a>
                                    <Button variant="contained" startIcon={<span className="material-icons">download</span> }>
                                        Capability Statement
                                    </Button>
                                </a></Link>
                            </Box>
                        </Box>
                        
                        <Box sx={{ display: { xs: 'flex', md: 'none'}, color: "#FFF" }}>
                            <MenuIcon 
                                onClick={handleMenuOpen}
                                size="large"
                            />
                        </Box>
                    </Toolbar>

                    
                </AppBar>
                
            </Box>
            {renderMenu}
        </div>
    );
}

export default Header;