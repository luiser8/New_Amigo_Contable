import React, { useContext, useState, Fragment, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import { authContext } from '../../auth/useContext';
import { TypesContext } from '../../types/Types.context';

const Header = (props: any) => {
    const { getEmail, logout } = useContext(authContext) as TypesContext;
    const { onDrawerToggle } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  return (
    <Fragment>
      <AppBar sx={{ bgcolor: 'primary.customdark' }} position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center" mb={0}>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <IconButton color="inherit" onClick={(ev: MouseEvent<HTMLButtonElement>) => setAnchorEl(ev.currentTarget)} sx={{ p: 0 }}>
                <Avatar alt="My Avatar" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>{getEmail()}</MenuItem>
                  <Divider />
                  <MenuItem onClick={() => setAnchorEl(null)}>Perfil</MenuItem>
                  <MenuItem onClick={async () => logout()}>Cerrar sesión</MenuItem>
                </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0, bgcolor: '#01579b' }}
      >
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;