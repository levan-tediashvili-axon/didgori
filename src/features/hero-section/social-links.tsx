import { Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Cloud, Facebook, Twitter, Youtube } from 'react-feather'

const socialLinks = [
  { id: 1, Icon: Facebook, url: 'https://facebook.com' },
  { id: 2, Icon: Youtube, url: 'https://youtube.com' },
  { id: 3, Icon: Twitter, url: 'https://twitter.com' },
  { id: 4, Icon: Cloud, url: 'https://soundcloud.com/didgori' },
]

export const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={2}>
      {socialLinks.map(({ id, Icon, url }) => (
        <Link key={id} href={url} target="_blank">
          <Icon />
        </Link>
      ))}
    </Stack>
  )
}
