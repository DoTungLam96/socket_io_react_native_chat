import {Spinner} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import NavigationService from '../../navigationRoute/component/NavigationServices';

const Intro = () => {
  const LogoAnime = useRef(new Animated.Value(0)).current;
  const LandingAnime = useRef(new Animated.Value(0)).current;
  const SpinnerAnime = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 1,
        duration: 700,
      }).start(),
      Animated.timing(LandingAnime, {
        toValue: 1,
        duration: 900,
      }).start(() => {
        Animated.spring(SpinnerAnime, {
          toValue: 1,
          tension: 10,
          duration: 3000,
        }).start(() => {
          // if (user) {
          //   Actions.replace('chatroom');
          // } else {
          //   Actions.replace('auth');
          // }
          NavigationService.navigate('Home', undefined);
        });
      }),
    ]).start();
  }, [LandingAnime, LogoAnime, SpinnerAnime]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[
            {
              opacity: LogoAnime,
              top: LogoAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
              left: LogoAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0],
              }),
            },
            styles.logoTop,
          ]}>
          <Image source={require('../../../images/Logo.png')} />
        </Animated.View>

        <Animated.View style={[{opacity: LandingAnime}, styles.Landing]}>
          <Image source={require('../../../images/Landing.png')} />
        </Animated.View>

        <Animated.View
          style={[
            {
              opacity: SpinnerAnime,
              bottom: SpinnerAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
            styles.Spinner,
          ]}>
          <Spinner color="#29AFA0" />
        </Animated.View>
      </View>
    </View>
  );
};
export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 350,
    marginLeft: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    elevation: 3,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  logoTop: {
    marginBottom: 20,
    marginTop: 70,
    alignItems: 'center',
  },
  Landing: {
    marginTop: 55,
    alignItems: 'center',
  },
  Spinner: {
    marginTop: 50,
    alignItems: 'center',
  },
});
