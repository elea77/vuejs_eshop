<template>
  <div class="container mb-5">
    <TitlePage title="Liste des produits" />
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Nom</th>
            <th scope="col">Date</th>
            <th scope="col">Facturation</th>
            <th scope="col">Etat</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="order in ordersFromApi.data" v-bind:key="order._id">
                    <td>{{ order.user.firstName }} {{ order.user.lastName }}</td>
                    <td>{{ order.date }}</td>
                    <td>{{ order.user.address.street }}, {{ order.user.address.city }} {{ order.user.address.zip }}, {{ order.user.address.country }}</td>
                    <td v-if="editStatus">
                        <select class="form-control" @change="changeStatus(order.status, order._id)" v-model="order.status">
                            <option v-for="status in statusArray" v-bind:key="status.value" :value="status.value">{{ status.value }}</option>
                        </select>
                    </td>
                    <td v-else>{{ order.status }}</td>
                    <td>{{ order.total }} €</td>
                    <td>
                      <button @click="edit()" class="no-btn">
                        <span class="iconify" data-inline="false" data-icon="ant-design:edit-filled" style="font-size: 28px;  color: #0085FF;"></span>
                      </button>
                    </td> 
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import TitlePage from '../../components/TitlePage';
  import ApiOrders from '../../mixins/ApiOrders';

  export default {
    components: {
      TitlePage,
    },
    data: function() {
      return {
        ordersFromApi: [],
        statusArray: [
            { value: 'En cours' },
            { value: 'Livré' },
            { value: 'Terminé' }
        ],
        editStatus: false
      };
    },
    mixins:[ApiOrders],
    methods: {
        edit: function() {
            if(this.editStatus == false) {
                this.editStatus = true;
            } else {
                this.editStatus = false;
            }
        },
        changeStatus: function(status, id) {
            this.status = status;
            this.editOrder(id)
            .then((data) => {
                if(data.error) {
                    console.log(data.error);
                    this.messageError = data.error;
                } 
                else {
                    window.location.reload();
                }
            })
            .catch(err => console.log(err));
        }
    },
    created() {
        this.getOrders()
        .then((data) => {
            this.ordersFromApi = data;
        })
        .catch((err) => console.log(err));
    },
  };
</script>

<style lang="scss" scoped>
  .no-btn {
    background: transparent;
    border: none !important;
    font-size:0;
  }
</style>