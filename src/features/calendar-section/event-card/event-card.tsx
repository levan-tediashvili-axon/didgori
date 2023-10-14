import { useMediaQuery, useTheme } from '@mui/material'
import { EventCardDesktop } from './event-card-desktop'
import { EventCardMobile } from './event-card-mobile'
import { IEvent } from '../calendar-data'

type Props = { event: IEvent }

export const EventCard = ({ event }: Props) => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  if (isLargeScreen) {
    return <EventCardDesktop event={event} />
  }

  return <EventCardMobile event={event} />
}
