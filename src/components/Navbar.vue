<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <a class="nav-item is-brand" to="/">
        Vue Project
      </a>
      <a class="nav-item is-tab" to="/dashboard">
        <i class="fa fa-dashboard"></i> Dashboard
      </a>
      <a class="nav-item is-tab" to="/projects">
        <i class="fa fa-list-alt"></i> Project List
      </a>
    </div>
    <div class="nav-right">
      <span class="nav-item">
        <a class="button">Logout {{user.last_name}}</a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      user : {
          name : 'Jordan',
          last_name : 'Vieira'
      }
    }
  }
}
</script>
