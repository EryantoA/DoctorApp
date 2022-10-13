import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input, Loading} from '../../components';
import Fire from '../../config';
import {colors, useForm} from '../../utils';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    const auth = getAuth(Fire);
    createUserWithEmailAndPassword(auth, form.email, form.password).then(
      success => {
        setLoading(false);
        setForm('reset');

        // https://firebase.com/users/139d9w9chd
        const database = getDatabase(Fire);
        set(ref(database, 'users/' + success.user.uid + '/'), {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        });
        console.log('Register success: ', success).catch(error => {
          const errorMessage = error.message;
          setLoading(false);
          showMessage({
            message: errorMessage,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
          console.log('error: ', errorMessage);
        });

        // const data = {
        //   fullName: form.fullName,
        //   profession: form.profession,
        //   email: form.email,
        // };

        // Fire.database()
        //   .ref('users/' + success.user.uid + '/')
        //   .set(data);
      },
    );
    //() => navigation.navigate('UploadPhoto')
  };
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
