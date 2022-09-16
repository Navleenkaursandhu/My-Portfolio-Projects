
export const Information = () => {
  return (
    <div className="information-container">
      <div className="details">DETAILS</div>

      <div className="information">
        <div className="family-info">FAMILY DETAILS</div>
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
            <div className="bride-rsvp">RSVP Cell No:
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
            <div className="groom-rsvp">RSVP Cell No:
              <input></input>
            </div>
          </div>
        </div>

        <div className="weddingday-info">WEDDING DAY DETAILS</div>
        <div className="bride-groom-side-weddingday-info">
          <div className="date">Date:
            <input></input>
          </div>
          <div className="day">Day:
            <input></input>
          </div>
          <div className="time">Time:
            <input></input>
          </div>
          <div className="venue">Venue:
            <input></input>
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
