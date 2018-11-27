<template>
  <v-app>
    <h1>Inventory List</h1>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="items"
      select-all
      item-key="Vin"
    >
      <template slot="items" slot-scope="props">
        <tr>
          <td>
            <v-checkbox v-model="props.selected" primary hide-details>
            </v-checkbox>
          </td>
          <td>{{props.index +1}}</td>
          <td>{{props.item.Vin}}</td>
          <td>{{props.item.Model}}</td>
          <td>{{props.item.Maker}}</td>
          <td>{{props.item.Year}}</td>
          <td>{{props.item.MSRP}}</td>
          <td>{{props.item.Status}}</td>
          <td>{{props.item.Booked}}</td>
          <td>{{props.item.Listed}}</td>
        </tr>
      </template>
    </v-data-table>
    <div>
      + - upload
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Inventory',
  data () {
    return {
      selected: [],
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
          Vin: 'MNBUMF050FW496402',
          Model: '320i',
          Maker: 'BMW',
          Year: 2013,
          MSRP: 10000,
          Status: 'Ordered',
          Booked: true,
          Listed: true
        },
        {
          Vin: '4JDBLMF080FW468775',
          Model: 'Carmry',
          Maker: 'Toyota',
          Year: 2015,
          MSRP: 12000,
          Status: 'In stock',
          Booked: true,
          Listed: false
        },
        {
          Vin: 'TFBAXXMAWAFS71274',
          Model: 'Focus',
          Maker: 'Ford',
          Year: 2016,
          MSRP: 13000,
          Status: 'Ordered',
          Booked: false,
          Listed: true
        },
        {
          Vin: 'G3SBUMF080FW470449',
          Model: 'Civic',
          Maker: 'Honda',
          Year: 2016,
          MSRP: 14000,
          Status: 'Sold',
          Booked: false,
          Listed: false
        }
      ]
    }
  },
  methods: {}

}
</script>

<style scoped>

</style>
