<template>
  <main class="leading-normal tracking-normal text-white gradient">
    <Nav />

    <div data-aos="fade-up" class="pt-24 px-10">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <div
          class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
        >
          <p class="uppercase tracking-loose w-full">Bizni kuzatib boring!</p>
          <p class="my-4 text-4xl font-bold mb-8">
            Bizning kurslarimizda qatnashing, bilimingizni oshiring va o'z
            natijalaringizni onlayn kuzatib boring!
          </p>
          <!-- <button
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Obuna bo'lish
          </button> -->
          <button
            @click="$router.push('/results')"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Natijalarni ko'rish
          </button>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" src="../assets/images/main.png" />
        </div>
      </div>
    </div>
    <div class="relative -mt-12 lg:-mt-24">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            ></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4"
              opacity="0.200000003"
            ></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <section id="about" class="bg-white border-b py-8">
      <div class="container max-w-5xl pt-10 mx-auto m-8">
        <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Haqida
        </h2>
        <div data-aos="fade-up" class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <div data-aos="fade-up-right" class="flex flex-wrap items-center">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Natijalarni onlayn kuzatib boring
            </h3>
            <p class="text-gray-600 mb-8">
              Bizning kurslarimizda qatnashing va o'zingizning yoki
              farzandingizning natijalarini bizning websaytimiz orqali onlayn
              kuzatib boring!
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="../assets/images/mobile.png" alt="" />
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          class="flex flex-wrap flex-col-reverse justify-center items-center sm:flex-row"
        >
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img
              src="https://media.istockphoto.com/id/1084380192/vector/green-blackboard-mathematical-with-thin-line-shapes-and-inscriptions-vector.jpg?s=612x612&w=0&k=20&c=-_d_UDOoWdrWe2KUWPTqNzUSvNSNPLL4-Rj89TP7Nio="
              alt=""
            />
          </div>
          <div class="text-gray-800 w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl font-bold leading-none mb-3">
                Kurslarimiz
              </h3>
              <p class="text-gray-600 mb-8">
                Bizning kurslarimiz matematika fani bo'yicha bo'lib, siz bu
                kursda matematikaga oid barcha bilimlarni olishingiz mumkin.
              </p>
              <p class="text-lg">✔ Boshlang'ich darajalar kursi</p>
              <p class="text-lg">✔ Majburiy blok matematika kursi</p>
              <p class="text-lg">✔ Asosiy blok matematika kursi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="customers" class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Faol o'quvchilarimiz
        </h2>
        <!-- component -->
        <div class="mx-auto overflow-hidden px-4 sm:px-6 lg:px-4 py-12">
          <div
            class="flex overflow-hidden overflow-x-auto"
            data-aos="zoom-in-up"
          >
            <div
              class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center"
            >
              <div class="mb-4">
                <img
                  class="object-center object-cover h-40 w-40 rounded-full min-w-[10rem]"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div
              class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center"
            >
              <div class="mb-4">
                <img
                  class="object-center object-cover h-40 w-40 rounded-full min-w-[10rem]"
                  src="https://img.freepik.com/free-photo/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture_197531-24666.jpg"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div
              class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center"
            >
              <div class="mb-4">
                <img
                  class="object-center object-cover h-40 w-40 rounded-full min-w-[10rem]"
                  src="https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
            <div
              class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center"
            >
              <div class="mb-4">
                <img
                  class="object-center object-cover h-40 w-40 rounded-full min-w-[10rem]"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div
              class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center"
            >
              <div class="mb-4">
                <img
                  class="object-center object-cover h-40 w-40 rounded-full min-w-[10rem]"
                  src="https://img.freepik.com/free-photo/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture_197531-24666.jpg"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div
              class="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center"
            >
              <div class="mb-4">
                <img
                  class="object-center object-cover h-40 w-40 rounded-full min-w-[10rem]"
                  src="https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing" class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Narxlar
        </h2>
        <div data-aos="fade-up" class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <div
          class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"
        >
          <div
            data-aos="zoom-out-down"
            class="flex flex-col w-5/6 lg:w-1/4 shadow-lg shadow-black rounded-3xl rounded-r-none overflow-hidden mx-auto lg:mx-0 mt-4"
          >
            <div
              class="flex-1 bg-white rounded-3xl text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Tekin
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Dars jarayonini kuzatish</li>
                <li class="border-b py-4">Bilimingizni tekshirib ko'rish</li>
                <li class="border-b py-4">Dastlabki 3 dars</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="w-full text-3xl text-gray-600 font-bold text-center">
                0
                <span class="text-base">so'm</span>
              </div>
              <div class="flex items-center justify-center">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Ariza qoldirish
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            class="flex flex-col w-5/6 lg:w-1/3 rounded-3xl text-white overflow-hidden lg:mx-0 -mb-5 -mx-5 bg-black mt-4 sm:-mt-6 shadow-lg shadow-black z-10"
          >
            <div
              class="flex-1 bg-black rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="w-full p-8 font-bold text-center">
                <h1 class="text-3xl">Matematika kurs</h1>
                <p>
                  Ariza qoldirish tugmasi orqali bizga ma'lumotlaringizni
                  qoldiring
                </p>
              </div>
              <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul class="w-full text-center text-base">
                <li class="border-b py-4 px-2">
                  Kursimizda 3 kun davomida hech qanday to'lovsiz qatnashing
                </li>
                <li class="border-b py-4 px-2">
                  Biz sizning bilimingizni tekshirgan holda, ma'lum guruhimizga
                  qabul qilamiz.
                </li>
                <li class="border-b py-4 px-2">
                  Kursimizda haftalik va oylik testlar bo'ladi
                </li>
                <li class="border-b py-4 px-2">
                  Natijalarni onlayn kuzatib borishingiz mumkin.
                </li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <!-- <div class="w-full pt-6 text-4xl font-bold text-center">
                120 000
                <span class="text-base">/ so'm</span>
              </div> -->
              <div class="flex items-center justify-center">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Ariza qoldirish
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-3xl rounded-l-none shadow-lg shadow-black overflow-hidden bg-white mt-4"
          >
            <div
              class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 font-bold text-center border-b-4">Asosiy</div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Kunlik vazifalar</li>
                <li class="border-b py-4">Haftalik testlar</li>
                <li class="border-b py-4">Oylik testlar</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div 
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
              >
                120 000
                <span class="text-base">/ so'm</span>
              </div>
              <div class="flex items-center justify-center">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Ariza qoldirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <svg
      data-aos="zoom-in-up"
      class="wave-top"
      viewBox="0 0 1439 147"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#f8fafc">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g
              transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <section
      id="contact"
      data-aos="zoom-in-up"
      class="container mx-auto text-center py-6 mb-12"
    >
      <h2
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        Xabaringizni qoldiring!
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <h3 class="my-4 text-3xl leading-tight">
        O'zingizni qiziqtirgan savollaringizni yozib qoldiring!
      </h3>
      <button
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Xabar qoldirish
      </button>
    </section>
    <LayoutFooter />
  </main>
</template>

<script setup></script>
