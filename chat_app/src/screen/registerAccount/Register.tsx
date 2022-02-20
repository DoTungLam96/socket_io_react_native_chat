/* eslint-disable react-native/no-inline-styles */
import {Button, Form, Input, Item, Text, View} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {Animated, Image, ImageBackground, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontiso from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../navigationRoute/component/NavigationServices';

const Register = (): React.ReactElement => {
  const logoAnime = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoAnime, {
        toValue: 1,
        tension: 2,
        friction: 1,
        duration: 1000,
      }).start(),
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* First */}
        <ImageBackground
          source={require('../../../images/loginBg.png')}
          style={{width: '100%', height: '100%', flex: 1}}
          resizeMode="cover">
          <View style={styles.top}>
            <Image
              source={require('../../../images/Landing.png')}
              style={styles.landing}
            />
          </View>

          {/* Last */}
          <View style={styles.middle}>
            <View style={styles.register} />

            {/* Form area */}

            <View style={styles.formArea}>
              <Animated.View
                style={[
                  {
                    opacity: logoAnime,
                    top: logoAnime.interpolate({
                      inputRange: [0, 1],
                      outputRange: [5, 0],
                    }),
                  },
                  {
                    alignSelf: 'center',
                  },
                ]}>
                <Image source={require('../../../images/Logo.png')} />
              </Animated.View>

              <Animated.View
                style={[
                  {
                    opacity: logoAnime,
                    left: logoAnime.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-2, 0],
                    }),
                  },
                ]}>
                <View style={{flex: 1, width: '100%', alignSelf: 'center'}}>
                  <Form style={styles.mainForm}>
                    <Item style={styles.formItems}>
                      <Entypo name="user" style={styles.Icon} />
                      <Input placeholder="Full name" style={styles.Input} />
                    </Item>
                    <Item style={styles.formItems}>
                      <Fontiso name="email" style={styles.Icon} />
                      <Input placeholder="E-mail" style={styles.Input} />
                    </Item>
                    <Item style={styles.formItems}>
                      <MaterialIcons name="security" style={styles.Icon} />
                      <Input placeholder="Password" style={styles.Input} />
                    </Item>
                    <Item style={styles.formItems}>
                      <MaterialIcons name="security" style={styles.Icon} />
                      <Input
                        placeholder="Confirm Password"
                        style={styles.Input}
                      />
                    </Item>
                  </Form>
                </View>
              </Animated.View>

              <Animated.View style={[{opacity: logoAnime}]}>
                <Button block style={styles.btnGrp}>
                  <Text style={styles.btnText}>Register</Text>
                </Button>
              </Animated.View>

              <Animated.View style={[{opacity: logoAnime}, styles.question]}>
                <Text style={styles.do}>You have an account!</Text>
                <TouchableOpacity
                  style={[styles.do]}
                  onPress={() => {
                    NavigationService.goBack();
                  }}>
                  <Text style={[styles.do, {color: '#29AFA0', marginLeft: 15}]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
          {/* Second */}
          <View style={styles.bottom} />
        </ImageBackground>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 222,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  landing: {
    height: 170,
    width: 170,
    marginTop: 49.5,
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    backgroundColor: '#ffffff',
  },
  middle: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30,
  },
  register: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 37,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  regText: {
    fontFamily: 'Cairo-Bold',
    fontWeight: 'normal',
    color: '#E85B1C',
  },
  formArea: {
    marginTop: 175,
    paddingLeft: 29.9,
    paddingRight: 29.9,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 2,
  },
  mainForm: {
    marginTop: 20,
  },
  formItems: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#29AFA0',
    borderRadius: 10,
  },
  Input: {
    fontFamily: 'Cairo-Bold',
    fontWeight: 'normal',
    fontSize: 15,
  },
  Icon: {
    color: '#959595',
    marginRight: 10,
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
  },
  btnGrp: {
    marginTop: 25,
    backgroundColor: '#29AFA0',
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'Cairo',
    fontWeight: 'normal',
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
  do: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
  },
});
