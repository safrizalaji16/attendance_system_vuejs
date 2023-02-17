import { defineStore } from "pinia";

export const useAttendanceStore = defineStore("attendance", {
  state() {
    return {
      attendanceList: [
        {
          id: 1,
          checkIn: "Tue Feb 14 2023 18:33:42 GMT+0700",
          checkOut: "Tue Feb 14 2023 18:33:42 GMT+0700",
          email: "employee1@gmail.com",
        },
        {
          id: 2,
          checkIn: "Wed Feb 15 2023 18:33:42 GMT+0700",
          checkOut: "Wed Feb 15 2023 18:33:42 GMT+0700",
          email: "employee1@gmail.com",
        },
        {
          id: 3,
          checkIn: "Thu Feb 16 2023 18:33:42 GMT+0700",
          checkOut: "Thu Feb 16 2023 18:33:42 GMT+0700",
          email: "employee1@gmail.com",
        },
      ],
    };
  },
});
