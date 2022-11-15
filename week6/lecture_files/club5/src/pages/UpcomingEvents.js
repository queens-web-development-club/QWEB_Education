import '../css/Homepage.css'
import UpcomingEventCard from '../components/UpcomingEventCard'
import React, { useState, useEffect } from 'react'

function UpcomingEvents(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/events`)
      const newData = await response.json()
      setData(newData)
    }
    fetchData()
  }, [])

  if (data != null && data.length > 0) {
    return (
      <>
        <div className="upcoming-events">
          <h1>Upcoming Events</h1>
          <div className="events-section">
            {data.map((event) => {
              return <UpcomingEventCard info={event} />
            })}
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
