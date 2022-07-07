<template>
    <div class="bg-white">
        <Navbar />
        <main>

            <div class="relative">
                <!--            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> -->
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div class="absolute inset-0">
                            <img class="h-full w-full object-cover" src="../../../assets/images/hero.jpg" alt="People working on laptops" />
                            <div class="absolute inset-0 bg-gradient-to-b from-gray-500 to-transparent mix-blend-multiply" />
                        </div>
                        <div class="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-24 lg:px-8">
                            <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span class="block text-white">Take control of your</span>
                                <span class="block text-indigo-200">customer support</span>
                            </h1>
                            <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                    <a href="#" class="btn btn-secondary"> Get started </a>
                                    <a href="#" class="btn btn-primary"> Live demo </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative bg-white mt-12">
<!--                <div class="absolute inset-0" aria-hidden="true">-->
<!--                    <div class="absolute inset-y-0 right-0 w-1/2 bg-indigo-700" />-->
<!--                </div>-->
                <div class="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
                    <div class="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
                        <div class="max-w-lg mx-auto lg:mx-0">
                            <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Full-featured</h2>
                            <p class="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Everything you need to talk with your customers</p>
                            <dl class="mt-12 space-y-10">
                                <div v-for="feature in features" :key="feature.name" class="relative">
                                    <dt>
                                        <div class="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                                            <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        {{ feature.description }}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div class="h-auto bg-indigo-700 sm:rounded-2xl py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:flex lg:justify-center">
                        <div class="max-w-lg mx-auto w-full  lg:mx-4 text-white grid gird-cols-1 gap-4">
                                <h2 class="sr-only">Price</h2>



<!--                                    Recurring Donation section-->
                                    <div class="h-full text-white" >
                                        <p class="text-2xl mt-0 font-extrabold sm:text-3xl">Monthly Donations</p>

                                        <p>Enter in amount to donate each month.</p>

                                        <label for="price" class="block text-sm font-medium">Price</label>
                                        <div class="mt-1 relative rounded-md shadow-sm">
                                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span class="text-gray-500 sm:text-lg"> $ </span>
                                            </div>
                                            <input v-model.lazy="monthly" name="price" id="price" class="input pl-8" aria-describedby="price-currency" />
                                        </div>


                                    </div>

<!--                                    One Time Donation section-->
                                    <div class="h-1/2">
                                        <p class="text-2xl mt-0 font-extrabold sm:text-3xl">One Time Donation</p>

                                        <input class="input"  />
                                    </div>



<!--                                <p class="relative grid grid-cols-2">-->
<!--                                    <span class="flex flex-col text-center">-->
<!--                                        <span class="text-5xl font-extrabold text-white tracking-tight">$99</span>-->
<!--                                        <span class="mt-2 text-base font-medium text-indigo-200">Setup fee</span>-->
<!--                                        <span class="sr-only">plus</span>-->
<!--                                    </span>-->
<!--                                    <span class="pointer-events-none absolute h-12 w-full flex items-center justify-center" aria-hidden="true">-->
<!--                                        <PlusIcon class="h-6 w-6 text-indigo-300" aria-hidden="true" />-->
<!--                                    </span>-->
<!--                                    <span>-->
<!--                                        <span class="flex flex-col text-center">-->
<!--                                            <span class="text-5xl font-extrabold text-white tracking-tight">$4</span>-->
<!--                                            <span class="mt-2 text-base font-medium text-indigo-200">Per month</span>-->
<!--                                        </span>-->
<!--                                    </span>-->
<!--                                </p>-->

<!--&lt;!&ndash;                            <ul role="list" class="rounded overflow-hidden grid gap-2 sm:grid-cols-2">&ndash;&gt;-->
<!--&lt;!&ndash;                                <li v-for="item in checklist" :key="item" class="bg-indigo-800 bg-opacity-50 py-4 px-4 flex items-center space-x-3 text-base text-white">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <CheckIcon class="h-6 w-6 text-indigo-300" aria-hidden="true" />&ndash;&gt;-->
<!--&lt;!&ndash;                                    <span>{{ item }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                            </ul>&ndash;&gt;-->
<!--                            <a href="#" class="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-indigo-600 hover:bg-indigo-50 md:px-10"> Get started today </a>-->
<!--                            <a href="#" class="block text-center text-base font-medium text-indigo-200 hover:text-white"> Try Workflow Lite for free </a>-->


                        </div>
                    </div>
                </div>
            </div>

        </main>

        <Footer />

    </div>
</template>

<script>
import {ref} from 'vue'
import Navbar from '../Components/Navbar'
import { CalendarIcon, CheckIcon, PlusIcon, UsersIcon, ViewBoardsIcon, ViewListIcon } from '@heroicons/vue/outline'
import Footer from '../Components/Footer'

export default {
    name: "Donate",

    components: {
        Navbar,
        Footer,

    },

    setup(props) {

        // const money = ref(0.00);
        const monthly = ref(0.00);

        const features = [
            {
                name: 'List view',
                icon: ViewListIcon,
                description:
                    'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
            },
            {
                name: 'Boards',
                icon: ViewBoardsIcon,
                description:
                    'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
            },
            {
                name: 'Calendar',
                icon: CalendarIcon,
                description:
                    'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
            },
            {
                name: 'Teams',
                icon: UsersIcon,
                description:
                    'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
            },
        ]
        const checklist = [
            'Unlimited projects',
            'No per user fees',
            'Unlimited storage',
            '24/7 support',
            'Cancel any time',
            '14 days free',
        ]

        return {
            features,
            checklist,
            // money,
            monthly
        }
    }
}
</script>

<style scoped>

</style>