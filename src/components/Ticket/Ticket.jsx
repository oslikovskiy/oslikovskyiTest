import React from "react";
import PropTypes from "prop-types";
import Styled from "./styled";

const Ticket = ({ ticket, currencyData }) => {
  return (
    <div key={`Ticket-${ticket.origin}-${ticket.destination}`}>
      <Styled.Content>
        <Styled.BtnGroup>
          <Styled.Logo />
          <Styled.Button>
            Купити <br />
            за {Math.floor(ticket.price * currencyData.sellRate)}{" "}
            {currencyData.sign}
          </Styled.Button>
        </Styled.BtnGroup>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                margin: "0 20px",
                textAlign: "left"
              }}
            >
              <h2> {ticket.departure_time}</h2>
              <p>
                {ticket.origin}, {ticket.origin_name} <br />
                {ticket.departure_date}
              </p>
            </div>
            <div style={{ width: 100 }}>
              <p>
                {ticket.stops === 1
                  ? `${ticket.stops} пересадка`
                  : ticket.stops > 1
                  ? `${ticket.stops} пересадки`
                  : "без пересадок"}
              </p>
            </div>
            <div style={{ textAlign: "right", width: 135 }}>
              <h2> {ticket.arrival_time}</h2>
              <p>
                {ticket.destination_name}, {ticket.destination} <br />
                {ticket.arrival_date}
              </p>
            </div>
          </div>
        </div>
      </Styled.Content>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired
};

export default Ticket;
