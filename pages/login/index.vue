<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-500">
    <div
      class="relative max-h-screen min-h-screen w-[500px] overflow-hidden overflow-y-auto rounded-3xl"
    >
      <div class="h-screen w-full bg-gray-500 loginImage"></div>
      <div
        class="absolute bottom-0 flex h-[70%] w-full flex-col rounded-t-3xl bg-white bg-opacity-20 backdrop-blur-[2px] shadow"
      >
        <form @submit.prevent="handleSubmit" class="mt-10 space-y-8 px-10 py-10 text-center">
          <div class="group relative">
            <input
              v-model="form.student_id"
              type="number"
              id="student_id"
              required
              class="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
            />
            <label
              for="student_id"
              class="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >Username</label
            >
          </div>

          <div class="group relative">
            <input
              v-model="form.password"
              type="password"
              id="password"
              required
              class="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
            />
            <label
              for="password"
              class="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >Password</label
            >
          </div>

          <button
            class="h-12 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800"
          >
            Login
          </button>

          <a
            href="#"
            class="inline-flex !w-auto justify-center font-medium text-white"
            >Forgot password?</a
          >
        </form>

        <p class="gap-2 text-center pb-10 text-white">
          Don't have an account?
          <a href="#" class="font-semibold text-blue-900 hover:text-blue-800"
            >Sign up</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  student_id: "",
  password: "",
});
const handleSubmit = () => {
    console.log(form);
    form.student_id = +form.student_id
  fetch("http://localhost:3001/api/student/login", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.mesage === "Tizimga muvaffaqiyatli kirildi") {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("student_id", res.student?.id);
        // router.push("/");
        navigateTo('/')
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped>
.loginImage {
  background-image: url("https://img.freepik.com/premium-vector/blank-math-template-with-math-symbol_1639-26329.jpg") !important;
  background-position: center;
}
</style>
