import '../css/Homepage.css'
import UpcomingEventCard from '../components/UpcomingEventCard'
import React, { useState } from 'react'

// How we would pass props not using a database

const events = []

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
