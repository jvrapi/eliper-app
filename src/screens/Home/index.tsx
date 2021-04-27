import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icons from '../../assets/icons';
import { colors } from '../../assets/styles';
import { Card, ErrorComponent, LoadingComponent } from '../../components';
import AuthContext from '../../contexts/auth';
import BottomTabBarContext from '../../contexts/bottomTabBar';
import { getUserDiseases } from '../../services/user.disease';
import { cutName } from '../../utils/function';
import { homeOptions, Route } from '../../utils/screenOptions';

const Home: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { setShowTabBar } = useContext(BottomTabBarContext);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { infoIcon } = Icons;
  const navigation = useNavigation();

  async function getData() {
    try {
      const { data } = await getUserDiseases(user?.id as string);
      if (data.length > 0) {
        setShowTabBar(true);
        setLoading(false);
      } else {
        navigation.reset({ routes: [{ name: 'NewUser' }] });
      }
    } catch (error) {
      setHasError(true);
      setLoading(false);
    }
  }

  function goTo(route: Route) {
    navigation.navigate(route.name, { screen: route.screen });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <>
          <Text style={styles.title}>Eliper</Text>
          <Text style={styles.text}>
            Olá, {cutName(user?.name as string)}
            {'\n'}
            Em que posso lhe ajudar?
          </Text>
          <ScrollView style={styles.scroll}>
            {homeOptions.map((option, i) => (
              <Card key={i} style={styles.card} onPress={() => goTo(option.route)} activeOpacity={0.5}>
                <View style={styles.textContainer}>
                  <Text style={styles.cardText}>{option.title}</Text>

                  <View style={styles.infoContainer}>
                    {infoIcon}

                    <Text style={styles.infoText}>{option.info}</Text>
                  </View>
                </View>
                {option.icon}
              </Card>
            ))}
          </ScrollView>
        </>
      )}
      {loading && <LoadingComponent />}
      {hasError && <ErrorComponent />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.screenColor,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginTop: 30,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  scroll: {
    width: '100%',
    padding: 10,
  },
  card: {
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },

  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginLeft: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    width: 250,
    marginLeft: 5,
    color: '#a9a9a9',
  },
});

export default Home;
