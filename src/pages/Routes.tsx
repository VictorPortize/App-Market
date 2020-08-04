import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {ItensProvider} from '../context/useItens';
import DrawerBar from '../component/drawer';

//Pages
import Listagem from './listagem';
import Produtos from './produtos';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <ItensProvider>
        <Drawer.Navigator
          drawerContent={(props: DrawerContentComponentProps) => (
            <DrawerBar {...props} />
          )}>
          <Drawer.Screen name="Listagem" component={Listagem} />
          <Drawer.Screen name="Produtos" component={Produtos} />
        </Drawer.Navigator>
      </ItensProvider>
    </NavigationContainer>
  );
};

export default Routes;
