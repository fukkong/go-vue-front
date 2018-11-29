<template>
  <v-app>
    <h1>Inventory List</h1>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="items"
      select-all
      item-key="model"
      :pagination.sync="pagination"
    >
      <template slot="items" slot-scope="props">
        <tr>
          <td>
            <v-checkbox v-model="props.selected" primary hide-details>
            </v-checkbox>
          </td>
          <td>{{props.index +1}}</td>
          <!-- index dont sorted-->
          <td>{{props.item.vin}}</td>
          <td>{{props.item.model}}</td>
          <td>{{props.item.maker}}</td>
          <td>{{props.item.year}}</td>
          <td>{{props.item.msrp}}</td>
          <td>{{props.item.status}}</td>
          <td>{{props.item.booked}}</td>
          <td>{{props.item.listed}}</td>
        </tr>
      </template>
    </v-data-table>
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
                  <v-text-field label="Vin Number:*" v-model="newItem.vin" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Model:" v-model="newItem.model"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Maker:" v-model="newItem.maker"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Year:" v-model="newItem.year"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="MSRP:" v-model="newItem.msrp"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-select :items="['Ordered','In Stock','Sold']" label="Status:"
                            v-model="newItem.status"></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-select :items="[true,false]" label="Booked:" v-model="newItem.booked"></v-select>
                </v-flex>
                <v-flex xs6>
                  <v-select :items="[true,false]" label="Listed:" v-model="newItem.listed"></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-action>
            <v-btn color="blue darken-1" flat @click="close">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="add">Save</v-btn>
          </v-card-action>
        </v-card>
      </v-dialog>
      <v-btn color="primary" dark @click="deleteSelected"> -</v-btn>
      <v-btn color="secondary" dark> Upload File</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Inventory',
  data () {
    return {
      dialog: false,
      pagination: [],
      selected: [],
      newItem: {
        vin: '',
        model: '',
        maker: '',
        year: 0,
        msrp: '',
        status: '',
        booked: false,
        listed: false
      },
      defaultItem: {
        vin: '',
        model: '',
        maker: '',
        year: 0,
        msrp: '',
        status: '',
        booked: false,
        listed: false
      },
      headers: [
        { text: 'No', sortable: false },
        { text: 'Vin#', align: 'left', value: 'Vin' },
        { text: 'Model', value: 'Model' },
        { text: 'Maker', value: 'Maker' },
        { text: 'Year', value: 'Year' },
        { text: 'MSRP', value: 'MSRP' },
        { text: 'Status', value: 'Status' },
        { text: 'Booked', value: 'Booked' },
        { text: 'Listed', value: 'Listed' }
      ],
      items: [
        {
          vin: 'MNBUMF050FW496402',
          model: '320i',
          maker: 'BMW',
          year: 2013,
          msrp: 10000,
          status: 'Ordered',
          booked: true,
          listed: true
        },
        {
          vin: '4JDBLMF080FW468775',
          model: 'Carmry',
          maker: 'Toyota',
          year: 2015,
          msrp: 12000,
          status: 'In stock',
          booked: true,
          listed: false
        },
        {
          vin: 'TFBAXXMAWAFS71274',
          model: 'Focus',
          maker: 'Ford',
          year: 2016,
          msrp: 13000,
          status: 'Ordered',
          booked: false,
          listed: true
        },
        {
          vin: 'G3SBUMF080FW470449',
          model: 'Civic',
          maker: 'Honda',
          year: 2016,
          msrp: 14000,
          status: 'Sold',
          booked: false,
          listed: false
        }
      ]
    }
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
