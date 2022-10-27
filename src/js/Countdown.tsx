import * as React from "react";
import Countdown, { zeroPad } from "react-countdown";
import beep from "./beep";

const urlParams = new URLSearchParams(window.location.search);
const password = urlParams.get("password") || "290121";

export default function Root({ setPage, clockOnly, timer }) {
  const [error, setError] = React.useState<string | null>(null);

  return (
    <div className="countdown-wrapper">
      <Countdown
        date={timer}
        precision={3}
        zeroPadTime={2}
        onTick={beep}
        onComplete={() => {
          if (!clockOnly) setPage("explosion");
        }}
        renderer={({ minutes, seconds }) => {
          return (
            <div className="clock">
              <span>{zeroPad(minutes, 2)}</span>:
              <span>{zeroPad(seconds, 2)}</span>
            </div>
          );
        }}
      />
      {!clockOnly ? (
        <>
          <input
            className="password"
            placeholder="password"
            onKeyUp={(e) => {
              setError(null);
              if (e.key === "Enter") {
                if (e.target.value.toLowerCase() === password.toLowerCase()) {
                  setPage("bomb");
                } else {
                  setError("WRONG PASSWORD!");
                }
              }
            }}
          />
          <div className="error">{error}</div>
        </>
      ) : null}
    </div>
  );
}
