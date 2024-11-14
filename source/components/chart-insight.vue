<template lang="pug">
  .chart-wrapper
    canvas#chart-insight
</template>

<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";

onMounted(() => {
  const ctx = document.getElementById("chart-insight");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<style lang="scss">
.chart-wrapper {
  margin: 96px 0;
}
</style>
