import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { Fade, Slide, Stack, Typography } from '@mui/material'
import { EventDate } from './event-date'
import { ArrowRight } from 'react-feather'
import { IEvent } from '@/mocks'

type Props = { event: IEvent }

export const EventCardDesktop = ({ event }: Props) => {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)

  return (
    <Link
      href={`/event-details/${event.eventId}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: '700px',
          borderBottom: '1px solid',
          py: 3,
        }}
        spacing={4}
      >
        <EventDate date={event.date} />
        <Stack direction="row" alignItems="center" spacing={1} flex={1}>
          <Typography variant="h5">{event.name} </Typography>

          <Fade in={isHovering}>
            <Typography>/</Typography>
          </Fade>

          <Stack overflow="hidden">
            <Slide
              direction="right"
              in={isHovering}
              container={containerRef.current}
            >
              <Typography>{event.city} </Typography>
            </Slide>
          </Stack>
        </Stack>
        <Stack pr={1}>
          <Fade in={isHovering}>
            <ArrowRight />
          </Fade>
        </Stack>
      </Stack>
    </Link>
  )
}
