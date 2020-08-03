/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import searchIcon from './icon/search.png';
import promo from './icon/promo.png';
import gopayLogo from './icon/gopay.png';
import payIcon from './icon/pay.png';
import nearbyIcon from './icon/nearby.png';
import topupIcon from './icon/topup.png';
import moreIcon from './icon/more.png';
import iconHome from './icon/home.png';
import iconHomeActive from './icon/home-active.png';
import iconOrders from './icon/order.png';
import iconHelp from './icon/help.png';
import iconInbox from './icon/inbox.png';
import iconAccount from './icon/account.png';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* SEARCH AND PROMO */}
        <View style={{flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="What do you want to eat?"
              style={{
                borderWidth: 1,
                borderColor: '#E8E8E8',
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: 'white',
                marginRight: 18,
              }}
            />
            <Image
              source={searchIcon}
              style={{position: 'absolute', top: 5, left: 12}}
            />
          </View>
          <View
            style={{
              width: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={promo} />
          </View>
        </View>

        {/* GOPAY */}
        <View style={{marginTop: 18}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2C5FB8',
              // borderRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              padding: 14,
            }}>
            <Image source={gopayLogo} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
              Rp100.000
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2F65BD',
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={payIcon} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Pay
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={nearbyIcon} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Nearby
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={topupIcon} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Top Up
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={moreIcon} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.nav}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={iconHomeActive} style={{width: 26, height: 26}} />

          <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={iconOrders} style={{width: 26, height: 26}} />

          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image source={iconHelp} style={{width: 26, height: 26}} />
          </View>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image source={iconInbox} style={{width: 26, height: 26}} />
          </View>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image source={iconAccount} style={{width: 26, height: 26}} />
          </View>
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 17,
    marginTop: 15,
  },
  nav: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  // navitem: {
  //   backgroundColor: 'red',
  // },
});

export default App;
