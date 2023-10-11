import { Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Cloud, Facebook, Instagram, Twitter, Youtube } from 'react-feather'

const socialLinks = [
  { id: 1, Icon: Facebook, url: 'https://facebook.com' },
  { id: 2, Icon: Youtube, url: 'https://www.youtube.com/didgorifolk' },
  {
    id: 3,
    Icon: Twitter,
    url: 'https://open.spotify.com/artist/6ydNOpPxEWBSCDojTY1kf6',
  },
  { id: 4, Icon: Instagram, url: 'https://www.instagram.com/didgorifolk' },
  { id: 5, Icon: Cloud, url: 'https://soundcloud.com/didgori' },
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
