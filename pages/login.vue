<template>
  <div>
    <google-sing-in 
      :client-options="clientOptions"
      @success="onSuccess"/>
  </div>
</template>

<script lang="ts">
import GoogleSingIn from '~/components/auth/GoolgeSingIn.vue'
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  components: { GoogleSingIn },

  data() {
    return {
      clientOptions: {
        client_id: '1063525262697-l5h3t65e2g3b180ntr7n753ou8eshjuj.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      }
    }
  },

  methods: {
    onSuccess(googleAuthToken: string) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:8000/user/auth-token');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
      };

      xhr.send('token=' + googleAuthToken);
    }
  }
});
</script>