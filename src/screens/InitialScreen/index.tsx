import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../assets/styles';
import { GradientButton } from '../../components';
import Icons from '../../assets/icons';

const InitialScreen: React.FC = () => {
  const navigation = useNavigation();

  const { signInIcon, signUpIcon } = Icons;
  return (
    <View style={styles.container}>
      <GradientButton onPress={() => navigation.navigate('SignIn')} buttonText='Acessar Conta' icon={signInIcon} />
      <View style={styles.buttonArea}>
        <GradientButton onPress={() => navigation.navigate('SignUp')} buttonText='Cadastrar-se' icon={signUpIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonArea: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
});

export default InitialScreen;
