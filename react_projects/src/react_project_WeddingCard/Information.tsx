import dividerImage from './assets/divider.png'
export const Information = () => {
  return (
    <div className="information-container">
      <div className="details">DETAILS</div>

      <div className="information">
        <div className="familydetails-heading">FAMILY DETAILS</div>
        <div className="family-information">
          <div className="bride-side">
            <div>BRIDE  SIDE</div>
            <div className="bride-name">Name:
              <input></input>
            </div>
            <div className="bride-father-name">Father&apos;s Name:
              <input></input>
            </div>
            <div className="bride-mother-name">Mother&apos;s Name:
              <input></input>
            </div>
            <div className="bride-grandfather-name">Grandfather&apos;s Name:
              <input></input>
            </div>
            <div className="bride-grandmother-name">Grandmother&apos;s Name:
              <input></input>
            </div>
            <div className="bride-address">Address:
              <input></input>
            </div>
            <div className="bride-rsvp">RSVP Contact No:
              <input></input>
            </div>
          </div>

          <div className="groom-side">
            <div>GROOM SIDE</div>
            <div className="groom-name">Name:
              <input></input>
            </div>
            <div className="groom-father-name">Father&apos;s Name:
              <input></input>
            </div>
            <div className="groom-mother-name">Mother&apos;s Name:
              <input></input>
            </div>
            <div className="groom-grandfather-name">Grandfather&apos;s Name:
              <input></input>
            </div>
            <div className="groom-grandmother-name">Grandmother&apos;s Name:
              <input></input>
            </div>
            <div className="groom-address">Address:
              <input></input>
            </div>
            <div className="groom-rsvp">RSVP Contact No:
              <input></input>
            </div>
          </div>
        </div>

        <div className='divider-container'>
          <img className="divider" src={dividerImage} />
        </div>

        <div className="weddingdaydetails-heading">WEDDING DAY DETAILS</div>
        <div className="weddingday-information">
          <div className="wedding-date-day">
            <div className="wedding-date">Date:
              <input></input>
            </div>
            <div className="wedding-day">Day:
              <input></input>
            </div>
          </div>
          <div className="wedding-time-venue">
            <div className="wedding-time">Time:
              <input></input>
            </div>
            <div className="wedding-venue">Venue:
              <input></input>
            </div>
          </div>
        </div>

        <div className='divider-container'>
          <img className="divider" src={dividerImage} />
        </div>

        <div className='prewedding-eventdetails-heading'>PRE-WEDDING EVENT DETAILS</div>
        <div className='preweddingevents-information'>

          <div className='prewedding-eventtype'>Event Type:
            <input></input>
          </div>

          <div className='preweddingevent-date-day'>
            <div className='preweddingevent-date'>Date:
              <input></input>
            </div>
            <div className='preweddingevent-day'>Day:
              <input></input>
            </div>
          </div>

          <div className='preweddingevent-time-venue'>
            <div className='preweddingevent-time'>Time:
              <input></input>
            </div>
            <div className='preweddingevent-venue'>Venue:
              <input></input>
            </div>
          </div>
        </div>

        <div className='divider-container'>
          <img className="divider" src={dividerImage} />
        </div>

        <div className='postwedding-eventdetails-heading'>POST-WEDDING EVENT DETAILS</div>
        <div className='postweddingevents-information'>

          <div className='postwedding-eventtype'>Event Type:
            <input></input>
          </div>

          <div className='postweddingevent-date-day'>
            <div className='postweddingevent-date'>Date:
              <input></input>
            </div>
            <div className='postweddingevent-day'>Day:
              <input></input>
            </div>
          </div>

          <div className='postweddingevent-time-venue'>
            <div className='postweddingevent-time'>Time:
              <input></input>
            </div>
            <div className='postweddingevent-venue'>Venue:
              <input></input>
            </div>
          </div>
        </div>

      </div>
      {/* <div>DATE and DAY</div>
      <div>TIME</div>
      <div>VENUE</div>
      <div>RSVP</div> */}
    </div>
  )
}
