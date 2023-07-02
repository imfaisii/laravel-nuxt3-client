import {useField, useForm} from "vee-validate";
import {ref} from "vue";

export default function useValidatedForm(
  initialValues: any,
  validationSchema: any
) {
  const {errors, handleSubmit} = useForm({validationSchema, initialValues});

  const form: any = ref({});

  for (const key in initialValues) {
    const field = useField(key);
    form.value[key] = field.value;
  }

  return {form, errors, handleSubmit};
}
