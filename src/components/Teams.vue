<script setup>

import { onMounted, ref } from "vue";
import axios from "axios";

const teams = ref([]);

const props = defineProps({
  id: String
})

onMounted(() => {
  axios.get(
    `/sportmonks-api/v4/competitions/${props.id}/teams`,
    { headers: {'X-Auth-Token': '9a6690dd7a9c4faeb5c52dd825313059' }}
).then((response) => {
    teams.value = response.data.teams;
    console.log(response.data);
  });
});
//покажи тут інфу по teams 

</script>
<template>
 {{ teams }}
</template>
