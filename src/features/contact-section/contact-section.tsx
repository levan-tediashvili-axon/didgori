import { Stack, Typography } from '@mui/material'
import React from 'react'
import { ContactInformation } from './contact-information'
import { ContactForm } from './contact-form'
import { useTranslation } from 'next-i18next'

export const ContactSection = () => {
  const { t } = useTranslation()
  return (
    <Stack px={{ xs: 4, md: 10 }} py={5} id="contact" spacing={10}>
      <Typography variant="h3" textAlign="center" fontSize={{ xs: 24, md: 36 }}>
        {t('contact')}
      </Typography>
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        width="100%"
        spacing={10}
        justifyContent="center"
        alignItems="center"
      >
        <ContactForm />
        <ContactInformation />
      </Stack>
    </Stack>
  )
}
