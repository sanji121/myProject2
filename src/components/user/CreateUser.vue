<template>
<div>
      <h4>Create User</h4>
        <form @submit.prevent="createUser">
        <div class="form-group">
            <label for="userEmail">Email address</label>
            <input type="email" class="form-control" id="userEmail" v-model.trim="userEmail" aria-describedby="emailHelp" placeholder="johndoe@example.com">
        </div>
        <div class="form-group">
            <label for="userPassword">Password</label>
            <input type="password" class="form-control" id="userPassword" v-model.trim="userPassword" placeholder="********">
        </div>
        <div class="form-group">
            <label for="userType">User Type</label>
            <select v-model.trim="userType" class="form-control" id="userType">
             <option value="parent">Parent/Student</option>
             <option value="service_provdier">Service Provider</option>
           </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block" >Create User</button>
        </form>
</div>
</template>
<script>
export default {
    data() {
        return {
            userEmail: 'asdsdffasdf@gmail.com',
            userPassword: 'asdfasfda',
            userType: 'parent'
        }
    },
    methods: {
        createUser(){
            let uri = 'http://localhost:4000/users/create';
            fetch(uri, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({userEmail:this.userEmail, userPassword:this.userPassword, userType:this.userType})
            }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }
    },
}
</script>