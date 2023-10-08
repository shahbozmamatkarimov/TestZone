import { defineStore } from "pinia";

export const useStudentStore = defineStore("student", () => {
  const router = useRouter();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;
  const store = reactive({
    getStudent: "",
  });
  const studentInfo = computed(() => store.getStudent);

  function getOneStudent() { 
    if (process.client) {
      console.log(router.currentRoute.value);
      const id = localStorage.getItem("student_id");
      fetch(baseUrl + `/student/${id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          store.getStudent = res;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return { getOneStudent, studentInfo };
});
