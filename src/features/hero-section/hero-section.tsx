import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Navigation } from './navigation'
import { SocialLinks } from './social-links'
import { Carousel } from 'react-responsive-carousel'

const sliderImages = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
]

export const HeroSection = () => {
  return (
    <Stack sx={{ height: '100vh' }} alignItems="center" justifyContent="center">
      <Carousel
        autoPlay
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        width="100vw"
        infiniteLoop
      >
        {sliderImages.map((image) => (
          <Box
            key={image}
            height="100vh"
            width="100vw"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={image}
              fill
              alt="hero image"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
              }}
            />
          </Box>
        ))}
      </Carousel>

      <Stack
        justifyContent="center"
        spacing={6}
        pl={{ xs: 2, md: 10 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'saturate(80%)',
          background:
            'linear-gradient(5deg, #0F0F0F,#0F0F0F 15%,rgba(0,0,0,0.1)) rgba(0,0,0,0.5)',
        }}
      >
        <Stack>
          <Typography variant="h4" fontFamily="Macondo">
            Ensemble
          </Typography>
          <Typography variant="h1" fontFamily="Macondo">
            Didgori
          </Typography>
        </Stack>
        <Stack spacing={4}>
          <Navigation />
          <SocialLinks />
        </Stack>
      </Stack>
    </Stack>
  )
}
