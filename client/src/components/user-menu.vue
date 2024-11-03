<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <path
            d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
            stroke="#FB923C"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
        </svg>
      `,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <path
            d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
            stroke="#FB923C"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
        </svg>
      `,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
          <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
          <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
          <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
          <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
          <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
        </svg>
      `,
  },
]
</script>

<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton
        class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span class="absolute -inset-1.5" />
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full" src="../assets/images/placeholders/avatar.svg" alt="" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-slot="{ active }">
        <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
          Profile</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
        <a href="#"
          :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
        <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
          out</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
  

  