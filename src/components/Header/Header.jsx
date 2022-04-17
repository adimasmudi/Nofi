import {React, useEffect, useState} from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';

// import material UI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import useStyle from './styles';


const Header = ()=>{
    const classes = useStyle();
    return(
        <Grid container spacing={2} className={classes.header}>
            <Grid Item xs={6}>
                <Typography variant="h3" className={classes.productName}>
                    Nofi.
                </Typography>
                {/* <h1 className={classes.productName}>Nofi<span style={{color:'white'}}>.</span></h1> */}
            </Grid>
            <Grid Item xs={6}>
                <TextField
                    id="filled-search"
                    label="Cari Film Kesukaan"
                    type="search"
                    className={classes.searchField}
                    
                />
                <Button 
                    variant="contained" 
                    endIcon={<SearchIcon />} 
                    size="medium"
                    className={classes.searchBtn}
                    >
                    Cari Film
                </Button>
            </Grid>
        </Grid>
    )
}

export default Header;