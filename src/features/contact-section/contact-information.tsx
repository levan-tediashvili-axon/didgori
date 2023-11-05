import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Mail, AtSign, Phone, Map } from 'react-feather'

const contactInfo = [
  { id: '1', Icon: AtSign, text: 'contact@didgorelebi.ge' },
  { id: '2', Icon: Phone, text: '+995 (123) 123-456' },
  { id: '3', Icon: Map, text: '12 Shota Rustaveli ave, Tbilisi, Georgia ' },
]

export const ContactInformation = () => {
  return (
    <Stack spacing={3}>
      {contactInfo.map(({ id, Icon, text }) => (
        <Stack key={id} direction="row" spacing={1}>
          <Icon />
          <Typography>{text}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}
