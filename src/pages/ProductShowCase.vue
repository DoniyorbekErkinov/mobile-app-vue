<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Hero Carousel -->
      <div class="lg:col-span-3 relative">
        <div class="relative h-[400px] rounded-lg overflow-hidden">
          <!-- Slides -->
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="absolute inset-0 transition-opacity duration-500"
            :class="{ 'opacity-0': currentSlide !== index }"
          >
            <img
              :src="slide.image"
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <h2 class="text-4xl font-bold text-white text-center max-w-lg">
                {{ slide.title }}
              </h2>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button
            @click="prevSlide"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          >
            <ChevronLeftIcon class="w-6 h-6" />
          </button>
          <button
            @click="nextSlide"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          >
            <ChevronRightIcon class="w-6 h-6" />
          </button>

          <!-- Navigation Dots -->
          <div
            class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"
          >
            <button
              v-for="(_, index) in slides"
              :key="index"
              @click="currentSlide = index"
              class="w-2 h-2 rounded-full transition-colors"
              :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
            ></button>
          </div>
        </div>
      </div>

      <!-- Product Card -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-lg p-4">
          <!-- Promotion Label -->
          <div class="flex justify-between items-start mb-4">
            <span
              class="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded"
            >
              АКЦИЯ
            </span>
            <div class="text-right">
              <div class="text-2xl font-bold text-blue-600">190 000 ₽</div>
              <div class="text-gray-400 text-sm line-through">240 000 ₽</div>
            </div>
          </div>

          <!-- Product Image -->
          <div class="aspect-square mb-4">
            <img
              src="../assets/motor.jfif"
              alt="Лодочный мотор Suzuki DF9.9BRS"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Product Info -->
          <h3 class="text-lg font-medium mb-2">
            Лодочный мотор Suzuki DF9.9BRS
          </h3>

          <!-- Promotion Period -->
          <div class="text-sm text-gray-600">
            Акция действует до
            <span class="text-blue-600 font-medium">31.08.2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import img1 from "../assets/img.png";
const slides = ref<any>([
  {
    image: img1,
    title: "Почувствуй скорость и экстрим",
  },
  {
    image: img1,
    title: "Откройте новые горизонты",
  },
  {
    image: img1,
    title: "Мощность в каждом движении",
  },
  {
    image: img1,
    title: "Свобода движения",
  },
  {
    image: img1,
    title: "Управляй мечтой",
  },
]);

const currentSlide = ref<number>(0);
const autoplayInterval = ref<any>(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(nextSlide, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>
