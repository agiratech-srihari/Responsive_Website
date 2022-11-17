import React from 'react'

import { Grid } from '@mui/material'
import { Container } from '@mui/system'
// import Griditem from './Griditem'
import GridEle from './GridEle'
function GridDiv() {
    return (
        <Container maxWidth='lg'>
          <h5 style={{fontSize:'2.5rem',textAlign:'left',marginTop:'2rem'}}>Labs</h5>
            <Grid item xs={12} style={{marginBottom:'2.5rem'}}>
                <Grid container justifyContent="space-between">
                    {[0, 1, 2, 3, 4, 5].map((value) => (
                        <Grid key={value} item style={{marginTop:'5rem'}}>
                            {/* <Griditem/> */}
                            <GridEle/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}
export default GridDiv