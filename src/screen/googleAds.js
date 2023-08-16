import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import mobileAds from 'react-native-google-mobile-ads';
// const adBannerUnitIdOS = Platform.select({
//   ios: "ca-app-pub-9461667448707898/7388098524",
//   android: "ca-app-pub-9461667448707898/2904523066",
// });

// const adInterstitialUnitIdOS = Platform.select({
//   ios: "ca-app-pub-9461667448707898/7280287319",
//   android: "ca-app-pub-9461667448707898/6328515337",
// });
var adBannerId;
if (__DEV__) {
  // console.log("true")
  adBannerId = TestIds.BANNER;
  console.log('banner id is:   ', TestIds.BANNER);
  //  console.log(" second   true")
} else {
  console.log('false');

  adBannerId = 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
}
const adInterstitialId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
console.log('inerstitial  id is:   ', TestIds.INTERSTITIAL);

const interstitial = InterstitialAd.createForAdRequest(adInterstitialId, {
  requestNonPersonalizedAdsOnly: false,
});
// import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#024579'}}>
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'red'}}>
        <TouchableOpacity
          style={[styles.openAiWrapper, {backgroundColor: 'yellow'}]}
          onPress={() => {
            navigation.navigate('OpenAi');
            {
              console.log('presedd------------------');
            }
          }}>
          <Text style={styles.openAiButton}>Launch OpenAI</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        {console.log('hello--------------------')}

        {/* <BannerAd
          unitId={adBannerId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: false,
          }}
        /> */}
        <BannerAd
          unitId={adBannerId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  );
}

function OpenAiScreen({navigation}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        console.log('chlo subcribe-------------------');

        setLoaded(true);
      },
    );
    console.log('chlo--------------------');

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    console.log('nhi hua load--------------------');

    return null;
  } else {
    interstitial.show();
  }

  return (
    <View style={{flex: 1, backgroundColor: 'yellow', height: 300, width: 300}}>
      <Text style={{fontSize: 20}}>sdfdsfsd</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const GoogleAds = () => {
  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        // Initialization complete!
        console.log('complete--------------------------------');
      });
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OpenAi"
          component={OpenAiScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  openAiWrapper: {
    width: '79%',
    backgroundColor: '#007AFF',
    borderRadius: 15,
    padding: 15,
  },
  openAiButton: {
    width: '100%',
    color: 'white',
    fontSize: 29,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default GoogleAds;
