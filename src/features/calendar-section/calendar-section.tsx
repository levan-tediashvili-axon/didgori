import React from 'react'
import { Stack, Typography } from '@mui/material'
import { EventCard } from './event-card'
import { upcomingEvents } from '@/mocks'

export const CalendarSection = () => {
  return (
    <Stack width="100%" px={{ xs: 4, md: 10 }} py={5} id="calendar">
      <Stack spacing={4} width="100%" justifyContent="center">
        <Typography
          variant="h3"
          textAlign="center"
          fontSize={{ xs: 24, md: 36 }}
        >
          Upcoming Events
        </Typography>
        <Stack alignItems="center">
          {upcomingEvents.map((event) => {
            return <EventCard key={event.eventId} event={event} />
          })}
        </Stack>
      </Stack>
    </Stack>
  )
}
