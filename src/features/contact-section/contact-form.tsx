import { Stack, TextField } from '@mui/material'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const defaultValues = { fullName: '', email: '', subject: '', message: '' }

export const ContactForm = () => {
  const { t } = useTranslation()
  const { handleSubmit, control } = useForm({ defaultValues })
  return (
    <form>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField {...field} placeholder={t('full_name')} />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField {...field} placeholder={t('email')} />
            )}
          />
        </Stack>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <TextField {...field} placeholder={t('subject')} />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder={t('message')}
              multiline
              rows={4}
            />
          )}
        />
      </Stack>
    </form>
  )
}
