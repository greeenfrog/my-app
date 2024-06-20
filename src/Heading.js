import { ReactTyped } from "react-typed";

function Heading() {
  return (
    <div>
      <h1>
        <ReactTyped
          strings={[
            "Li Jianing",
            "李嘉宁",
          ]}
          typeSpeed={80}
          backSpeed={60}
          backDelay={3000}
          loop
        />
      </h1>
    </div>
  );
}

export default Heading;
