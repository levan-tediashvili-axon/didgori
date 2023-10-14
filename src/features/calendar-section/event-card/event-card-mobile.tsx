import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { Fade, Slide, Stack, Typography } from '@mui/material'
import { EventDate } from './event-date'
import { ArrowRight, Calendar, MapPin } from 'react-feather'

import dayjs from 'dayjs'
import { IEvent } from '@/mocks'

type Props = { event: IEvent }

export const EventCardMobile = ({ event }: Props) => {
  return (
    <Link href={`/event-details/${event.eventId}`} style={{ width: '100%' }}>
      <Stack
        sx={{
          width: '100%',
          borderBottom: '1px solid',
          py: 2,
        }}
        spacing={2}
      >
        <Typography variant="h4" fontSize={20}>
          {event.name}{' '}
        </Typography>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Stack direction="row" spacing={1}>
            <Calendar size={13} />
            <Typography variant="caption">
              {dayjs(event.date).format('dddd, DD MMMM YYYY')}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <MapPin size={13} />
            <Typography variant="caption">{event.city}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  )
}
