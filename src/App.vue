<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useBackButton, useIonRouter } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }, setup() {
    const ionRouter = useIonRouter();
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
        console.log("Exit Application")
      }
    });
  }
});
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



</style>