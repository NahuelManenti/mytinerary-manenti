import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Link as LinkRouter } from 'react-router-dom';
import '../style/Navbar.css';
import SignOut from './SignOut';
import { useSelector } from 'react-redux';


const pags = [{to: '/index', name:'Home'}, {to: '/cities', name:'Cities'} ];
const settingsLogo = [{to: '/login', name:'Log In'}, {to: '/signup', name:'Sign Up'}];



const Navbar = () => {

  const UserRegister = useSelector(store => store.userReducer.user)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ background: '#2E3B55' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AirplanemodeActiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <p className='mytineraryFont'><span className='myFontColor'>My</span>Tinerary</p>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{ 
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pags.map((page,index) => (
                <LinkRouter className='textDecorationNone' key={index} to={page.to} onClick={handleCloseNavMenu}>
                  <MenuItem >
                    <Typography className='FontFamiliChangeNav' textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
          <AirplanemodeActiveIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <p className='mytineraryFont'><span className='myFontColor'>My</span>Tinerary</p>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }  }}>
            {pags.map((page,index) => (
              <LinkRouter className='textDecorationNone' key={index} to={page.to} onClick={handleCloseNavMenu}>
                <Button sx={{ my: 4, color: 'white', display: 'block'   }}>
                <p className='FontFamiliChangeNavTop'>{page.name}</p>
              </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 3 }}>
                <Avatar alt="" src="./public/avatar-ico" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {UserRegister ?
              <SignOut handleCloseUserMenu={handleCloseUserMenu}/>
              :
                settingsLogo.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <LinkRouter to={setting.to}>
                  <Typography textAlign="center">{setting.name}</Typography>
                  </LinkRouter>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
