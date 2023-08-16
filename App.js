import React from 'react';
import {Button, StyleSheet, Text,TextInput,View } from 'react-native';
import first from './styles.js/first';
import TypeStylee from './src/screen/TypeStyle';
import TryTextInput from './src/screen/TextInputtt';
import Form from './src/screen/Form';
import ListWithFlat from './src/screen/List';
import ListWithMap from './src/screen/MapList';
import Hookss from './src/screen/Hook';
import ComponentDidUpdate from './src/screen/HookSpecifice';
import HideComponents from './ToggleHideComponent';
import DialogBox from './src/screen/DialogBox';
import Pressablee from './src/screen/Pressable';
import Gridd from './src/Grid';
import AsyncStoragee from './src/screen/AsyncStoragee';
import Home from './src/Home';
import ImagePickersss from './src/ImagePickersss';
import GoogleAds from './src/screen/googleAds';

const App =() => {
  return (
    // <TypeStylee/>
    // <TryTextInput/>
   // <ListWithFlat/>
    // <ListWithMap/>
    // <Hooks/>
    // <ComponentDidUpdate/>
    // <HideComponents/>
    // <DialogBox/>
    // <Pressablee/>
    // <Gridd/>
    // <AsyncStoragee/>
    // <ImagePickersss/>         
    <Home/>                   // for redux topic

    // <GoogleAds/>              // not working

  )
}

export default App;

// // FOR GOOGLE ADS
// import React, {useEffect, useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {WebView} from 'react-native-webview';
// import {
//   BannerAd,
//   BannerAdSize,
//   InterstitialAd,
//   AdEventType,
//   TestIds,
// } from 'react-native-google-mobile-ads';

// const adBannerUnitIdOS = Platform.select({
//   ios: 'ca-app-pub-9461667448707898/7388098524',
//   android: 'ca-app-pub-9461667448707898/2904523066',
// });

// const adInterstitialUnitIdOS = Platform.select({
//   ios: 'ca-app-pub-9461667448707898/7280287319',
//   android: 'ca-app-pub-9461667448707898/6328515337',
// });
// const adBannerId = __DEV__ ? TestIds.BANNER : adBannerUnitIdOS;

// const adInterstitialId = __DEV__
//   ? TestIds.INTERSTITIAL
//   : adInterstitialUnitIdOS;
// const interstitial = InterstitialAd.createForAdRequest(adInterstitialId, {
//   requestNonPersonalizedAdsOnly: false,
// });

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', backgroundColor: '#024579'}}>
//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <Image
//           source={require('../Design/src/assets/yupa.png')}
//           style={{width: 350, height: 350}}
//         />
//       </View>

//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <TouchableOpacity
//           style={styles.openAiWrapper}
//           onPress={() => navigation.navigate('OpenAi')}>
//           <Text style={styles.openAiButton}>Launch OpenAI</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{flex: 1, justifyContent: 'flex-end'}}>
//         {/* <BannerAd
//         unitId={adBannerId}
//         size={BannerAdSize.LARGE_BANNER}
//         requestOptions={{
//           requestNonPersonalizedAdsOnly: false
//         }}
//         /> */}
//         <BannerAd
//           unitId={adBannerId}
//           size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
//           requestOptions={{
//             requestNonPersonalizedAdsOnly: true,
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// function OpenAiScreen({navigation}) {
//   const [loaded, setLoaded] = useState(false);
//   useEffect(() => {
//     const unsubscribe = interstitial.addAdEventListener(
//       AdEventType.LOADED,
//       () => {
//         console.log('chlo subcribe-------------------');

//         setLoaded(true);
//       },
//     );
//     console.log('chlo--------------------');

//     // Start loading the interstitial straight away
//     interstitial.load();

//     // Unsubscribe from events on unmount
//     return unsubscribe;
//   }, []);

//   // No advert ready to show yet
//   if (!loaded) {
//     console.log('nhi hua load--------------------');

//     return null;
//   } else {
//     interstitial.show();
//   }

//   return (
//     <View style={{flex: 1}}>
//       <WebView
//         userAgent={'chrome'}
//         source={{uri: 'https://chat.openai.com/chat'}}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           options={{headerShown: false}}
//           name="Home"
//           component={HomeScreen}
//         />
//         <Stack.Screen
//           options={{headerShown: false}}
//           name="OpenAi"
//           component={OpenAiScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   openAiWrapper: {
//     width: '79%',
//     backgroundColor: '#007AFF',
//     borderRadius: 15,
//     padding: 15,
//   },
//   openAiButton: {
//     width: '100%',
//     color: 'white',
//     fontSize: 29,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });
