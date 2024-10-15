/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigation';
import {name as appName} from './app.json';
import i18n from './src/locales/i18n';
AppRegistry.registerComponent(appName, () => App);
