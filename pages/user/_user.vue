<template>
  <div class="main-user-wrapper">
    <mainContent :user="user" />
  </div>
</template>

<script>
import mainContent from "../../components/user/content";

export default {
  name: "user",
  data() {
    return {
      user: {},
      error: null,
    };
  },
  components: {
    mainContent,
  },
  created() {
    const reg = new RegExp("/user/", "i");

    let userLogin = this.$route.path.replace(reg, "");

    this.$axios
      .get(`${this.$axios.defaults.baseURL}/user/${userLogin}`)
      .then(({ data }) => {
        this.user = data;
      })
      .catch(({ error }) => {
        this.error = error;
      });
  },
};
</script>
