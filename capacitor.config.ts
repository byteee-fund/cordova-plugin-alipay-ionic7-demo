import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cordova-plugin-alipay-ionic7-demo',
  webDir: 'dist',
  cordova: {
    preferences: {
      alipay_app_id: "2021003110650758",
    }
  },
};

export default config;
