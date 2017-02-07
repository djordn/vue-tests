<template>

  <div class="nav-right nav-menu">
    <span class="nav-item">
      <a v-show="show_upload_button" class="button is-default is-bold">
        {{ user.username }}
      </a>
    </span>
    <a class="nav-item is-tab">
      <i v-bind:class="{bell_red:isBelling}" class="fa fa-bell-o"></i>
    </a>
    <a class="nav-item is-tab">
      <img src="https://placehold.it/64x64" class="avatar-photo">
    </a>
  </div>

</template>

<!-- // Adding logic -->
<script>
export default {
  name: 'related_videos',
  data () {
    return {
      isBelling :  true,
      show_upload_button : true ,
      user : {
          name : "John",
          last_name : "Mcguinness",
          username : "john@gmail.com"
      }
    }
  }

}

</script>

<style scoped>
  .bell_red {
    color: #F00;
  }
</style>
