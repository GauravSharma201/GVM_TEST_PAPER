import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';


const HeaderWrapper = styled(AppBar)`
  background-color: #2196f3;
  padding: 16px;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const MenuButton = styled(IconButton)`
  margin-right: 16px;
  @media (max-width: 768px) {
    margin-right: 8px;
  }
`;

const Header = () => {
    return (
      <HeaderWrapper position="static">
        <Toolbar>
          <MenuButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </MenuButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employees List
          </Typography>
        </Toolbar>
      </HeaderWrapper>
    );
  };
  
  export default Header;
