import { ReactTyped } from "react-typed";

function TypedText({ strings }) {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={80}
      backSpeed={60}
      backDelay={3000}
      loop
    />
  );
}

export default TypedText;
