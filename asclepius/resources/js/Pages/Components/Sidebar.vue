<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->

    <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </TransitionChild>

            <div class="fixed inset-0 flex z-40">
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                    <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                            <div class="absolute top-0 right-0 -mr-12 pt-2">
                                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                                    <span class="sr-only">Close sidebar</span>
                                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div class="flex-shrink-0 flex items-center px-4">
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow" />
                            </div>
                            <nav class="mt-5 px-2 space-y-1">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-white hover:bg-indigo-600 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                                    <component :is="item.icon" class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                                    {{ item.name }}
                                </a>
                            </nav>
                        </div>
                        <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
                            <a href="#" class="flex-shrink-0 group block">
                                <div class="flex items-center">
                                    <div>
                                        <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-base font-medium text-white">Tom Cook</p>
                                        <p class="text-sm font-medium text-indigo-200 group-hover:text-white">View profile</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <!-- Force sidebar to shrink to fit close icon -->
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex-1 flex flex-col min-h-0 bg-indigo-700">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow" />
                </div>
                <nav class="mt-5 flex-1 px-2 space-y-1">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-white hover:bg-indigo-600 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                        <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                        {{ item.name }}
                    </a>
                </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
                <a href="#" class="flex-shrink-0 w-full group block">
                    <div class="flex items-center">
                        <div>
                            <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-white">Tom Cook</p>
                            <p class="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>


</template>

<script >
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
    NewspaperIcon,
} from '@heroicons/vue/outline'



export default {
    name: "Dashboard",

    components: {
        Dialog,
        DialogPanel,
        TransitionChild,
        TransitionRoot,
        CalendarIcon,
        ChartBarIcon,
        InboxIcon,
        MenuIcon,
        XIcon,
    },

    setup() {
        const navigation = ref([
            { id: 0, name: 'Dashboard', href: '/admin', icon: HomeIcon, current: false },
            { id: 1, name: 'Questions', href: '/admin/questions', icon: UsersIcon, current: false },
            { id: 1, name: 'Stories', href: '/admin/stories', icon: NewspaperIcon, current: false },
            { id: 2, name: 'Donations', href: '/admin/donations', icon: FolderIcon, current: false },
            // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
            // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
            // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
        ])

        onMounted(() => {

            for (let i = 0; i < navigation.value.length; i++) {
                // console.log(navigation.value[i].href, window.location.pathname)
                if (window.location.pathname == navigation.value[i].href) {
                    navigation.value[i].current = true;
                }

            }


        })

        const sidebarOpen = ref(false)

        return {
            navigation,
            sidebarOpen,
        }
    }
}


</script>