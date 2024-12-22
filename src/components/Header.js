import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Платформа для студентов
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Главная
        </Button>
        <Button color="inherit" component={Link} to="/schedule">
          Расписание
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
