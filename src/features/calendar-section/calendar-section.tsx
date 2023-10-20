import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { EventCard } from './event-card'
import { pastEvents, upcomingEvents } from '@/mocks'

export const CalendarSection = () => {
  const [isAllVisible, setIsAllVisible] = useState(false)
  const visiblePastEvents = isAllVisible ? pastEvents : pastEvents.slice(0, 5)
  return (
    <Stack
      width="100%"
      px={{ xs: 4, md: 10 }}
      py={5}
      id="calendar"
      spacing={10}
    >
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
      <Stack spacing={4} width="100%" justifyContent="center">
        <Typography
          variant="h3"
          textAlign="center"
          fontSize={{ xs: 24, md: 36 }}
        >
          Past Events
        </Typography>
        <Stack alignItems="center">
          {visiblePastEvents.map((event) => {
            return <EventCard key={event.eventId} event={event} />
          })}
          <Button onClick={() => setIsAllVisible((prevState) => !prevState)}>
            {isAllVisible ? 'Show less' : 'Show more...'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
