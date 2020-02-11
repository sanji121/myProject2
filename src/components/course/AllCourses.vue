<template>
    <div>
        <h4>All Courses</h4>
        <table class="table table-borderless table-striped">
        <thead>
            <tr>
            <th scope="col" @click="sort('topic')">Topic</th>
            <th scope="col" @click="sort('price')">Price</th>
            <th scope="col">Location</th>
            <th scope="col">Provider</th>
            <th scope="col">Time</th>
            <th scope="col" @click="sort('rank')">Ranking</th>
            <th scope="col" v-if="type==='service_provdier'">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="course in sortedCourses" :key="course._id">
            <td>{{ course.topic }}</td>
            <td>{{ course.price }}</td>
            <td>{{ course.location }}</td>
            <td>
                <router-link :to="{name: 'courseByProvider', params: { providername: course.provider }}" class="btn btn-info rounded-0">{{ course.provider }}</router-link>
            </td>
            <td>{{ course.time }}</td>
            <td>
                <div class="input-group">
                <div class="input-group-prepend">
                      <input v-if="course.rank" v-model="course.rank" type="number" class="form-control" min="1" max="5">
                      <input v-if="!course.rank" v-model="rank[course._id]" type="number" class="form-control" min="1" max="5">
                </div>
                <div class="input-group-append">
                    <button v-if="course.rank" class="btn btn-primary" type="button" @click.prevent="updateRank(course._id)">Update Rank</button>
                    <button v-if="!course.rank" class="btn btn-primary" type="button" @click.prevent="makeRank(course._id)">Rank</button>
                </div>
                </div>
            </td>
            <td v-if="type==='service_provdier'">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <router-link :to="{name: 'editCourse', params: { id: course._id }}" class="btn btn-warning">Edit</router-link>
                    <button type="button" class="btn btn-danger" @click.prevent="deleteCourse(course._id)">Delete</button>
                </div>
            </td>
            </tr>
        </tbody>
        </table>

</div>
</template>
<script>
export default {

 /*eslint-disable */
    data() {
        return {
            courses:[],
            rank:[],
            type:'',
            email:'',
            username:'',
            currentSort:'name',
            currentSortDir:'asc'
        }
    },
    computed:{
        sortedCourses: function(){
            return this.courses.sort((a,b) => {
                let modifier = 1;
                if(this.currentSortDir === 'desc') modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            })
        }
    },
    mounted(){
        var user = JSON.parse(localStorage.getItem("user"));
            if(user){
            this.username = user.user_name;
            this.email = user.email;
            this.type =  user.type;
            }
    },
    created() {
      let uri = 'http://localhost:4000/courses';
      fetch(uri)
        .then((res) => { return res.json() })
        .then((data) => {
            this.courses = data
        })
    },
    methods: {
        swapComponent (component) {
            this.$emit('swapComponent', component)
        },
        makeRank(id){
            let uri = `http://localhost:4000/courses/rank/${id}`;
            fetch(uri, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    rank:this.rank[id]
                })
            }).then((res) => res.json())
            .then((data) => {
                window.location.reload()
            })
            .catch((err) => console.log(err))
        },
        updateRank(id){
            let uri = `http://localhost:4000/courses/rank/update/${id}`;
            fetch(uri, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    rank:this.courses[this.courses.findIndex(x => x._id === id)].rank
                })
            }).then((res) => res.json())
            .then((data) => {
                window.location.reload()
            })
            .catch((err) => console.log(err))
        },
        deleteCourse(id){
            let uri = `http://localhost:4000/courses/delete/${id}`;
            fetch(uri, {
                method: 'DELETE'
            }).then((res) => res.json())
            .then((data) => {
                this.courses.splice(this.courses.indexOf(id), 1)
                // console.log(data)
                // this.$router.push({name: 'courses'});
            })
            .catch((err) => console.log(err))

        },
        sort:function(s) {
            //if s == current sort, reverse
            if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = s;
        }
    },
}
</script>