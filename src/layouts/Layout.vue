<template>
  <div class="relative min-h-screen bg-white">
    <!-- Desktop Header -->
    <header class="hidden lg:block border-b">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          <h1 class="text-2xl font-bold">DRIVE MOTO</h1>
          <nav>
            <ul class="flex space-x-6">
              <li>
                <a href="#" class="text-gray-700 hover:text-blue-500"
                  >Магазины</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-700 hover:text-blue-500">Акции</a>
              </li>
              <li>
                <a href="#" class="text-gray-700 hover:text-blue-500"
                  >Доставка и оплата</a
                >
              </li>
            </ul>
          </nav>
          <div class="flex items-center space-x-4">
            <a href="#" class="text-gray-700 hover:text-blue-500">Войти</a>
            <a href="#" class="text-gray-700 hover:text-blue-500"
              >Регистрация</a
            >
            <HeartIcon class="w-6 h-6 text-gray-600" />
            <UserIcon class="w-6 h-6 text-gray-600" />
            <div class="relative">
              <ShoppingCartIcon class="w-6 h-6 text-gray-600" />
              <span
                class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
              >
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile/Tablet Header -->
    <header class="lg:hidden flex items-center justify-between p-4 border-b">
      <button @click="toggleSidebar" class="text-gray-600">
        <MenuIcon class="w-6 h-6" />
      </button>
      <h1 class="text-xl font-bold">DRIVE MOTO</h1>
      <div class="flex items-center space-x-4">
        <HeartIcon class="w-6 h-6 text-gray-600" />
        <UserIcon class="w-6 h-6 text-gray-600" />
        <div class="relative">
          <ShoppingCartIcon class="w-6 h-6 text-gray-600" />
          <span
            class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
          >
            1
          </span>
        </div>
      </div>
    </header>

    <!-- Categories: scrolls in mobile/tablet and adjusts smoothly on desktop -->
    <nav class="border-b">
      <div class="container mx-auto px-4">
        <div class="marquee lg:overflow-x-auto lg:scroll-smooth">
          <ul
            class="marquee-content space-x-4 py-4 lg:mx-auto"
            data-duplicate="Квадроциклы Катера Гидроциклы Лодки Вездеходы Снегоходы Двигатели Запчасти"
          >
            <li v-for="category in categories" :key="category">
              <a href="#" class="text-gray-700 hover:text-blue-500">{{
                category
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Sidebar (visible only on mobile and tablet) -->
    <div
      :class="[
        'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div class="flex flex-col h-full">
        <div class="p-4 border-b">
          <button @click="toggleSidebar" class="text-gray-600">
            <XIcon class="w-6 h-6" />
          </button>
        </div>
        <nav class="flex-1 overflow-y-auto">
          <ul class="p-4 space-y-2">
            <li>
              <a href="#" class="block py-2 text-gray-700 hover:text-blue-500"
                >Войти</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 text-gray-700 hover:text-blue-500"
                >Регистрация</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 text-gray-700 hover:text-blue-500"
                >Избранное</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 text-gray-700 hover:text-blue-500"
                >Корзина</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 text-gray-700 hover:text-blue-500"
                >Магазины</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 text-gray-700 hover:text-blue-500"
                >Акции</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 text-gray-700 hover:text-blue-500"
                >Доставка и оплата</a
              >
            </li>
          </ul>
        </nav>
        <div class="p-4 border-t">
          <p class="text-gray-600">Москва, ул. Науки 25</p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>

    <!-- Overlay (visible only on mobile and tablet when sidebar is open) -->
    <div
      v-if="isSidebarOpen"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import {
  MenuIcon,
  XIcon,
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
} from "lucide-vue-next";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const categories = [
  "Квадроциклы",
  "Катера",
  "Гидроциклы",
  "Лодки",
  "Вездеходы",
  "Снегоходы",
  "Двигатели",
  "Запчасти",
];
</script>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.marquee {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

/* Transition to make resizing smooth */
.marquee-content {
  display: inline-flex;
  animation: marquee 20s ease-in-out infinite;
  transition: transform 0.5s ease-in-out;
}

/* Duplicate content for smooth continuous scrolling */
.marquee-content::after {
  content: attr(data-duplicate);
  display: inline-flex;
}

/* Disable animation on larger screens, allow overflow only if necessary */
@media (min-width: 1024px) {
  .marquee-content {
    animation: none;
    transform: scaleX(1); /* Resets to original size smoothly */
  }
}
</style>
