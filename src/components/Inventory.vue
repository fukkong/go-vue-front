<template>
  <v-app>
    <h1>Inventory List</h1>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="search" Label="search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        select-all
        :search="search"
        :item-key="id"
        :pagination.sync="pagination"
      >
        <template slot="items" slot-scope="props">
          <tr>
            <td>
              <v-checkbox v-model="props.selected" primary hide-details>
              </v-checkbox>
            </td>
            <td>{{props.item.Carid}}</td>
            <!-- index dont sorted-->
            <td>{{props.item.Vin}}</td>
            <td>{{props.item.Model}}</td>
            <td>{{props.item.Maker}}</td>
            <td>{{props.item.Year}}</td>
            <td>{{props.item.Msrp}}</td>
            <td>{{props.item.Status}}</td>
            <td>{{props.item.Booked}}</td>
            <td>{{props.item.Listed}}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    <div>
      <v-dialog v-model="dialog" max-width="600px">
        <v-btn slot="activator" color="primary" dark> +</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Car Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Vin Number:*" v-model="newItem.Vin" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Model:" v-model="newItem.Model"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Maker:" v-model="newItem.Maker"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Year:" v-model="newItem.Year"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="MSRP:" v-model="newItem.Msrp"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-select :items="['Ordered','In Stock','Sold']" label="Status:"
                            v-model="newItem.Status"></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-select :items="[true,false]" label="Booked:" v-model="newItem.Booked"></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-select :items="[true,false]" label="Listed:" v-model="newItem.Listed"></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-btn color="blue darken-1" flat @click="close">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="add">Save</v-btn>
        </v-card>
      </v-dialog>
      <v-btn color="primary" dark @click="deleteSelected"> -</v-btn>
      <v-btn color="secondary" dark> Upload File</v-btn>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Inventory',
  data () {
    return {
      search: '',
      dialog: false,
      pagination: [],
      selected: [],
      newItem: {
        Carid: '',
        Vin: '',
        Model: '',
        Maker: '',
        Year: 0,
        Msrp: '',
        Status: '',
        Booked: false,
        Listed: false
      },
      defaultItem: {
        Carid: '',
        Vin: '',
        Model: '',
        Maker: '',
        Year: 0,
        Msrp: '',
        Status: '',
        Booked: false,
        Listed: false
      },
      headers: [
        { text: 'No', value: 'Carid' },
        { text: 'Vin#', align: 'left', value: 'Vin' },
        { text: 'Model', value: 'Model' },
        { text: 'Maker', value: 'Maker' },
        { text: 'Year', value: 'Year' },
        { text: 'MSRP', value: 'Msrp' },
        { text: 'Status', value: 'Status' },
        { text: 'Booked', value: 'Booked' },
        { text: 'Listed', value: 'Listed' }
      ],
      items: [],
      errors: []
    }
  },
  created () {
    axios.get('http://localhost:8080/v1/car')
      .then(function (response) {
        let list = []
        Object.keys(response.data).forEach((key) => {
          list.push(response.data[key])
        })
        return list
      }).then((list) => {
        this.items = list
      })
  },
  methods: {
    close () {
      this.dialog = false
      setTimeout(() => {
        this.newItem = Object.assign({}, this.defaultItem)
      }, 300)
    },
    add () {
      this.items.push(this.newItem)
      this.close()
    },
    deleteSelected () {
      for (let i = 0; i < this.selected.length; i++) {
        const index = this.items.indexOf(this.selected[i])
        this.items.splice(index, 1)
        if (i === this.selected.length - 1) {
          this.selected = []
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
