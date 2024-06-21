import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ThemeButton.css'

function ThemeButton() {
  const [checked, setChecked] = useState(false);
  return (
    <div id="theme-container">
      <ButtonGroup>
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant='secondary'
          checked={checked}
          value={1}
          onChange={(e) => setChecked(e.currentTarget.checked)}
          className='theme-btn'
        >
          <img
            src="/navigation/dark-mode.png"
            width="30"
            height="30"
            alt="Dark mode"
          />
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
}

export default ThemeButton;
