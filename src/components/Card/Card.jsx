import {React, useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import noImage from '../../assets/images/no_image.png';

import { Grid } from '@material-ui/core';

export default function MediaCard({data}) {

  return (
    <Card sx={{ width: 230,height:350,margin:'16px' }}>
      <CardMedia
        component="img"
        height="250"
        image={data.Poster === 'N/A' ? noImage : data.Poster}
        alt={data.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {data.Title}
        </Typography>
        <Grid container spacing={2}>
            <Grid Item xs={4}>
                <Typography variant="body2" color="text.secondary" style={{textAlign:'left',margin:'15px 0 0 15px'}}>
                    {data.Type}
                </Typography>
            </Grid>
            <Grid Item xs={8}>
                <Typography variant="body2" color="text.secondary" style={{textAlign:'right',margin:'15px 15px 0 0'}}>
                    {data.Year}
                </Typography>
            </Grid>
        </Grid>
      </CardContent>
      
    </Card>
  );
}