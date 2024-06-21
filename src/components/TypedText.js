import { ReactTyped } from "react-typed";

function TypedText({ strings }) {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={80}
      backSpeed={60}
      backDelay={5000}
      loop
    />
  );
}

export default TypedText;
