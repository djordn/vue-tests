// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'bulma/css/bulma.css'
import 'assets/css/video-player.css'

import RelatedVideos from './components/RelatedVideos'
import Login from './components/Login'
import PostComment from './components/PostComment'
import RelatedComment from './components/RelatedComment.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

//test new Vue Instance
new Vue({
  el: '#related_videos',
  template: '<RelatedVideos/>',
  components: { RelatedVideos }
})


new Vue({
  el: '#login',
  template: '<Login/>',
  components: { Login }
})


new Vue({
  el: '#post_comment',
  template: '<PostComment/>',
  components: { PostComment }
})


new Vue({
  el: '#related_comments',
  template: '<RelatedComment/>',
  components: { RelatedComment }
})
