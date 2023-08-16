/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//self
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Home from './src/Home';
const AppRRRedux =()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)

//avove tk bs
AppRegistry.registerComponent(appName, () => AppRRRedux);
