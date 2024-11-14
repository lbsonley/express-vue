<template lang="pug">
  form.form(
    @submit.prevent="handleSubmit($event)"
  )
    label.form__label(for="prompt")
      | Prompt
    textarea.form__textarea(id="prompt", name="prompt" rows="20", cols="50")
    button.form__submit-button(type="submit")
      | Give me some insight

</template>

<script setup>
import { ref, unref } from "vue";
import camelCase from "lodash/camelCase";

const emit = defineEmits(["response"]);
const response = ref(null);
const data = ref(null);

const handleSubmit = async (event) => {
  const prompt = event.srcElement.elements.prompt.value;

  const request = await fetch(
    new Request("http://localhost:3000/api/generate/dummy", {
      method: "POST",
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
      }),
      body: { prompt },
    })
  );

  response.value = await request.json();

  data.value = csvJson(unref(response).query_results);
  console.log("should emit");
  emit("response", { response, data });
};

const csvJson = (csv) => {
  var lines = csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[camelCase(headers[j])] = camelCase(currentline[j]);
    }

    result.push(obj);
  }

  return result;
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-flow: row wrap;
  max-width: 720px;
  margin: 96px auto;
}

.form__label {
  margin-bottom: 24px;
  flex: 1 0 100%;
}

.form__textarea {
  flex: 1 0 100%;
  margin-bottom: 24px;
  border: 2px solid;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.form__submit-button {
  background-color: #ffffff;
  color: #121212;
  font-size: 28px;
  padding: 16px 12px;
  border: 2px solid transparent;
  border-radius: 8px;
}
</style>
