<template lang="pug">
  main.app-wrapper
    PromptForm(
      @response="handleResponse($event)"
    )

    ChartInsight

    pre
      | {{ JSON.stringify(response, null, 2) }}

    pre
      | {{ JSON.stringify(data, null, 2) }}

</template>

<script setup>
import { ref, unref } from "vue";
import PromptForm from "./prompt-form.vue";
import ChartInsight from "./chart-insight.vue";

const response = ref(null);
const data = ref(null);
const foo = ref("bar");

const handleResponse = (event) => {
  response.value = event.response.value;
  data.value = event.data.value;
};
</script>
