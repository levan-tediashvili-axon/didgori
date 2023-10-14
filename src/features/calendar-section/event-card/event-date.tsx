import { Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'

type Props = { date: Date }

export const EventDate = ({ date }: Props) => {
  const day = dayjs(date).format('DD')
  const weekDay = dayjs(date).format('ddd')
  const month = dayjs(date).format('MMM')
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h4">{day}</Typography>
      <Stack>
        <Typography color="GrayText">{weekDay}</Typography>
        <Typography>{month}</Typography>
      </Stack>
    </Stack>
  )
}
