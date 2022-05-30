<template>
    <div class="bg-white">
        <Navbar />
        <main>
            <!-- Hero section -->
            <div class="relative">
                <!--            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />-->
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

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="lg:text-center my-16">

                    <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>

                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>

                </div>
                <form @submit.prevent="submit">
                    <div v-for="question in form.questions" class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">

                        <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px pt-2 sm:pt-0"> {{ question.question }} </label>

                        <div class="mt-1 sm:mt-0 sm:col-span-2">

                            <textarea id="about" v-model="question.response" rows="3" class="mb-8 sm:mb-4 max-w-xl ml-auto shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md" required />

                        </div>

                    </div>

                    <div class="flex justify-between sm:border-t sm:border-gray-200 sm:pt-5 ">

                        <div class="flex flex-col w-full sm:w-1/2 mb-8">
                            <div class="my-2">
                                <label for="first-name" class="block text-sm font-medium text-gray-900">First name</label>
                                <div class="mt-1">
                                    <input type="text" v-model="form.firstName" id="firstName" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" required/>
                                </div>
                            </div>
                            <div class="my-2">
                                <label for="last-name" class="block text-sm font-medium text-gray-900">Last name</label>
                                <div class="mt-1">
                                    <input type="text" v-model="form.lastName" id="lastName" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" required/>
                                </div>
                            </div>
                            <div class="my-2">
                                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                                <div class="mt-1">
                                    <input id="email" type="text" v-model="form.email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" required/>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col items-center m-auto">
                            <p>Thank you for taking the time to share with us your story.</p>
                            <button type="submit" class="mt-4 btn btn-primary">Submit Story</button>
                        </div>



                    </div>
                </form>
            </div>

        </main>

        <Footer />

    </div>
</template>

<script>
import {ref, onMounted, reactive} from 'vue';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Inertia } from '@inertiajs/inertia'

export default {
    name: "YourStory",

    components: {
        Footer,
        Navbar,
    },

    props: {
        questions: Object,
    },

    setup(props) {

        const form = reactive({
            questions: props.questions,
            firstName: null,
            lastName: null,
            email: null,
        })

        // const url = process.env.MIX_APP_URL

        function submit() {
            Inertia.post('/your-story/submit', form)
        }

        // const questions = ref(props.questions);

        onMounted( () => {
            console.log(questions.value)
        })

        return {
            form,
            submit,
        }
    }
}
</script>

<style scoped>

</style>