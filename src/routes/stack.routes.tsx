import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages/Login';
import { FormCredentialsProdutor } from '../pages/Produtor/FormCredentialsProdutor';
import { FormPersonalProdutor } from '../pages/Produtor/FormPersonalProdutor';
import { FormAddressProdutor } from '../pages/Produtor/FormAdressProdutor';
import { FormProduto } from '../pages/Produto/FormProduto';
import { ListProduto } from '../pages/Produto/ListProduto';
import { FormCredentialsFuncionario } from '../pages/FuncionarioCecafes/FormCredentialsFuncionario';
import { FormPersonalFuncionario } from '../pages/FuncionarioCecafes/FormPersonalFuncionario';
import { AlterarSenha } from "../pages/AlterarSenha";
import { HomeProdutor } from '../pages/Produtor/HomeProdutor';
import { FormComprador } from '../pages/Comprador/FormComprador';

const stackRoutes = createStackNavigator();

const appRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: '#ffffff',
      },
    }}
  >
    <stackRoutes.Screen name='Login' component={Login} />
    <stackRoutes.Screen name='AlterarSenha' component={AlterarSenha} />
    <stackRoutes.Screen name='FormCredentialsProdutor' component={FormCredentialsProdutor} />
    <stackRoutes.Screen name='FormPersonalProdutor' component={FormPersonalProdutor} />
    <stackRoutes.Screen name='FormAdressProdutor' component={FormAddressProdutor} />
    <stackRoutes.Screen name='HomeProdutor' component={HomeProdutor} />
    <stackRoutes.Screen name='FormProduto' component={FormProduto} />
    <stackRoutes.Screen name='ListProduto' component={ListProduto} />
    <stackRoutes.Screen name='FormCredentialsFuncionario' component={FormCredentialsFuncionario} />
    <stackRoutes.Screen name='FormPersonalFuncionario' component={FormPersonalFuncionario} />
    <stackRoutes.Screen name='FormComprador' component={FormComprador} />
  </stackRoutes.Navigator>
);

export default appRoutes;
