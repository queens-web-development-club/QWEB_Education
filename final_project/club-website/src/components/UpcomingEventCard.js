import '../css/Homepage.css'
import Calendar from '../img/icons/calendarIcon.png'

function UpcomingEventCard(props) {
  const date = new Date(props.info.date);

  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.toLocaleString('default', { day: 'numeric' });
  const time = date.toLocaleString('default', { hour12: true, hour: 'numeric' });


  console.log({info: props.info})

  return (
    <div className="upcoming-event-card">
      <p className="card-title">{props.info.name}</p>
      <div className="event-details">
        {/* Left */}
        <div className="event-details__left">
          <p>{props.info.description}</p>
          <div className="all-details">
            <div className="calendar-data">
              <span className="month">{month}</span>
              <span className="day">{day}</span>
            </div>
            <div className="details">
              <span>{time}</span>
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
            <p>Registered</p>
            <span>{props.info.registered}</span>
          </div>
          <div className="event-details__right__row3">
            <button className="register-button">Register</button>
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
