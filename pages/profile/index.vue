<template>
  <main class="min-h-[calc(100vh_-_65px)] bg-gray-100">
    <section class="flex flex-wrap justify-center gap-10 p-5">
      <div class="max-w-[520px] min-w-[300px] w-full bg-white p-8 rounded-xl">
        <div
          class="flex justify-between items-center text-2xl pb-6 mb-8 border-b-2"
        >
          <h1>Shaxsiy ma'lumotlar</h1>
          <div class="cursor-pointer">
            <img src="../../assets/svg/edit.svg" alt="" />
          </div>
        </div>
        <div>
          <img
            class="w-32 h-32"
            src="../../assets/images/userplaceholder.png"
            alt=""
          />
          <p class="italic font-medium pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum,
            error architecto ad ex quo ea dicta inventore, voluptatum velit
          </p>
        </div>
        <div class="border-b-2 py-4 space-y-3">
          <h1 class="text-[#6188FF]">To'liq ism</h1>
          <p class="font-semibold">Shahboz Mamatkarimov</p>
        </div>
        <div class="border-b-2 py-4 space-y-3">
          <h1 class="text-[#6188FF]">Telefon raqam</h1>
          <p class="font-semibold">+998 99 142 23 03</p>
        </div>
        <div class="border-b-2 py-4 space-y-3">
          <h1 class="text-[#6188FF]">Manzil</h1>
          <p class="font-semibold">
            Samarqand, Kattaqo'rg'on tumani, Payshanba, Yodgorxo'ja
          </p>
        </div>
      </div>

      <div class="max-w-[520px] min-w-[300px] w-full bg-white p-8 rounded-xl">
        <div
          class="flex justify-between items-center text-2xl pb-6 mb-8 border-b-2"
        >
          <h1>Oylik to'lov</h1>
        </div>
        <div class="border-b-2 py-4 space-y-3">
          <h1 class="text-[#6188FF]">Kursni boshlagan sanangiz</h1>
          <p class="font-semibold">10/08/2023</p>
        </div>
        <div class="border-b-2 py-4 space-y-3">
          <h1 class="text-[#6188FF]">To'lovning oxirgi sanasi</h1>
          <p class="font-bold text-red-600">10/09/2023</p>
        </div>
        <div class="border-b-2 py-4 space-y-3">
          <div
            class="flex items-center p-4 text-sm text-red-600 rounded-lg bg-red-200"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
              />
            </svg>
            <div>
              <span class="font-medium">Iltimos!</span> Oylikni vaqtida
              to'lashingizni so'raymiz!
            </div>
          </div>
        </div>
        <div
          class="flex items-center p-4 mb-4 text-sm rounded-lg bg-gray-800 text-yellow-300"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <div>
            To'lav vaqtiga 6 kun qoldi
          </div>
        </div>
      </div>
    </section>

    <section
      v-show="store.editProfile"
      class="flex justify-center bg-[#ffffff23] top-0 left-0 min-w-full items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div class="relative w-full max-w-sm max-h-full">
        <form
          @submit.prevent="handleSubmit"
          class="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700"
        >
          <div
            class="flex items-start justify-between py-4 px-6 border-b rounded-t border-gray-600"
          >
            <h3 v-if="!store.edit" class="text-xl font-semibold text-white/50">
              Guruh qo'shish
            </h3>
            <h3 v-else class="text-xl font-semibold text-white/50">
              Guruh ma'lumotlarini o'zgartirish
            </h3>
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
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="form.name"
                type="text"
                maxlength="100"
                id="name"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Guruh nomi <span class="required">*</span></label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="form.description"
                type="text"
                maxlength="100"
                id="description"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="description"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Guruh tavfsifi</label
              >
            </div>
          </div>
          <!-- Modal footer -->
          <div
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
              v-if="!store.edit"
              type="submit"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              Yaratish
            </button>
            <button
              v-else
              type="submit"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              O'zgartirish
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";

const store = reactive({
  editProfile: false,
});

const form = reactive({
  name: "",
  description: "",
});

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post(
    "https://api.imgbb.com/1/upload",
    formData,
    {
      params: {
        key: "04f841bed370d686fb72279fb8a11160",
      },
    }
  );

  return response.data.data.url;
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  uploadImage(file)
    .then((imageUrl) => {
      console.log("Image uploaded: ", imageUrl);
    })
    .catch((error) => {
      console.error("Error uploading image: ", error);
    });
}
</script>

<style lang="scss" scoped></style>
