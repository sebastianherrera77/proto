import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import InicioScreen from './screens/InicioScreen';
import ReporteScreen from './screens/ReporteScreen';
import MisReportesScreen from './screens/MisReportesScreen';
import InformacionScreen from './screens/InformacionScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#060d1a' },
          headerTintColor: '#e8f4ff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
          tabBarStyle: {
            backgroundColor: '#0c1829',
            borderTopColor: '#1a3050',
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 8,
            paddingTop: 6,
          },
          tabBarActiveTintColor: '#0ea5e9',
          tabBarInactiveTintColor: '#5a7fa0',
          tabBarLabelStyle: { fontSize: 10, letterSpacing: 0.5 },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: 'INICIO',
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🏠</Text>,
            headerTitle: 'SIVAPRE',
          }}
        />
        <Tab.Screen
          name="Reporte"
          component={ReporteScreen}
          options={{
            title: 'NUEVO REPORTE',
            tabBarLabel: 'Reportar',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📍</Text>,
          }}
        />
        <Tab.Screen
          name="MisReportes"
          component={MisReportesScreen}
          options={{
            title: 'MIS REPORTES',
            tabBarLabel: 'Mis Reportes',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📋</Text>,
          }}
        />
        <Tab.Screen
          name="Informacion"
          component={InformacionScreen}
          options={{
            title: 'INFORMACIÓN',
            tabBarLabel: 'Info',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📚</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}