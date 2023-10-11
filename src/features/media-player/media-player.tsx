import React, { useEffect, useState } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import { Pause, Play } from 'react-feather'

export const MediaPlayer = () => {
  const [showPlayer, setShowPlayer] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    setAudio(new Audio('./audio/dideba.mp3'))
    // only run once on the first render on the client
  }, [])

  if (audio !== null) {
    audio.addEventListener('canplay', () => {
      setShowPlayer(true)
    })
    audio.addEventListener('play', () => setIsPlaying(true))
    audio.addEventListener('pause', () => setIsPlaying(false))
  }

  return (
    <Box position="fixed" sx={{ bottom: 0, right: 0, zIndex: 100 }}>
      {audio && showPlayer && (
        <Stack direction="row" spacing={1} p={2}>
          <IconButton onClick={audio.play.bind(audio)}>
            <Play color={!isPlaying ? '#FFE4D6' : '#EFDF50'} />
          </IconButton>
          <IconButton onClick={audio.pause.bind(audio)}>
            <Pause color={isPlaying ? '#FFE4D6' : '#EFDF50'} />
          </IconButton>
        </Stack>
      )}
    </Box>
  )
}
