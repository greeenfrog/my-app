import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ThemeButton.css'

function ThemeButton({ isDark, onToggleTheme }) {
  return (
    <div id="theme-container">
      <ButtonGroup>
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant='secondary'
          checked={isDark}
          value={1}
          onChange={() => onToggleTheme()}
          className='theme-btn'
          title={
            isDark ?
            "Light mode" :
            "Dark mode"
          }
        >
          <img
          src={
            isDark ?
            "/images/navigation/light-mode.png" :
            "/images/navigation/dark-mode.png"
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
