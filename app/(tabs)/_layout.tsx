import { Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function StackLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="cadastrocliente"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="cadastrogestor"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="config"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="dashboard"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="map"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="notification"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="typecount"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="relatoriodescarte"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="novodescarte"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
      <Stack.Screen
        name="explore"
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerTintColor: Colors[colorScheme ?? 'light'].text,
        }}
      />
    </Stack>
  );
}