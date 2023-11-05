import { Stack } from '@mui/material'
import React from 'react'
import { ContactInformation } from './contact-information'
import { ContactForm } from './contact-form'

export const ContactSection = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      width="100%"
      px={{ xs: 4, md: 10 }}
      py={5}
      id="contact"
      spacing={10}
      justifyContent="center"
      alignItems="center"
    >
      <ContactForm />
      <ContactInformation />
    </Stack>
  )
}
