import { Grid } from '@material-ui/core'
import React from 'react'
import ContactIcons from './ContactIcons'


function Footer() {
  return (
    <Grid container
      justifyContent="flex-end"
      spacing={2}
    >
      <ContactIcons />
    </Grid>
  )
}

export default Footer
