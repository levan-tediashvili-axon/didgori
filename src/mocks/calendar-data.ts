export type IEvent = {
  eventId: string
  imageUrl: string
  date: Date
  name: string
  description: string
  venueName: string
  city: string
  lat: number
  lng: number
}

export const upcomingEvents: Array<IEvent> = [
  {
    eventId: '0001',
    imageUrl:
      'https://madloba.info/media/images/Tbilisi-Center-Music-02.2e16d0ba.fill-720x405.jpg',
    date: new Date('December 25, 2023 19:00:00'),
    name: 'Georgian catholics rave eve',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    venueName: 'Tbilisi state concert hall',
    city: 'Tbilisi',
    lat: 41.70772139000602,
    lng: 44.78565391204908,
  },
  {
    eventId: '0002',
    imageUrl:
      'https://scontent.ftbs10-1.fna.fbcdn.net/v/t45.1600-4/382270297_6498940192219_378217979394933776_n.jpg?stp=cp0_dst-jpg_p600x600_q75_spS444&_nc_cat=103&ccb=1-7&_nc_sid=528f85&_nc_ohc=EG_HVXTZUVcAX_rxmYr&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfDjw2TsFoOfz-yWxjGDqcVo6itQlo_5D_qqJ8KIjxWojQ&oe=653029D2',
    date: new Date('December 28, 2023 19:00:00'),
    name: 'A singing museum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    venueName: 'Tbilisi open air museum',
    city: 'Tbilisi',
    lat: 41.70772139000602,
    lng: 44.78565391204908,
  },
  {
    eventId: '0003',
    imageUrl:
      'https://madloba.info/media/images/Tbilisi-Center-Music-02.2e16d0ba.fill-720x405.jpg',
    date: new Date('December 29, 2023 19:00:00'),
    name: 'Guria songs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    venueName: 'Ozurgeti theatre',
    city: 'Ozurgeti',
    lat: 41.70772139000602,
    lng: 44.78565391204908,
  },
  {
    eventId: '0004',
    imageUrl:
      'https://madloba.info/media/images/Tbilisi-Center-Music-02.2e16d0ba.fill-720x405.jpg',
    date: new Date('December 25, 2023 19:00:00'),
    name: 'Svanetian songs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    venueName: 'National museum of Mestia',
    city: 'Mestia',
    lat: 41.70772139000602,
    lng: 44.78565391204908,
  },
  {
    eventId: '0005',
    imageUrl:
      'https://madloba.info/media/images/Tbilisi-Center-Music-02.2e16d0ba.fill-720x405.jpg',
    date: new Date('January 7, 2024 19:00:00'),
    name: 'Orthodox Christmas concert',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    venueName: 'Adjarabet arena',
    city: 'Batumi',
    lat: 41.70772139000602,
    lng: 44.78565391204908,
  },
]

export const pastEvents: Array<IEvent> = []

export const monthsMapping = { 0: 'January', 1: 'February' }
