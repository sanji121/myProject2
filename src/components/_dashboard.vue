<template>
    <div>
        <h4>Create Course</h4>
            <form @submit.prevent="createUser">
            <div class="form-group">
                <label for="topic">Topic</label>
                <input type="text" class="form-control" id="topic" v-model.trim="topic" placeholder="Physics">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" class="form-control" id="price" v-model.trim="price" placeholder="0">
            </div>
            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" class="form-control" id="location" v-model.trim="location" placeholder="Berlin">
            </div>
            <div class="form-group">
                <label for="provider">User Type</label>
                <select v-model.trim="provider" class="form-control" id="provider">
                <option value="udemy">Udemy</option>
                <option value="codeschool">Code School</option>
            </select>
            </div>
            <div class="form-group">
                <label for="time">Time</label>
                <input type="text" class="form-control" id="time" v-model.trim="time" placeholder="9:00am">
            </div>
            <button type="submit" class="btn btn-primary btn-block" >Create Course</button>
            </form>
</div>
</template>
<script>
export default {
    data() {
        return {
            topic: '',
            price: null,
            location:'',
            provider:'udemy',
            time:''
        }
    },
    methods: {
        createUser(){
            let uri = 'http://localhost:4000/courses/create';
            fetch(uri, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    topic:this.topic,
                    price:this.price,
                    location: this.location,
                    provider: this.provider,
                    time: this.time
                })
            }).then((res) => res.json())
            .then((data) => {
                this.$emit('swapComponent', 'AllCourses')
            })
            .catch((err) => console.log(err))
        }
    },
}
</script>