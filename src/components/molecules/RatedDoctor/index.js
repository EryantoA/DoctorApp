import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconStar} from '../../../assets';
import {fonts} from '../../../utils';

export default function RatedDoctor({avatar, name, desc, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
    paddingBottom: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
  },
  rate: {flexDirection: 'row'},
  profile: {flex: 1},
  name: {fontSize: 16, fontFamily: fonts.primary[600]},
  category: {fontSize: 12, fontFamily: fonts.primary.normal, marginTop: 2},
});
