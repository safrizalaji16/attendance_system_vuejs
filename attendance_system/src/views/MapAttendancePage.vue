<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { mapWritableState } from 'pinia';
import { useAttendanceStore } from "../stores/attendance";

export default {
  name: "MapAttendancePage",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 2,
      input: {
        id: 4,
        checkIn: "",
        checkOut: "",
        email: localStorage.getItem("email"),
      }
    };
  },
  computed: {
    ...mapWritableState(useAttendanceStore, ["attendanceList"]),
    checkIn() {
      this.input.checkIn = new Date()
      console.log(this.input);
    },
    checkOut() {
      this.input.checkOut = new Date()
      this.attendanceList.push(this.input)
      console.log(this.input);
    },
  }
}
</script>

<template>
  <div style="height:450px; width:100%;">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>
    </l-map>
  </div>
  <div style="display: flex; justify-content: space-around;" class="mt-3">
    <button @click="checkIn" type="button" class="btn btn-primary btn-rounded btn-lg">
      Check In
    </button>
    <button @click="checkOut" type="button" class="btn btn-primary btn-rounded btn-lg">
      Check Out
    </button>
  </div>
</template>