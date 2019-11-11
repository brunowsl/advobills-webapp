<template>
  <v-app>
    <v-app-bar app color="primary" dense dark>
      <v-toolbar-title to="/" style="cursor: pointer">
        <v-icon left>mdi-fingerprint</v-icon>ADVObills
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({})
};
</script>

<style scoped>
.txtpower {
  color: beige;
}
</style>
