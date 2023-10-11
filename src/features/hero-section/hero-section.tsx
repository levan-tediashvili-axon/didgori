import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Navigation } from './navigation'
import { SocialLinks } from './social-links'

export const HeroSection = () => {
  return (
    <Stack
      sx={{ height: '100vh', background: './images/1.jpeg' }}
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src="/images/4.jpeg"
        fill
        alt="hero image"
        style={{ background: 'rgba(0,0,0,0.6)', objectFit: 'cover' }}
      />
      <Stack
        justifyContent="center"
        spacing={4}
        sx={{
          width: '100%',
          height: '100%',
          backdropFilter: 'saturate(80%)',
          background:
            'linear-gradient(60deg, rgba(0,0,0,0.9),rgba(0,0,0,0.1)) rgba(0,0,0,0.7)',
        }}
      >
        <Navigation />
        <SocialLinks />
      </Stack>
    </Stack>
  )
}
