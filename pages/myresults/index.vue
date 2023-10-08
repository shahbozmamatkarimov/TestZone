<template>
  <main>
    <LayoutNavbar />
    <section class="container px-40 mx-auto">
      <div class="flex flex-col items-center w-full py-10">
        <!-- Component Start -->
        <div class="flex items-center justify-between w-full">
          <h1 class="text-lg text-gray-400 font-medium">2020-21 Season</h1>
          <button
            @click="$router.back()"
            class="flex items-center text-lg text-gray-200 bg-blue-600 rounded-lg px-5 py-1"
          >
            <span class="text-xl font-bold bx bx-chevron-left"></span> Orqaga
            qaytish
          </button>
        </div>
        <div class="flex flex-col w-full mt-6">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div class="shadow overflow-hidden sm:rounded-lg">
                <table class="min-w-full text-sm text-gray-400 text-center">
                  <thead class="bg-gray-800 text-xs uppercase font-medium">
                    <tr>
                      <th scope="col" class="px-6">№</th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        Mavzu
                      </th>
                      <th scope="col" class="px-6 py-3 tracking-wider">
                        Boshlanish vaqti
                      </th>
                      <th scope="col" class="px-6 py-3 tracking-wider">
                        Tugash vaqti
                      </th>
                      <th scope="col" class="px-6 py-3 tracking-wider">
                        Test soni
                      </th>
                      <th scope="col" class="px-6 py-3 tracking-wider">
                        Variantlar
                      </th>
                      <th scope="col" class="px-6 py-3 tracking-wider">
                        O'tish bali
                      </th>
                      <th scope="col" class="px-6 py-3 tracking-wider">
                        Javob kiritish
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-800">
                    <tr
                      v-for="i in useStore?.studentInfo?.group?.tests"
                      :key="i.id"
                      :class="
                        checkTestAnswer(i.id) ? 'bg-gray-800' : 'bg-black'
                      "
                      class="bg-opacity-20"
                    >
                      <td>1</td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        <img
                          class="w-5"
                          src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                          alt=""
                        />
                        <span class="ml-2 font-medium">{{ i.title }}</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ i.start_time?.slice(0, 10) }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ i.end_time?.slice(0, 10) }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ i.test_count }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ i.variants }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ i.min_ball }}
                      </td>
                      <td class="flex justify-center p-2 whitespace-nowrap">
                        <button
                          v-if="checkTestAnswer(i.id)"
                          @click="() => getOneTest(i.id, 'show')"
                          class="bg-gray-700 px-2 hover:bg-gray-600 rounded-md"
                        >
                          <i class="bx bx-show text-white text-lg"></i>
                        </button>
                        <button
                          v-else
                          @click="() => getOneTest(i.id, 'edit')"
                          class="bg-gray-700 px-2 hover:bg-gray-600 rounded-md"
                        >
                          <i class="bx bx-key text-white rotate-45 text-lg"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Component End  -->
      </div>
    </section>

    <!-- Modal -->
    <section
      v-if="store.modalCreate"
      class="flex justify-center bg-[#ffffff23] top-0 left-0 min-w-full items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div class="relative w-full max-w-md max-h-full">
        <form
          @submit.prevent="handleSubmit"
          class="relative bg-gray-700 rounded-lg shadow"
        >
          <div
            class="flex items-start justify-between py-4 px-6 border-b rounded-t border-gray-600"
          >
            <h3 class="text-xl font-semibold text-white/50">Javob kiritish</h3>
            <button
              @click="closeModal"
              type="button"
              class="text-white/50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <i class="bx bx-x text-2xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 text-white/50">
            <div class="relative z-0 w-full group">
              {{ getTestAnswer() }}
              <h1 v-if="getTestAnswer() ? '' : 'hidden'">
                Javobingizni kiriting
              </h1>
              <h1 v-else>Sizning natijangiz!</h1>
              <p class="py-1">Variantlar: {{ store.test?.variants }}</p>
              <a-input
                @input="(e) => answersInput(e)"
                size="large"
                :class="getTestAnswer() ? 'pointer-events-none' : ''"
                v-model:value="store.answers"
                show-count
                :maxlength="store.test?.test_count"
                required
              />
            </div>
          </div>
          <!-- Modal footer -->
          <div
            v-if="getTestAnswer() ? '' : 'hidden'"
            class="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600"
          >
            <button
              @click="closeModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              Yuborish
            </button>
          </div>
        </form>
        <div
          v-if="getTestAnswer() ? 'hidden' : ''"
          class="bg-gray-700 text-white font-medium px-5 pb-10 space-y-4"
        >
          <p>To'g'ri javoblar: {{ store.test.answers }}</p>
          <p>
            Siz {{ store.test?.answers?.length }} ta savoldan
            {{ getUserBall() }} ta topdingiz
          </p>
          <ul
            v-for="(i, index) in store.answers"
            :key="i"
            class="flex gap-3 border-b pb-2 border-gray-600"
          >
            <li class="flex justify-center items-center w-5 h-5 -mr-2">
              {{ index + 1 }}.
            </li>
            <li
              :class="
                store.test.answers[index] == 'A'
                  ? 'bg-green-600 text-white'
                  : i == 'A'
                  ? 'bg-red-600 text-white'
                  : store.test.answers[index] == 'A'
                  ? 'bg-green-600 text-white'
                  : ''
              "
              class="flex justify-center items-center rounded-full w-5 h-5"
            >
              A
            </li>
            <li
              :class="
                i == store.test.answers[index] && i == 'B'
                  ? 'bg-green-600 text-white'
                  : i == 'B'
                  ? 'bg-red-600 text-white'
                  : store.test.answers[index] == 'B'
                  ? 'bg-green-600 text-white'
                  : ''
              "
              class="flex justify-center items-center rounded-full w-5 h-5"
            >
              B
            </li>
            <li
              :class="
                i == store.test.answers[index] && i == 'C'
                  ? 'bg-green-600 text-white'
                  : i == 'C'
                  ? 'bg-red-600 text-white'
                  : store.test.answers[index] == 'C'
                  ? 'bg-green-600 text-white'
                  : ''
              "
              class="flex justify-center items-center rounded-full w-5 h-5"
            >
              C
            </li>
            <li
              :class="
                i == store.test.answers[index] && i == 'D'
                  ? 'bg-green-600 text-white'
                  : i == 'D'
                  ? 'bg-red-600 text-white'
                  : store.test.answers[index] == 'D'
                  ? 'bg-green-600 text-white'
                  : ''
              "
              class="flex justify-center items-center rounded-full w-5 h-5"
            >
              D
            </li>
            <li class="ml-auto mr-2 float-right">
              <img
                v-if="i != store.test.answers[index]"
                class="bg-white rounded-full h-5 w-5"
                src="../../assets/svg/false.svg"
                alt=""
              />
              <img
                v-else
                class="bg-white rounded-full h-5 w-5"
                src="../../assets/svg/true.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Delete Modal -->
    <section
      v-show="store.modalDelete"
      class="flex justify-center bg-[#ffffff23] top-0 left-0 min-w-full items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div class="relative w-full max-w-sm max-h-full">
        <div class="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700">
          <div
            class="flex items-start justify-between py-4 px-6 border-b rounded-t border-gray-600"
          >
            <h3 class="text-xl font-semibold text-white/50">O'chirish</h3>
            <button
              @click="() => (store.modalDelete = false)"
              type="button"
              class="text-white/50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <i class="bx bx-x text-2xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 text-white/50">
            <h1 class="text-2xl text-center">
              Siz ushbu o'quvchini o'chirishni xohlaysizmi?
            </h1>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-center p-6 space-x-2 rounded-b dark:border-gray-600"
          >
            <button
              @click="() => (store.modalDelete = false)"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center"
            >
              Yo'q
            </button>
            <button
              @click="() => deleteStudent()"
              class="text-gray-500 bg-white hover:bg-red-500 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              Ha
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useStudentStore } from "@/store";
import { message } from "ant-design-vue";

const useStore = useStudentStore();
const runtimeConfig = useRuntimeConfig();
const baseURL = runtimeConfig.public.baseURL;

const store = reactive({
  modalCreate: false,
  modalDelete: false,
  answers: "",
  test: "",
  token: "",
  test_id: "",
  isAnswerAlready: false,
  student_id: "",
});

const answersInput = (e) => {
  if (e.inputType !== "insertText") return;
  store.answers = store.answers.toUpperCase();
  for (let i of store.test?.variants) {
    if (e.target.value.slice(-1).toLowerCase() === i.toLowerCase()) {
      return;
    }
  }

  store.answers = store.answers.slice(0, -1);
};

function closeModal() {
  store.modalCreate = false;
  store.answers = "";
}

const checkTestAnswer = (id) => {
  for (let i of useStore?.studentInfo?.group?.tests) {
    if (i.id == id) {
      const nowDate = new Date().getTime();
      const endDate = new Date(i.end_time).getTime();
      if (nowDate > endDate) {
        return true;
      }
    }
  }

  for (let i of useStore.studentInfo.answers) {
    if (i.test_id == id) {
      // if (store.isAnswerAlready) {
      //   message.warning("messageContent");
      // }
      return i.answer;
    }
  }
  return false;
};

const getUserBall = () => {
  let ball = 0;

  for (let i = 0; i < store.test?.answers?.length; i++) {
    console.log(store.answers[i], store.test?.answers[i]);
    if (store.answers[i] == store.test?.answers[i]) {
      ball += 1;
    }
  }
  return ball;
};

const getTestAnswer = () => {
  for (let i of useStore?.studentInfo?.group?.tests) {
    if (i.id == store.test_id) {
      const nowDate = new Date().getTime();
      const endDate = new Date(i.end_time).getTime();
      if (nowDate > endDate) {
        for (let i of useStore.studentInfo.answers) {
          console.log(store.test_id, i.test_id);
          if (i.test_id == store.test_id) {
            store.answers = i.answer;
            return true;
          }
        }
      }
    }
  }
  return false;
};

const handleSubmit = () => {
  if (store.answers.length != store.test.test_count) {
    return;
  }
  for (let i of useStore?.studentInfo?.group?.tests) {
    if (i.id == store.test_id) {
      const nowDate = new Date().getTime();
      const endDate = new Date(i.end_time).getTime();
      if (nowDate > endDate) {
        alert("Test vaqti tugagan!");
        closeModal();
        return;
      }
    }
  }

  const data = {
    student_id: localStorage.getItem("student_id"),
    type: "variants",
    answer: store.answers,
    test_id: store.test_id,
  };

  fetch(baseURL + "/answers", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      fetch(baseURL + `/tests/${res.answer?.test_id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.token,
        },
      })
        .then((res) => res.json())
        .then((test) => {
          console.log(test);

          let ball = 0;

          for (let i = 0; i < test?.answers?.length; i++) {
            if (res.answer?.answer[i] == test?.answers[i]) {
              ball += 1;
            }
          }

          const data = {
            student_id: store.student_id,
            true_answers: ball,
            false_answers: test.test_count - ball,
            test_id: test.id,
          };

          fetch(baseURL + "/results", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + store.token,
            },
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              showSuccess("Natijalar qo'shildi");
            })
            .catch((err) => {
              // showError("error");
            });
        })
        .catch((err) => {
          console.log(err);
          // showError("Ma'lumotlar topilmadi");
        });
      console.log(res);
      useStore.getOneStudent();
      closeModal();
    })
    .catch((err) => {
      console.log(err);
      // showError("error");
    });
};

const getOneTest = (id, show) => {
  if (show == "show") {
    store.isAnswerAlready = true;
  }
  store.test_id = id;

  if (store.isAnswerAlready) {
    for (let i of useStore?.studentInfo?.group?.tests) {
      if (i.id == store.test_id) {
        const nowDate = new Date().getTime();
        const endDate = new Date(i.end_time).getTime();
        if (nowDate < endDate) {
          alert("Javoblarni test vaqti tugagandan so'ng ko'rishingiz mumkin!");
          closeModal();
          return;
        }
      }
    }
  }
  fetch(baseURL + `/tests/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      store.test = res;
      store.modalCreate = true;
    })
    .catch((err) => {
      console.log(err);
      // showError("Ma'lumotlar topilmadi");
    });
};

onMounted(() => {
  store.student_id = localStorage.getItem("student_id");
  store.token = localStorage.getItem("token");
  if (!useStore.studentInfo) {
    useStore.getOneStudent();
  }
});
</script>

<style lang="scss" scoped></style>
