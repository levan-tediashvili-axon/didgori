import { Stack, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const defaultValues = { fullName: '', email: '', subject: '', message: '' }

export const ContactForm = () => {
  const { handleSubmit, control } = useForm({ defaultValues })
  return (
    <form>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField {...field} placeholder="Full name" />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextField {...field} placeholder="Email" />}
          />
        </Stack>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => <TextField {...field} placeholder="Subject" />}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField {...field} placeholder="Message" multiline rows={4} />
          )}
        />
      </Stack>
    </form>
  )
}
