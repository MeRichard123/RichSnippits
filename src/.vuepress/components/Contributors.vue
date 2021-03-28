<template>
  <div class="container">
    <div
      v-for="contributor in contributors"
      :key="contributor.id"
      class="contribs"
    >
      <a
        :href="contributor.html_url"
        class="link"
        v-if="contributor.login !== 'MeRichard123'"
      >
        <img :src="contributor.avatar_url" alt="" class="profile" />
        <h3>{{ contributor.login }}</h3>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "contributors",
  data() {
    return {
      name: "Richard",
      contributors: [],
    };
  },
  created() {
    this.getContributors();
  },
  methods: {
    async getContributors() {
      const { data } = await axios.get(
        "https://api.github.com/repos/MeRichard123/RichSnippits/contributors"
      );
      this.contributors = data;
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  margin-top: 20px;
}
.contribs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.link {
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
}
.profile {
  max-height: 10rem;
}
</style>
