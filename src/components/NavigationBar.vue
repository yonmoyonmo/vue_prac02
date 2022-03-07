<template>
  <v-navigation-drawer
    color="rgba(191, 191, 191, 1)"
    permanent
    mini-variant
    expand-on-hover
    app
    class="nav-bar"
  >
    <v-list>
      <v-list-item link href="#">
        <router-link to="/">home</router-link>
      </v-list-item>
      <v-list-item link href="#">
        <router-link to="/photo">photo</router-link>
      </v-list-item>
      <v-list-item link href="#">
        <router-link to="/charts">chart</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script></script>
<style></style>
