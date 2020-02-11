<template>
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-inverse">
  <div class="container-fluid">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-2">
          <router-link :to="{name:'register'}" class="btn btn-secondary">
              <span class="glyphicon glyphicon-user"></span> Sign Up
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name:'login'}" class="btn btn-info">
              <span class="glyphicon glyphicon-log-in"></span> Login
            </router-link>
        </li>
      </ul>
  </div>
</nav>

</template>

<script>

export default{
 name:'main_header'

}
</script>