<script>
import { mapState } from "pinia";
import { useAttendanceStore } from "../stores/attendance";
import AttendanceCard from "./AttendanceCard.vue"

export default {
  name: "AttendanceList",
  components: { AttendanceCard },
  computed: {
    ...mapState(useAttendanceStore, ["attendanceList"])
  }
}

</script>

<template>
  <div>
    <h1>Attendance List</h1>
    <AttendanceCard v-for="el in attendanceList" :key="el.id" :attendance="el" />
  </div>
</template>