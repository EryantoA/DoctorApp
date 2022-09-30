import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor() {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
