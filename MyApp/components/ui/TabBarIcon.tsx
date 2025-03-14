import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface TabBarIconProps {
  name: string;
  color: string;
  size?: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size = 28 }) => {
  return <Ionicons name={name} color={color} size={size} />;
};

export default TabBarIcon;
