import { Grid } from '@material-ui/core'
import React from 'react'
import ContactIcons from './ContactIcons'



function Contacts() {
  return (
    <Grid container
      justifyContent="flex-end"
      spacing={2}
      style={{
        padding: '8px 8px 0 0'
      }}
    >
      <ContactIcons />
    </Grid>
  )
}

export default Contacts
