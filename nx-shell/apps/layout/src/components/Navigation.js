import React from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';
import singleSpaReact from 'single-spa-react';
import ReactDOM from 'react-dom';
import { navigateToUrl } from 'single-spa';

function ListItemLink(props) {
  // const selected = useMatch(props.to);

  /* const location = useLocation();
  const selected = location.pathname === props.to;*/

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => {
        const handleClick = (e) => {
          e.preventDefault();
          navigateToUrl(props.to);
        };

        return (
          <a
            {...linkProps}
            ref={ref}
            href={linkProps.to}
            onClick={handleClick}
          />
        );
      }),
    [props.to]
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </li>
  );
}

function Navigation() {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: {
          position: 'relative',
          whiteSpace: 'nowrap',
          width: 240,
        },
      }}
      open={true}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 8px',
        }}
      >
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItemLink
          to="/react"
          icon={<DashboardIcon />}
          text="React Domain"
        />
        <ListItemLink
          to="/angular"
          icon={<ShoppingCartIcon />}
          text="Angular Domain"
        />
      </List>
    </Drawer>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Navigation,
});

export const { bootstrap, mount, unmount } = lifecycles;
