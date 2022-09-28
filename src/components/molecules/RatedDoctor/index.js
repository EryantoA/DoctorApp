import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {fonts} from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
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
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  rate: {flexDirection: 'row'},
  profile: {flex: 1},
  name: {fontSize: 16, fontFamily: fonts.primary[600]},
  category: {fontSize: 12, fontFamily: fonts.primary.normal, marginTop: 2},
});
