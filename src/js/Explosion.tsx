import * as React from "react";
import Countdown, { zeroPad } from "react-countdown";

export default function Explosion({ onComplete }) {
  return (
    <Countdown
      date={Date.now() + 14 * 1000}
      precision={3}
      zeroPadTime={2}
      onComplete={onComplete}
      renderer={({ minutes, seconds }) => {
        return (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/e2E7cwM-QQM?autoplay=1&controls=0&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      }}
    />
  );
}
