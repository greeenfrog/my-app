// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import { Switch } from '@mui/material';

function ThemeButton({ isDark, onToggleTheme }) {
  return (
    // <div id="theme-container">
    //   <ButtonGroup>
    //     <ToggleButton
    //       id="toggle-check"
    //       type="checkbox"
    //       variant='secondary'
    //       checked={isDark}
    //       value={1}
    //       onChange={() => onToggleTheme()}
    //       className="theme-btn"
    //       title={
    //         isDark ?
    //         "Light theme" :
    //         "Dark theme"
    //       }
    //     >
    //       <img
    //         src={
    //           isDark ?
    //           "/images/navigation/light-theme.png" :
    //           "/images/navigation/dark-theme.png"
    //         }
    //         width="30"
    //         height="30"
    //         alt={
    //           isDark ?
    //           "Light theme" :
    //           "Dark theme"
    //         }
    //       />
    //     </ToggleButton>
    //   </ButtonGroup>
    // </div>
    <div>
      <Switch
        checked={isDark}
        color="default"
        onChange={() => onToggleTheme()}
        className='theme-btn'
        title={
          isDark ?
          "Light theme" :
          "Dark theme"
        }
        sx={{
        }}
      />
    </div>
  );
}

export default ThemeButton;
