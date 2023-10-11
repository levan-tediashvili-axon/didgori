import React from 'react'
import Link from 'next/link'
import { Stack, Typography } from '@mui/material'

const pages = [
  { id: 0, path: '#home', label: 'Home' },
  { id: 1, path: '#about', label: 'About' },
  { id: 2, path: '#calendar', label: 'Calendar' },
  { id: 3, path: '#news', label: 'News' },
  { id: 4, path: '#gallery', label: 'Gallery' },
  { id: 5, path: '#contact', label: 'Contact' },
]

export const Navigation = () => {
  return (
    <Stack direction="row" spacing={2}>
      {pages.map((page, idx) => (
        <React.Fragment key={page.id}>
          <Link href={page.path}>
            <Typography variant="h5">{page.label}</Typography>
          </Link>
          {idx !== pages.length - 1 && <Typography variant="h5">\</Typography>}
        </React.Fragment>
      ))}
    </Stack>
  )
}
