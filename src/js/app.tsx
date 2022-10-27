import * as React from "react";
import Bomb from "./Bomb";
import Countdown from "./Countdown";
import Explosion from "./Explosion";
import Start from "./Start";
import Success from "./Success";

const urlParams = new URLSearchParams(window.location.search);
const clockOnly = urlParams.get("clock-only");
const customPage = urlParams.get("page");
const customTimer = urlParams.get("timer");

export default function App() {
  const [page, setPage] = React.useState(
    clockOnly ? "countdown" : customPage || "start"
  );
  const [timer, setTimer] = React.useState(
    Date.now() + (customTimer || 30) * 60 * 1000
  );

  if (page === "start") {
    return (
      <Start
        onStart={() => {
          setPage("countdown");
          setTimer(Date.now() + 30 * 60 * 1000);
        }}
      />
    );
  }

  if (page === "countdown") {
    return <Countdown timer={timer} clockOnly={clockOnly} setPage={setPage} />;
  }

  if (page === "explosion") {
    return (
      <Explosion
        onComplete={() => {
          setPage("start");
        }}
      />
    );
  }

  if (page === "bomb") {
    return <Bomb setPage={setPage} timer={timer} />;
  }

  if (page === "success") {
    return <Success />;
  }
}
