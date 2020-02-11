<template>
<div class="container-fluid">
    <div class="row">
      <div class="col-md-4 mt-5 ml-auto mr-auto">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" @click="swap('allUsers')">All Users</button>
            <button type="button" class="btn btn-success" @click="swap('createUser')">Create User</button>
            <button type="button" class="btn btn-primary" @click="swap('retrieveUser')">Retrieve User by Email</button>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-5 ml-auto mr-auto">
          <div class="card">
            <div class="card-body">
                <AllUsers v-if="allUsers && !retrieveUser"/>
                <CreateUser v-if="!allUsers && !retrieveUser"/>
                <RetrieveUser v-if="retrieveUser" />
            </div>
        </div>
    </div>
    </div>
</div>
</template>
<script>
import CreateUser from './user/CreateUser'
import AllUsers from './user/AllUsers'
import RetrieveUser from './user/RetrieveUser'
export default {
    data() {
        return {
            allUsers: true,
            retrieveUser: false,
        }
    },
    components:{
        CreateUser, AllUsers, RetrieveUser
    },
    methods: {
        swap(value){
            if(value === 'allUsers'){
                this.allUsers = true
                this.retrieveUser = false
            }else if(value === 'createUser'){
                this.allUsers = false
                this.retrieveUser = false
            }else if(value === 'retrieveUser'){
                this.allUsers = false
                this.retrieveUser = true
            }
        }
    },
}
</script>