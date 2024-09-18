import { Switch } from '@mui/material';

function ThemeButton({ isDark, onToggleTheme }) {
  return (
    <div>
      <Switch
        checked={isDark}
        color="default"
        onChange={() => onToggleTheme()}
        title={
          isDark ?
          "Light theme" :
          "Dark theme"
        }
        sx={{
          marginX: 1,
          width: 76,
          height: 52,
          '& .Mui-checked': {
            transform: 'translateX(28px)',
            '& .MuiSwitch-thumb': {
              backgroundImage: 'url("/images/navigation/light-theme.png")',
              backgroundSize: 32,
            }
          },
          '& .MuiSwitch-thumb': {
            width: 32,
            height: 32,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url("/images/navigation/dark-theme.png")',
            backgroundSize: 26,
          },
          '& .MuiSwitch-track': {
            borderRadius: 16,
          }
        }}
      />
    </div>
  );
}

export default ThemeButton;
