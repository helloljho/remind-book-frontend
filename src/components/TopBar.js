import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import { CustomThemeContext } from '../themes/CustomThemeProvider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === 'dark');

  const classes = useStyles();
  const handleTheme = () => {
    if (isDark) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Icon
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuBookIcon />
          </Icon>
          <Typography variant="h6" className={classes.title}>
            Remind-Book
          </Typography>
          <Button href="/login" color="inherit">
            Login
          </Button>

          <IconButton
            size="medium"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleTheme}
            color="inherit"
          >
            <SettingsBrightnessIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
