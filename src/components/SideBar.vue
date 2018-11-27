<template>
  <v-app>
    <v-navication-drawer fixed>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-title class="title">
            <img src="../assets/final-logo-codebrick.png">
          </v-list-tile-title>
        </v-list-tile>

        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          :clipped="$vuetify.breakpoint.mdAndUp"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              {{item.title}}
            </v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navication-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      items: [
        { title: 'Inventory', link: '/' },
        { title: 'Manage Market', link: '/market' },
        { title: 'Manage Customer', link: '/customer' },
        { title: 'Report Setting', link: '/report' },
        { title: 'Sign Out' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
