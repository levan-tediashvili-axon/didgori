import React, { useMemo } from 'react'
import Link from 'next/link'
import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

export const Navigation = () => {
  const { t } = useTranslation()

  const pages = useMemo(
    () => [
      { id: 1, path: '#about', label: t('about') },
      { id: 2, path: '#calendar', label: t('calendar') },
      { id: 3, path: '#news', label: t('news') },
      { id: 4, path: '#gallery', label: t('gallery') },
      { id: 5, path: '#contact', label: t('contact') },
    ],
    [t],
  )

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      {pages.map((page, idx) => (
        <React.Fragment key={page.id}>
          <Link href={page.path}>
            <Typography variant="h5">{page.label}</Typography>
          </Link>
          {idx !== pages.length - 1 && (
            <Typography
              variant="h5"
              // fontSize={{ xs: '1rem', md: '1.5rem' }}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              \
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Stack>
  )
}
