import '../css/Homepage.css'
import UpcomingEventCard from '../components/UpcomingEventCard'
import React, { useState, useEffect } from 'react'

// How we would pass props not using a database

// const events = [
//   {
//     title:"Legget Hall Viewing",
//     description:"...Literally. Come stare at people that go in and out of Leggett Hall. The registration fee goes towards the participants' popcorn fund.",
//     month:"NOV",
//     day:15,
//     time:"3:00 PM",
//     location:"Parking Lot Behind Stirling Hall",
//     price:"$3.33",
//     spacesLeft:2,
//     registered:3
//   },
//   {
//     title:"Stalk-Off",
//     description:"Battle royale to see who can find everyone else's addresses first. The registration fee goes towards the club leads' popcorn fund.",
//     month:"NOV",
//     day:29,
//     time:"11:00 PM",
//     location:"Your Place of Residence",
//     price:"$6.66",
//     spacesLeft:3,
//     registered:17
//   },
//   {
//     title:"You Are Being Watched",
//     description:"Look behind you. The registration fee goes towards the cost of your existence permit.",
//     month:"NOV",
//     day:"??",
//     time:"?:?? AM",
//     location:"Your Current Location ",
//     price:"$9.99",
//     spacesLeft:"?",
//     registered:"?"
//   },
//   {
//     title:"Valentines Day Blank Stare",
//     description:"You got a date? Yeah, me neither. Come stare at an assigned staring partner this Valentine's Day. Only lonely people allowed.",
//     month:"FEB",
//     day:14,
//     time:"8:00 AM",
//     location:"136 Princess St (Shoppers Drug Mart)",
//     price:"FREE",
//     spacesLeft:39,
//     registered:1,
//   }
// ];

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

  if (data != null) {
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
          <p>Upcoming events will be displayed here!</p>
        </div>
      </>
    )
  }
}

export default UpcomingEvents
