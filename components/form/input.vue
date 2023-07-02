<script setup>
import useUtils from "@/utils/helpers";

const {ucwords} = useUtils();

// Props
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  errors: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (newValue) => {
  emit("update:modelValue", newValue);
};
</script>

<template>
  <v-text-field
    class="mb-1"
    :label="ucwords(name)"
    :type="type"
    :error-messages="errors"
    @input="updateValue($event.target.value)"
  >
  </v-text-field>
</template>
