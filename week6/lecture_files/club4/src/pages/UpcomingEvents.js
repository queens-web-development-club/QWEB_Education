import '../css/Homepage.css'
import UpcomingEventCard from '../components/UpcomingEventCard'
import React, { useState } from 'react'

// How we would pass props not using a database

const events = []

// const events = [
//   {
//     name: 'Legget Hall Viewing',
//     description:
//       "...Literally. Come stare at people that go in and out of Leggett Hall. The registration fee goes towards the participants' popcorn fund.",
//     month: 'NOV',
//     day: 15,
//     time: '3:00 PM',
//     location: 'Parking Lot Behind Stirling Hall',
//     price: '$3.33',
//     spaces_left: 2,
//     registered: 3,
//   },
//   {
//     name: 'Stalk-Off',
//     description:
//       "Battle royale to see who can find everyone else's addresses first. The registration fee goes towards the club leads' popcorn fund.",
//     month: 'NOV',
//     day: 29,
//     time: '11:00 PM',
//     location: 'Your Place of Residence',
//     price: '$6.66',
//     spaces_left: 3,
//     registered: 17,
//   },
//   {
//     name: 'You Are Being Watched',
//     description:
//       'Look behind you. The registration fee goes towards the cost of your existence permit.',
//     month: 'NOV',
//     day: '??',
//     time: '?:?? AM',
//     location: 'Your Current Location ',
//     price: '$9.99',
//     spaces_left: '?',
//     registered: '?',
//   },
//   {
//     name: 'Valentines Day Blank Stare',
//     description:
//       "You got a date? Yeah, me neither. Come stare at an assigned staring partner this Valentine's Day. Only lonely people allowed.",
//     month: 'FEB',
//     day: 14,
//     time: '8:00 AM',
//     location: '136 Princess St (Shoppers Drug Mart)',
//     price: 'FREE',
//     spaces_left: 39,
//     registered: 1,
//   },
// ]

function UpcomingEvents(props) {
  const [data, setData] = useState(events)

  if (data != null && data.length > 0) {
    return (
      <>
        <div className="upcoming-events">
          <h1>Upcoming Events</h1>
          <div className="events-section">
            <UpcomingEventCard info={data[0]} />
            <UpcomingEventCard info={data[1]} />
            <UpcomingEventCard info={data[2]} />
            <UpcomingEventCard info={data[3]} />
          </div>
          <div className="upcoming-events-end">
            <div className="horizontal-line"></div>
            <p>You've reached the end</p>
            <div className="horizontal-line"></div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="upcoming-events">
          <h1>Upcoming Events</h1>
          <h2
            style={{ alignItems: 'center', display: 'flex', fontSize: '48px' }}
          >
            <center>Upcoming events will be displayed here!</center>
          </h2>
        </div>
      </>
    )
  }
}

export default UpcomingEvents
