import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useUserStore = defineStore("user", {
  state() {
    return {
      users: [
        {
          username: "employee",
          email: "employee@gmail.com",
          password: "employee",
          imgUrl:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
        },
      ],
      user: {},
    };
  },
  actions: {
    login(input) {
      const result = this.users.filter((el) => el.email == input.email);
      if (result.length >= 1) {
        if (result[0].password == input.password) {
          this.user = result[0];
          localStorage.setItem("email", result[0].email);
          Swal.fire({
            icon: "success",
            title: "Congrats...",
            text: "success login",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "invalid username or password",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "invalid username or password",
        });
      }
    },
  },
});
