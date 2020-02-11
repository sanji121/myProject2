<template>
  <div id="app">
    <div class="container-fluid" style="padding-right: 0px;
    padding-left: 0px;" v-if="this.$route.name=='login' || this.$route.name=='register' || this.$route.path=='/'">
       <MainHeader></MainHeader>
    </div>
    <div class="container-fluid" style="padding-right: 0px;
    padding-left: 0px;" v-if="this.$route.name=='dashboard'">
       <DashboardHeader></DashboardHeader>
    </div>

    <router-view />
  </div>
</template>

<script>
import MainHeader from './components/main_header';
import DashboardHeader from './components/dashboard_header';
export default {
  name: "App",
  components:{MainHeader,DashboardHeader}
};
</script>