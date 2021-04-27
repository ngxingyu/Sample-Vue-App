<template>
  <div class="advices">
    <transition-group>
      <Advice v-for="advice in advices" :key="advice.id" :advice="advice" />
    </transition-group>
  </div>
</template>

<script>
import { toRefs } from "vue";
import useAdviceRepositories from "@/composables/useAdviceRepositories";
import Advice from "@/components/Advice.vue";
export default {
  props: {
    query: {
      type: String,
      default: "life",
    },
  },
  async setup(props) {
    const { query } = toRefs(props);
    const { repositories: advices } = await useAdviceRepositories(query);
    return { advices };
  },
  components: {
    Advice,
  },
};
</script>