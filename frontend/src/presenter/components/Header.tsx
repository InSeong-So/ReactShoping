import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from './Logo.png';
import { useBloc as useCartBloc } from '@/context';
import { UpdatedCartState, CartState } from 'cart';
import { BlocBuilder } from '@/bloc';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    maxWidth: '800',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const bloc = useCartBloc();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <img src={logo} width={75} alt="logo" />
        <IconButton color="inherit">
          <BlocBuilder
            bloc={bloc}
            builder={(state: CartState) => {
              const totalItems =
                bloc.state.kind === 'UpdatedCartState'
                  ? (bloc.state as UpdatedCartState).totalItems
                  : 0;

              return (
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCartIcon onClick={() => bloc.openCart()} />
                </Badge>
              );
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
