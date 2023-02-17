<script>
import AttendanceList from '../components/AttendanceList.vue';

export default {
  name: "HomePage",
  components: { AttendanceList }
}
</script>

<template>
  <section class="container mt-2">
    <AttendanceList />
  </section>
</template>