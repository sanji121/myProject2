<template>
<div>
        <h4>All Users</h4>
        <table class="table table-borderless table-striped">
        <thead>
            <tr>
            <th scope="col">Email Address</th>
            <th scope="col">User Type</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user._id">
            <td>{{ user.userEmail }}</td>
            <td>{{ user.userType }}</td>
            </tr>
        </tbody>
        </table>

</div>
</template>
<script>
export default {
    data() {
        return {
            users:[]
        }
    },
    created() {
      let uri = 'http://localhost:4000/users';
      fetch(uri)
        .then((res) => { return res.json() })
        .then((data) => {
            this.users = data
        })
    },
    methods: {
    },
}
</script>