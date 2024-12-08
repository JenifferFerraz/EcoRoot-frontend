import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';

interface TabLayoutProps {
  userRole: 'gestor' | 'usuario';
}

export default function TabLayout({ userRole }: TabLayoutProps) {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <View style={styles.tabContainer}>
      <Pressable onPress={() => router.push('/dashboard')} style={styles.tabButton}>
        <IconSymbol size={28} name="house.fill" color="#ffffff" />
        <Text style={styles.tabText}>Dashboard</Text>
      </Pressable>
      {userRole === 'gestor' && (
        <Pressable onPress={() => router.push('/novodescarte')} style={styles.tabButton}>
          <IconSymbol size={28} name="plus.circle.fill" color="#ffffff" />
          <Text style={styles.tabText}>Novo Descarte</Text>
        </Pressable>
      )}
      <Pressable onPress={() => router.push('/config')} style={styles.tabButton}>
        <IconSymbol size={28} name="ear.fill" color="#ffffff" />
        <Text style={styles.tabText}>Config</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5F939A',
    paddingVertical: 10,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    color: '#ffffff',
    marginTop: 5,
  },
});