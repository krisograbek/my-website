import { Grid } from '@material-ui/core'
import React from 'react'
import ContactIcons from './ContactIcons'


function Contacts() {
  return (
    <Grid container
      // alignContent="flex-end"
      alignItems="flex-end"
      justifyContent="flex-end"
      spacing={1}
    >
      <ContactIcons />
    </Grid>
  )
}

export default Contacts
