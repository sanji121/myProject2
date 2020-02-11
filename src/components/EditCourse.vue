<template>
    <div class="container-fluid">
        <div class="row">
        <div class="col-md-8 mt-5 ml-auto mr-auto">
            <div class="btn-group" role="group" aria-label="Basic example">
                <router-link class="btn btn-warning" :to="{name: 'courses'}">All Courses</router-link>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-8 mt-5 ml-auto mr-auto">
            <div class="card">
                <div class="card-body">
                    <h4>Edit Course</h4>
                    <form @submit.prevent="updateCourse">
                    <div class="form-group">
                        <label for="topic">Topic</label>
                        <input type="text" class="form-control" id="topic" v-model.trim="course.topic" placeholder="Physics">
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" class="form-control" id="price" v-model.trim="course.price" placeholder="0">
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input type="text" class="form-control" id="location" v-model.trim="course.location" placeholder="Berlin">
                    </div>
                    <div class="form-group">
                        <label for="provider">User Type</label>
                        <select v-model.trim="course.provider" class="form-control" id="provider">
                        <option value="udemy">Udemy</option>
                        <option value="codeschool">Code School</option>
                    </select>
                    </div>
                    <div class="form-group">
                        <label for="time">Time</label>
                        <input type="text" class="form-control" id="time" v-model.trim="course.time" placeholder="9:00am">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" >Update Course</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
 /*eslint-disable */
    data() {
        return {
            course: {}
        }
    },
    created(){
      let uri = `http://localhost:4000/courses/edit/${this.$route.params.id}`;
      fetch(uri)
        .then((res) => { return res.json() })
        .then((data) => {
            console.log(data)
            this.course = data
        })
    },
    methods: {
        updateCourse(){
            let uri = `http://localhost:4000/courses/update/${this.$route.params.id}`;
            fetch(uri, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(this.course)
            }).then((res) => res.json())
            .then((data) => {
                this.$router.push({name: 'courses'});
            })
            .catch((err) => console.log(err))
        }
    },
}
</script>