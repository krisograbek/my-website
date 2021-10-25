import { Grid } from '@material-ui/core'
import React from 'react'
import ContactIcons from './ContactIcons'


function Footer() {
  return (
    <Grid container
      spacing={1}
    >
      <ContactIcons />
    </Grid>
  )
}

export default Footer
