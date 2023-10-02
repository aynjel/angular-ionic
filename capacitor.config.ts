import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'angular-ionic',
  bundledWebRuntime: false,
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
  cordova: {},
};

export default config;
