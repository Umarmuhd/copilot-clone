<script setup lang="ts">
import { reactive } from "vue";
import UserMenu from "./components/user-menu.vue";
import { Toaster, toast } from 'vue-sonner'
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'
import client from "./data/client/index";
import { API_ENDPOINTS } from "./data/client/endpoints";


// Access QueryClient instance
const queryClient = useQueryClient()

const form = reactive({
  content: '',
});

// Mutation
const mutation = useMutation({
  mutationFn: client.chats.create,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.CHATS] })
  },
})


const onSubmit = async () => {
  console.log('form', form.content);

  toast.promise(mutation.mutateAsync({ content: form.content, userId: "lore" }, {
    onSuccess: () => {
      toast.success("Message sent successfully");
      form.content = '';
    },
    onError: () => {
      toast.error('Error occurred!');
    },
  }), {
    loading: 'Loading...',
  });
};

</script>

<!-- App.vue -->
<template>
  <div class="bg-background" id="app">
    <!-- Background Gradients -->
    <div class="fixed inset-0">
      <div class="absolute size-full bg-gradient-chat-light dark:bg-midnight-850 dark:bg-none"></div>
      <div class="absolute size-full bg-gradient-discover-light dark:bg-gradient-discover-dark"></div>
    </div>

    <!-- Main Content -->
    <main class="relative overflow-hidden">

      <div class="absolute end-6 top-6 flex flex-col items-end z-30">
        <UserMenu />
      </div>
      <!-- Main Content Area -->
      <div class="h-dvh">
        <div class="flex size-full flex-col items-center overflow-y-auto overflow-x-hidden overscroll-contain pt-24">
          <div class="mb-[96px] w-full max-w-4xl px-6">
            <!-- For Your Evening Section -->
            <section class="sm:pb-20 pb-16" aria-label="For your evening">
              <h1 class="text-center text-4xl pb-9 font-semibold">
                For your evening
              </h1>
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <!-- Cards will go here -->
                <button type="button"
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] col-span-2 aspect-square row-span-2">
                  <div class="relative isolate size-full overflow-hidden rounded-5xl">
                    <img alt="..." class="absolute inset-0 z-0 overflow-hidden" src="./assets/images/house.jpeg" />
                    <div
                      class="relative z-10 flex h-full flex-col justify-end gap-3 bg-gradient-to-t from-dark via-dark via-45% to-[transparent] p-8 text-start text-light">
                      <div class="text-sm">Copilot Daily</div>
                      <h2 class="line-clamp-4 break-words text-2xl">
                        UK house prices stagnate, and more
                      </h2>
                      <div class="">
                        <div
                          class="w-min bg-light text-dark relative flex items-center justify-center text-xs min-h-8 min-w-8 gap-x-1.5 px-2.5 py-1 rounded-lg before:rounded-lg before:absolute before:inset-0 before:pointer-events-none before:border before:border-transparent before:contrast-more:border-2 outline-2 outline-offset-1 focus-visible:z-[1] focus-visible:outline focus-visible:outline-stroke-900">
                          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-3">
                            <path
                              d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8V9H11.5C11.2239 9 11 9.22386 11 9.5V15.5C11 15.7761 11.2239 16 11.5 16H14C15.1046 16 16 15.1046 16 14V8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8V14C0 15.1046 0.895431 16 2 16H4.5C4.77614 16 5 15.7761 5 15.5V9.5C5 9.22386 4.77614 9 4.5 9H1V8ZM1 10H4V15H2C1.44772 15 1 14.5523 1 14V10ZM15 10V14C15 14.5523 14.5523 15 14 15H12V10H15Z"
                              fill="currentColor"></path>
                          </svg>Listen
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <!-- Additional cards would follow the same pattern -->
                <button
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-small row-span-1 before:rounded-7xl aspect-[2/1] h-40 sm:h-auto bg-white">
                  <div class="flex h-full gap-4 p-3 text-start text-md">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 shrink-0 rounded-5xl md:rounded-6xl"
                      src="./assets/images/bed.jpeg" alt="An illustration of fluttering fairy" draggable="false"
                      aria-hidden="true" role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end px-2 pb-2">
                      <h2 class="line-clamp-4 break-words text-xl font-medium">
                        We can co-create a bedtime story
                      </h2>
                    </div>
                  </div>
                </button>
                <button
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-small row-span-1 before:rounded-7xl aspect-[2/1] h-40 sm:h-auto bg-white">
                  <div class="flex h-full gap-4 p-3 text-start text-md">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 shrink-0 rounded-5xl md:rounded-6xl"
                      src="./assets/images/meal.jpeg" alt="An illustration of fluttering fairy" draggable="false"
                      aria-hidden="true" role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end px-2 pb-2">
                      <h2 class="line-clamp-4 break-words text-xl font-medium">
                        We can co-create a bedtime story
                      </h2>
                    </div>
                  </div>
                </button>
              </div>
            </section>

            <section class="sm:pb-20 pb-16" aria-label="Topics I thought you’d enjoy">
              <h1 class="text-center text-4xl pb-9 font-semibold">
                Topics I thought you’d enjoy
              </h1>
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <!-- Cards will go here -->
                <button type="button" data-testid="discover-card"
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-large row-span-2 aspect-square before:rounded-8xl bg-white">
                  <div class="flex h-full gap-4 p-3 text-start flex-col text-lg sm:text-md md:text-lg">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 rounded-b-5xl rounded-t-7xl"
                      src="https://copilot.microsoft.com/th?id=ODSWG.9ebc71f6-07e0-430b-871b-d6792dd789e6&amp;forceJpeg=1&amp;o=6"
                      alt="An illustration of two coffee cups" draggable="false" aria-hidden="true" role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end shrink-0 items-center pb-5 pe-4 px-0">
                      <h2 class="line-clamp-4 break-words text-2xl text-start font-medium">
                        How to reconnect with a friend
                      </h2>
                    </div>
                  </div>
                </button>
                <!-- Additional cards would follow the same pattern -->
                <button
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-small row-span-1 before:rounded-7xl aspect-[2/1] h-40 sm:h-auto bg-white">
                  <div class="flex h-full gap-4 p-3 text-start text-md">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 shrink-0 rounded-5xl md:rounded-6xl"
                      src="./assets/images/lego.jpeg" alt="An illustration of fluttering fairy" draggable="false"
                      aria-hidden="true" role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end px-2 pb-2">
                      <h2 class="line-clamp-4 break-words text-xl font-medium">
                        Educational toys for any age
                      </h2>
                    </div>
                  </div>
                </button>
                <button
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-small row-span-1 before:rounded-7xl aspect-[2/1] h-40 sm:h-auto bg-white">
                  <div class="flex h-full gap-4 p-3 text-start text-md">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 shrink-0 rounded-5xl md:rounded-6xl"
                      src="./assets/images/vacation.jpeg" alt="An illustration of fluttering fairy" draggable="false"
                      aria-hidden="true" role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end px-2 pb-2">
                      <h2 class="line-clamp-4 break-words text-xl font-medium">
                        I’ll suggest places for solo travel
                      </h2>
                    </div>
                  </div>
                </button>
              </div>
            </section>

            <section class="sm:pb-20 pb-16" aria-label="Something fresh">
              <h1 class="text-center text-4xl pb-9 font-semibold">
                Something fresh
              </h1>
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <!-- Cards will go here -->
                <button type="button" data-testid="discover-card"
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-large row-span-2 aspect-square before:rounded-8xl bg-white">
                  <div class="flex h-full gap-4 p-3 text-start flex-col text-lg sm:text-md md:text-lg">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 rounded-b-5xl rounded-t-7xl"
                      src="https://copilot.microsoft.com/th?id=ODSWG.281af9ec-7e71-4bff-9097-c71e20526b42&forceJpeg=1&o=6"
                      alt="An illustration of two coffee cups" draggable="false" aria-hidden="true" role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end shrink-0 items-center pb-5 pe-4 px-0">
                      <h2 class="line-clamp-4 break-words text-2xl text-start font-medium">
                        What's up with those giant pumpkins?
                      </h2>
                    </div>
                  </div>
                </button>
                <!-- Additional cards would follow the same pattern -->
                <button
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-small row-span-1 before:rounded-7xl aspect-[2/1] h-40 sm:h-auto bg-white">
                  <div class="flex h-full gap-4 p-3 text-start text-md">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 shrink-0 rounded-5xl md:rounded-6xl"
                      src="https://copilot.microsoft.com/th?id=ODSWG.e43dad11-7ff0-4c0a-90ac-9b332ced50dc&forceJpeg=1&o=6"
                      alt="An illustration of fluttering fairy" draggable="false" aria-hidden="true"
                      role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end px-2 pb-2">
                      <h2 class="line-clamp-4 break-words text-xl font-medium">
                        Rucking? Oh, it’s not just walking!
                      </h2>
                    </div>
                  </div>
                </button>
                <button
                  class="relative size-full max-h-128 rounded-7xl pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] before:absolute before:inset-x-px before:-top-0 before:bottom-0.5 focus:outline-none focus:before:ring-stroke-800 focus-visible:before:ring-2 contrast-more:border-2 contrast-more:focus:border-0 col-span-2 t-discover-card-small row-span-1 before:rounded-7xl aspect-[2/1] h-40 sm:h-auto bg-white">
                  <div class="flex h-full gap-4 p-3 text-start text-md">
                    <img
                      class="t-discover-card-image aspect-square min-h-0 bg-black/5 object-cover dark:bg-black/20 shrink-0 rounded-5xl md:rounded-6xl"
                      src="https://copilot.microsoft.com/th?id=ODSWG.5a7d30bf-d67f-4cdc-a5e9-8177fe8b8594&forceJpeg=1&o=6"
                      alt="An illustration of fluttering fairy" draggable="false" aria-hidden="true"
                      role="presentation" />
                    <div class="flex min-h-16 min-w-0 items-end px-2 pb-2">
                      <h2 class="line-clamp-4 break-words text-xl font-medium">
                        Halloween costumes from stuff you already have
                      </h2>
                    </div>
                  </div>
                </button>
              </div>
            </section>

            <!-- Footer -->
            <div class="mb-12 text-center text-stone-550 text-sm dark:text-slate-350 sm:mb-16">
              Copilot uses AI. Check for mistakes.
            </div>
          </div>
        </div>
      </div>

      <!-- Composer Section -->
      <div class="pointer-events-none absolute bottom-0 flex w-full z-10">

        <!-- Bottom Fade -->
        <div class="t-bottom-fade absolute bottom-0 mx-4 box-content w-[calc(100% - 2rem)] pt-24 h-16">
          <div class="fixed inset-0">
            <div class="absolute bg-gradient-chat-light size-full">
            </div>
            <div class="absolute size-full bg-gradient-discover-light"></div>
          </div>
        </div>

        <!-- Input Container -->
        <div class="relative mb-4 flex w-full flex-col items-center px-3 sm:mb-8">
          <div class="relative max-h-full min-h-composer min-w-16 max-w-chat">
            <!-- Input Background -->
            <div class="absolute inset-0 rounded-[28px] shadow-lg"></div>
            <div class="relative overflow-hidden backdrop-blur-2xl backdrop-saturate-200 rounded-[28px]">
              <!-- Input Box -->
              <div class="pointer-events-auto relative flex flex-col z-10 rounded-[28px] shadow-sm">
                <div class="relative flex max-h-full max-w-chat justify-center p-2 items-end">
                  <!-- History Button -->
                  <div class="relative my-1 shrink-0 size-10">
                    <button type="button"
                      class="absolute flex size-10 items-center justify-center rounded-xl p-2 text-foreground-800">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path
                          d="M12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 11.6236 4.52772 11.2538 4.58123 10.8923C4.64845 10.4382 4.31609 10 3.85708 10C3.48623 10 3.161 10.2562 3.10471 10.6228C3.03576 11.0718 3 11.5317 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.69494 3 7.59227 3.86656 6 5.29168V4.25C6 3.83579 5.66421 3.5 5.25 3.5C4.83579 3.5 4.5 3.83579 4.5 4.25V7.25C4.5 7.66421 4.83579 8 5.25 8H8.25C8.66421 8 9 7.66421 9 7.25C9 6.83579 8.66421 6.5 8.25 6.5H6.90093C8.23907 5.25883 10.0309 4.5 12 4.5Z" />
                      </svg>
                    </button>
                  </div>

                  <!-- Upload Button -->
                  <div class="relative my-1 shrink-0 size-10">
                    <button type="button"
                      class="absolute flex size-10 items-center justify-center rounded-xl p-2 text-foreground-800">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path
                          d="M11.7498 3C12.1295 3 12.4434 3.28201 12.4931 3.64808L12.5 3.74985L12.5012 11H19.7543C20.1685 11 20.5043 11.3358 20.5043 11.75C20.5043 12.1297 20.2221 12.4435 19.8561 12.4932L19.7543 12.5H12.5012L12.5032 19.7491C12.5033 20.1633 12.1676 20.4993 11.7534 20.4993C11.3737 20.4993 11.0598 20.2173 11.0101 19.8512L11.0032 19.7494L11.0012 12.5H3.7522C3.33798 12.5 3.0022 12.1642 3.0022 11.75C3.0022 11.3703 3.28435 11.0565 3.65043 11.0068L3.7522 11H11.0012L11 3.75015C10.9999 3.33594 11.3356 3 11.7498 3Z" />
                      </svg>
                    </button>
                  </div>

                  <!-- Text Input -->
                  <form @submit.prevent="onSubmit"
                    class="relative flex grow flex-col overflow-hidden bg-white/90 shadow-composer-input mx-2 rounded-3xl">
                    <div class="flex grow items-end w-auto grow">
                      <div class="relative grow overflow-hidden">
                        <div class="relative flex size-full cursor-text overflow-hidden text-black dark:text-white">
                          <div class="flex grow flex-col gap-4 py-user-input">
                            <div class="max-h-dvh-0.5 overflow-y-auto px-4">
                              <div>
                                <label class="sr-only" for="userInput">Message
                                  Copilot</label>
                                <input
                                  class="block min-h-user-input w-full resize-none overflow-y-hidden whitespace-pre-wrap bg-transparent text-black outline-none placeholder:text-neutral-500/90 text-base h-6"
                                  placeholder="Message Copilot" id="userInput" type="text" v-model="form.content">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <!-- Voice Input Button -->
                  <div class="relative my-1 shrink-0 size-10" style="transform: none; transform-origin: 50% 50% 0px;">
                    <button type="button"
                      class="absolute flex size-10 items-center justify-center rounded-xl fill-foreground-750 p-2 text-foreground-800 fill-foreground-800 active:text-foreground-600 active:fill-foreground-600 dark:active:text-foreground-650 dark:active:fill-foreground-650 bg-transparent hover:bg-black/5 active:bg-black/3 dark:hover:bg-black/30 dark:active:bg-black/20 start-0"
                      aria-hidden="false" aria-label="Talk to Copilot" title="Talk to Copilot"
                      data-testid="audio-call-button" style="transform: none; transform-origin: 50% 50% 0px;">
                      <div class="w-fit" style="opacity: 1; will-change: opacity;"><svg viewBox="0 0 24 24"
                          fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="size-6" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.7673 6.54284C16.7673 3.91128 14.634 1.77799 12.0024 1.77799C9.37089 1.77799 7.2376 3.91129 7.2376 6.54284L7.2376 13.5647C7.2376 16.1963 9.37089 18.3296 12.0024 18.3296C14.634 18.3296 16.7673 16.1963 16.7673 13.5647L16.7673 6.54284ZM12.0024 3.28268C13.803 3.28268 15.2626 4.7423 15.2626 6.54284L15.2626 13.5647C15.2626 15.3652 13.803 16.8249 12.0024 16.8249C10.2019 16.8249 8.74229 15.3652 8.74229 13.5647L8.74229 6.54284C8.74229 4.7423 10.2019 3.28268 12.0024 3.28268Z"
                            fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.0274 8.79987C19.6119 8.79987 19.2751 9.1367 19.2751 9.55221V13.5647C19.2751 17.5813 16.019 20.8374 12.0024 20.8374C7.98587 20.8374 4.72979 17.5813 4.72979 13.5647L4.72979 9.55221C4.72979 9.1367 4.39295 8.79987 3.97744 8.79987C3.56193 8.79987 3.2251 9.1367 3.2251 9.55221L3.2251 13.5647C3.2251 18.4123 7.15485 22.3421 12.0024 22.3421C16.85 22.3421 20.7798 18.4123 20.7798 13.5647V9.55221C20.7798 9.1367 20.443 8.79987 20.0274 8.79987Z"
                            fill="currentColor"></path>
                        </svg></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Toaster richColors position="top-right" />
</template>

<style>
/* Add any additional custom styles here */
.h-composer {
  height: 4rem;
}

.min-h-composer {
  min-height: 4rem;
}

.bg-gradient-chat-light {
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%);
}

.bg-gradient-discover-light {
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.4) 100%);
}

.shadow-composer-input {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.shadow-button-light {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Dark mode gradients */
.dark .bg-gradient-discover-dark {
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 100%);
}

/* Transitions */
.transition-transform {
  transition: transform 0.2s ease-in-out;
}

/* Sizes */
.size-full {
  width: 100%;
  height: 100%;
}

.size-10 {
  width: 2.5rem;
  height: 2.5rem;
}

.size-6 {
  width: 1.5rem;
  height: 1.5rem;
}

.pt-bottom-fade {
  padding-top: 6rem;
}

.w-bottom-fade {
  width: calc(100% - 2rem);
}

.t-bottom-fade {
  -webkit-mask-image: linear-gradient(transparent 0px, black 6rem);
  mask-image: linear-gradient(transparent 0px, #000 6rem);
}

.bg-gradient-chat-light {
  background-image: linear-gradient(180deg, #f8f4f2 50%, #fdedde);
}

.bg-gradient-discover-light {
  background-image: linear-gradient(180deg, #f8f4f2, #fdedde);
}

.max-w-chat {
  max-width: min(100%, 46.5rem);
}

.min-h-composer {
  min-height: 4rem;
}

.py-user-input {
  padding-top: .6875rem;
  padding-bottom: .6875rem;
}

.min-h-user-input {
  min-height: 1.625rem;
}

.max-h-dvh-0\.5 {
  max-height: 50dvh;
}
</style>
