<template>
  <div id="app" class="wrapper">
    <va-navibar></va-navibar>
    <va-slider :slideMenuItems="slideMenuItems"></va-slider>
    <va-content-wrap></va-content-wrap>
    <Modal></Modal>
  </div>
</template>

<script>
//top
import VANaviBar from "./NaviBar";
//left
import VASlider from "./Slider";
//main
import VAContentWrap from "./ContentWrap";
import Modal from "./components/Modal.vue";
import slideMenuItems from "./lib/slideMenuItems.js";
import slideMenuItems_dev from "./lib/slideMenuItems_dev.js";
import { mapGetters, mapActions } from "vuex";

export default {
  data: function() {
    return {
      slideMenuItems:
        process.env.NODE_ENV == "production"
          ? slideMenuItems
          : slideMenuItems.concat(slideMenuItems_dev)
    };
  },
  components: {
    "va-navibar": VANaviBar,
    "va-slider": VASlider,
    "va-content-wrap": VAContentWrap,
    Modal
  },
  methods: {
    ...mapActions(["fetchUser"])
  },
  computed: {},
  mounted() {
    this.fetchUser();
  },
};
</script>

<style>
.ellipis {
  overflow: hidden;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
