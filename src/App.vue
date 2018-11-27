<template>
  <v-app>
    <v-content>
      <v-layout>
        <v-flex sm3 xs12 >
          <SideBar/>
        </v-flex>
        <v-flex sm9 xs12>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar'

export default {
  name: 'App',
  components: {
    SideBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
