<template>
  <div>
    <Head>
      <Script src="https://apis.google.com/js/platform.js" async defer></script>
    </Head>

    <div :id="buttonId"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

type Gapi = any;

interface ClientOptions {
  client_id: string
}

export default defineComponent({
  props: {
    clientOptions: {
      type: Object as PropType<ClientOptions>,
      required: true
    }
  },

  mounted() {
    let gapi = this.getGapi();
    
    gapi.load('auth2', () => {
      this.initAuth2(gapi);
      this.renderButton(gapi);
    });
  },

  computed: {
    buttonId(): string {
      return 'button_' + 123
    }
  },

  methods: {
    getGapi(): Gapi {
      let gapi = window['gapi'];
      if (typeof gapi === 'undefined')
        throw new Error('Cant load Google API');

      return gapi;
    },

    initAuth2(gapi: Gapi) {
      let auth2 = gapi.auth2.init(this.clientOptions);

      Object.defineProperty(window, 'auth2', {
        value: auth2 
      });
    },

    renderButton(gapi: Gapi) {
      gapi.signin2.render(this.buttonId, {
        onsuccess: this.onSuccess,
        onfailure: this.onFailure
      });
    },

    onSuccess(googleUser) {
      var token = googleUser.getAuthResponse().id_token
      this.$emit('success', token);
    },

    onFailure() {
      this.$emit('failure');
    },
  }
});
</script>