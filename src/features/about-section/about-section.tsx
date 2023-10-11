import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const aboutTexts = [
  'The award winning Didgori ensemble has been performing internationally since 2004 and has toured France, UK, Switzerland, Israel, Poland, Russia, Turkey, Uzbekistan, the Czech Republic, Latvia and Canada. Declared an Intangible Cultural Heritage of Humanity by UNESCO in 2001, the millennial old Georgian polyphonic singing tradition, with its close harmonies and untempered scales, is often described as transformatively visceral. It features 3-part singing in a variety of styles, from hauntingly melismatic lyrical genres to exploding counterpoint.',
  'Didgori are masters of a variety of Georgian musical styles, the wide variety of which reflects the diverse and complex landscape that has housed the Georgian people for thousands of years. Didgori is dedicated to the traditions of their ancestors through mastery and popularization of Georgian polyphonic folk songs and chants, and to the hope that their efforts will inspire future generations. The name, Didgori, honours a historical battle in 1121 that helped reunite Georgia and ushered in a period of growth in arts and culture.',
  '"Georgian Chanting" foundation awarded Didgori Ensemble for Contribution in Popularization of Georgian music.',
  'Special prize of Samarkand City Mayor - 10th International Music Festival "Sharq Taronalari".',
  'Winners of National Folklore Festival of Georgia 2015-2016 – First Place.',
]

export const AboutSection = () => {
  return (
    <Stack
      id="about"
      direction={{ xs: 'column', md: 'row' }}
      height="100vh"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      px={{ xs: 4, md: 10 }}
    >
      <Box
        position="relative"
        width={{ xs: '100%', md: '50%' }}
        height="50%"
        overflow="hidden"
      >
        <Image
          src="/images/1.jpeg"
          alt="image"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
      <Stack width={{ xs: '100%', md: '50%' }} spacing={1}>
        {aboutTexts.map((text, idx) => (
          <Typography key={idx}>{text}</Typography>
        ))}
      </Stack>
    </Stack>
  )
}
