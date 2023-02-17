<script>
import { mapWritableState } from 'pinia';
import { useUserStore } from '../stores/user';


export default {
  name: "ProfilePage",
  data() {
    return {
      edit: false,
      username: "",
      imgUrl: ""
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ["user"]),
  },
  methods: {
    editUsername() {
      this.edit = true
    },
    submitEdit() {
      this.edit = false
      console.log(this.username);
      this.user.username = this.username
      this.user.imgUrl = this.imgUrl
    }
  }
}
</script>

<template>
  <section class="vh-100" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-12 col-xl-4">

          <div class="card" style="border-radius: 15px;">
            <div class="card-body text-center">
              <div class="mt-3 mb-4">
                <img :src="user.imgUrl" class="rounded-circle img-fluid" style="width: 100px;" />
              </div>
              <div v-if="edit" class="form-outline mb-4">
                <input v-model="imgUrl" type="text" class="form-control form-control-lg" placeholder="Edit image" />
              </div>
              <h4 class="mb-2">{{ this.user.username }}</h4>
              <div v-if="edit" class="form-outline mb-4">
                <input v-model="username" type="text" class="form-control form-control-lg" placeholder="Edit username" />
              </div>
              <p class="text-muted mb-4">{{ this.user.email }}</p>
              <button v-if="!edit" type="button" @click="editUsername" class="btn btn-primary btn-rounded btn-lg">
                Edit Profile
              </button>
              <button v-if="edit" type="button" @click="submitEdit" class="btn btn-primary btn-rounded btn-lg">
                Submit
              </button>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>