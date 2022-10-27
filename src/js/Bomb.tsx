import * as React from "react";
import Countdown, { zeroPad } from "react-countdown";
import beep from "./beep";

const urlParams = new URLSearchParams(window.location.search);
const customBombTimer = urlParams.get("custom-bomb-timer");

export default function Bomb({ setPage, timer }) {
  const [cutMessage, setCutMessage] = React.useState(null);

  return (
    <div className="bomb">
      <button
        className="wire blue-wire"
        onMouseEnter={() => setCutMessage("Blue")}
        onMouseLeave={() => setCutMessage(null)}
        onClick={() => setPage("success")}
      ></button>
      <button
        className="wire yellow-wire"
        onMouseEnter={() => setCutMessage("Yellow")}
        onMouseLeave={() => setCutMessage(null)}
        onClick={() => setPage("explosion")}
      ></button>
      <button
        className="wire green-wire"
        onMouseEnter={() => setCutMessage("Green")}
        onMouseLeave={() => setCutMessage(null)}
        onClick={() => setPage("explosion")}
      ></button>
      <Countdown
        date={timer}
        precision={3}
        zeroPadTime={2}
        onComplete={() => {
          setPage("explosion");
        }}
        onTick={beep}
        renderer={({ minutes, seconds }) => {
          return (
            <div className="clock clock-bomb">
              <span>{zeroPad(minutes, 2)}</span>:
              <span>{zeroPad(seconds, 2)}</span>
            </div>
          );
        }}
      />

      {cutMessage ? (
        <div className="wire-message">
          Cut <span className={`wire-message-${cutMessage}`}>{cutMessage}</span>{" "}
          Wire
        </div>
      ) : null}
    </div>
  );
}
