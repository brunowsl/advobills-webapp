<template>
  <v-app>
    <v-app-bar app color="primary" dense dark>
      <v-toolbar-title>
        <v-icon left>mdi-fingerprint</v-icon>
        ADVObills</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",

  components: {
    Login
  },

  data: () => ({})
};
</script>

<style scoped>
.txtpower {
  color: beige;
}
</style>
