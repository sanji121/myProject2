<template>
    <div class="container-fluid">
        <div class="row">
        <div class="col-md-8 mt-5 ml-auto mr-auto">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-warning" @click="swapComponent('AllCourses')">All Courses</button>
                <button type="button" class="btn btn-success" @click="swapComponent('CreateCourse')">Create Course</button>
                <!-- <button type="button" class="btn btn-primary" @click="swap('retrieveUser')">Retrieve User by Email</button> -->
            </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-8 mt-5 ml-auto mr-auto">
            <div class="card">
                <div class="card-body">
                    <div :is="currentComponent" class="m-auto" @swapComponent="swapComponent"></div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import CreateCourse from './course/CreateCourse'
import AllCourses from './course/AllCourses'
export default {
    data() {
        return {
            currentComponent: 'AllCourses'
        }
    },
    components:{
        CreateCourse, AllCourses
    },
    methods:{
        swapComponent(component){
            if (this.currentComponent !== component) this.currentComponent = component
        }
    }
}
</script>