import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Circle from './Circle';
import DiscreteSliderSteps from './Slider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default class AutoGrid extends Component {
  
  // handleChange = sliderValue => {
  //   console.log(sliderValue)
  // }
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} direction="column" justifyContent="flex-end" alignItems="center">
          <Grid item xs>
            <Item>
              <div>
                  <Circle size="40"/>
                  <Circle size="30"/>
                  <Circle size="20"/>
                  <Circle size="10"/>
                  <Circle size="20"/>
              </div>
              <div>
                  <Circle size="40"/>
                  <Circle size="20"/>
                  <Circle size="20"/>
                  <Circle size="20"/>
                  <Circle size="20"/>
              </div>
            </Item>
          </Grid>
          <Grid item xs >
            <Item>
              <div>
                  <DiscreteSliderSteps onChange="this"/>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}