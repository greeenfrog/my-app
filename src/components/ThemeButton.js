import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ThemeButton.css'

function ThemeButton({ isDark, onToggleTheme }) {
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
          onChange={(e) => {
            onToggleTheme();
            setChecked(e.currentTarget.checked);
            document.body.classList.toggle("dark-mode");
          }}
          className='theme-btn'
        >
        <img
        src={
          isDark ?
          "/navigation/light-mode.png" :
          "/navigation/dark-mode.png"
        }
        width="30"
        height="30"
        alt={
          isDark ?
          "Light mode" :
          "Dark mode"
        }
        />
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
}

export default ThemeButton;
