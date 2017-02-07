<template>
  <div class="column is-4">
<hello></hello>
    <div class="box related-list">
      <p class="autoplay">
        <span class="autoplay-title">Up next</span>
        <span class="autoplay-toggle">
          Autoplay
          <i class="fa fa-info-circle"></i>
        </span>
      </p>
      <article v-for="item in related_data" class="media related-card">
        <div class="media-left">
          <figure class="image">
            <img :src=item.video_img alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <span class="video-title">{{item.video_title}}</span>
              <span class="video-account">{{item.video_account}}</span>
              <span class="video-views">{{item.video_views}}</span>
            </p>
          </div>
        </div>
      </article>
      <hr>

    </div>

  </div>
</template>



<script>
import Hello from './Hello'

export default {
  name: 'related_videos',
  components : { Hello },
  data () {
    return {
      related_data : [
          {
            video_title:  'A video title 1 - Balo',
            video_account: 'Pedro',
            video_views: '1 views',
            video_img : 'http://placehold.it/120x90'
          },

          {
            video_title:  'A video title 2',
            video_account: 'Jose',
            video_views: '2 views',
            video_img : 'http://icons.iconarchive.com/icons/kearone/comicons/128/linux-icon.png'
          }
          ,

          {
            video_title:  'A video title 3l',
            video_account: 'Maria',
            video_views: '3 views',
            video_img : 'http://placehold.it/120x90'
          }
      ]
    }
  }
}


</script>

<style></style>
