'use client'
import React from 'react'
import { pastEvents, upcomingEvents } from '@/mocks'
import Image from 'next/image'
import { Box, Container, Stack, Typography } from '@mui/material'
import { ArrowLeft, Calendar, MapPin } from 'react-feather'
import { useRouter } from 'next/router'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import dayjs from 'dayjs'

const events = pastEvents.concat(upcomingEvents)

type Props = {
  eventId: string
}

export const EventDetails = ({ eventId }: Props) => {
  const event = events.find((currentEvent) => currentEvent.eventId === eventId)
  const router = useRouter()

  if (event === undefined) {
    return <p>Not found, go back</p>
  }

  const eventDate = dayjs(event.date).format('dddd, DD MMMM YYYY')
  const startTime = dayjs(event.date).format('HH:mm')

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        py={2}
        sx={{ cursor: 'pointer' }}
        onClick={router.back}
      >
        <ArrowLeft />
        <Typography>Go back</Typography>
      </Stack>
      <Stack alignItems="center" spacing={1}>
        <Stack width="600px" height="400px" position="relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Calendar />
          <Typography>{`${eventDate} at ${startTime}`}</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <MapPin />
          <Typography>{`${event.venueName}, ${event.city}`}</Typography>
        </Stack>
        <Stack width="100%" mt={4}>
          <Typography variant="h2" textAlign="center">
            {event.name}
          </Typography>
          <Typography>{event.description}</Typography>
        </Stack>
      </Stack>
    </Container>
  )
}
