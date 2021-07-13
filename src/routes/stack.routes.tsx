import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../pages/Login";
import { FormCredentials } from "../pages/Produtor/FormCredentials";
import { FormPersonalData } from "../pages/Produtor/FormPersonalData";
import { FormProduto } from "../pages/Produto/FormProduto";
import { ListProduto } from "../pages/Produto/ListProduto";
import { FormFuncionarioCecafes } from '../pages/FuncionarioCecafes/FormFuncionarioCecafes';

const stackRoutes = createStackNavigator();

const appRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#ffffff",
      },
    }}
  >
    <stackRoutes.Screen name="Login" component={Login} />
    <stackRoutes.Screen name="FormCredentials" component={FormCredentials} />
    <stackRoutes.Screen name="FormPersonalData" component={FormPersonalData} />
    <stackRoutes.Screen name="FormProduto" component={FormProduto} />
    <stackRoutes.Screen name="ListProduto" component={ListProduto} />
    <stackRoutes.Screen name="FormFuncionarioCecafes" component={FormFuncionarioCecafes} />
  </stackRoutes.Navigator>
);

export default appRoutes;
