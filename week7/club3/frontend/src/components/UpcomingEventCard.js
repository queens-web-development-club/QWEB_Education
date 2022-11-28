import { useState } from 'react'
import eventPost from '../api/EventsApi'
import '../css/Homepage.css'
import Calendar from '../img/icons/calendarIcon.png'

function UpcomingEventCard(props) {
  const [registered, setRegistered] = useState(props.info.registered)

  return (
    <div className="upcoming-event-card">
      <p className="card-title">{props.info.name}</p>
      <div className="event-details">
        {/* Left */}
        <div className="event-details__left">
          <p>{props.info.description}</p>
          <div className="all-details">
            <div className="calendar-data">
              <span className="month">{props.info.month}</span>
              <span className="day">{props.info.day}</span>
            </div>
            <div className="details">
              <span>{props.info.time}</span>
              <span>{props.info.location}</span>
              <span>{props.info.price}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="event-details__right">
          <div className="event-details__right__row1">
            <p>Spaces Left</p>
            <span>{props.info.spaces_left}</span>
          </div>
          <div className="event-details__right__row2">
            <p>Registerd</p>
            <span>{registered}</span>
          </div>
          <div className="event-details__right__row3">
            <button
              className="register-button"
              onClick={() => {
                eventPost(props.info._id, registered + 1)
                setRegistered(registered + 1)
              }}
            >
              Register
            </button>
            <button
              className="calendar-button"
              style={{ 'align-items': 'center', display: 'flex' }}
            >
              <img src={Calendar}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEventCard
