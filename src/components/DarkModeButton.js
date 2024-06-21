import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './DarkModeButton.css'

function DarkModeButton() {
  const [checked, setChecked] = useState(false);
  return (
    <div id="dark-mode-container">
      <ToggleButton
        className="dark-mode-btn"
      >
        {/* <div> */}
          <img
            src="/navigation/dark-mode.png"
            width="30"
            height="30"
            alt="Dark mode"
          />
        {/* </div> */}
      </ToggleButton>
    </div>
  );
}

export default DarkModeButton;
