<template>
    <div>
      <h4>Retrieve User</h4>
        <form @submit.prevent="retrieveUser">
        <div class="form-group">
            <label for="userEmail">Email address</label>
            <input type="email" class="form-control" id="userEmail" v-model.trim="userEmail" aria-describedby="emailHelp" placeholder="johndoe@example.com">
        </div>
        <button type="submit" class="btn btn-primary btn-block" >Retrieve User</button>
        </form>
        <div v-if="results">
        <hr>
        <h4>Results</h4>
        <h5></h5>
        <table class="table table-borderless table-striped">
        <thead>
            <tr>
            <th scope="col">Email Address</th>
            <th scope="col">User Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{{ user.userEmail }}</td>
            <td>{{ user.userType }}</td>
            </tr>
        </tbody>
        </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userEmail: '',
            user: [],
            results: false,
        }
    },
    methods: {
        retrieveUser(){
            let uri = 'http://localhost:4000/users/by-email';
            fetch(uri, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({userEmail:this.userEmail})
            }).then((res) => res.json())
            .then((data) => {
                if(data){
                    this.results = true,
                    this.user = data
                }else{
                    this.results = true,
                    this.user.userEmail = "Email not found"
                    this.user.userType = ""
                }
            })
            .catch((err) => console.log(err))
        }
    },
}
</script>