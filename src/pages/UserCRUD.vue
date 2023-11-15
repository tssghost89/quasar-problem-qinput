<template>
  <q-page class="q-pa-sm">
    <!-- <q-table
      :columns="columns"
      :rows="[{ first_name: 'Tung', email: 'tunghs@hactech.vn' }]"
    >
    </q-table> -->

    <div :key="i" v-for="(a, i) in arrInput">
      <q-input v-model="a.v" />
    </div>
  </q-page>
</template>
  
  <script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UserManagement",
  setup() {
    return {
      arrInput: [
        { v: ref("A") },
        { v: ref("B") },
        { v: ref("C") },
        { v: ref("D") },
      ],
    };
  },
});
</script>
  
  <style scoped>
</style>
  