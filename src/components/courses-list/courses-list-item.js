import React from 'react';
import {View, Text} from 'react-native';

export default function ItemCourse({name}) {
  return <Text style={{marginTop: 5, fontStyle: 'italic'}}>{name}</Text>;
}
