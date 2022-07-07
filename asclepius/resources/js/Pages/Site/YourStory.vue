<template>
    <div class="bg-white">
        <Navbar />
        <main>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="lg:text-center my-16">

                    <p class="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">We want to know. We want to help.</p>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">We believe sharing and understanding other's experiences is a crucial step in enacting meaningful change that will benefit others.</p>

                </div>


                <div class="relative bg-white pb-16 sm:pb-24">
                    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                        <div class="relative sm:py-16 lg:py-0">
                            <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                                <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                                    <defs>
                                        <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                                </svg>
                            </div>
                            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                                <!-- Testimonial card-->
                                <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100" alt="" />
                                    <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                                    <div class="relative px-8">

                                        <blockquote class="mt-8">
                                            <div class="relative text-lg font-medium text-white md:flex-grow">
                                                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <p class="relative">Put a synopsis of a story here, include a nice stock photo to really tie the page together not unlike the rug from the Big Lebowski.</p>
                                            </div>

                                            <footer class="mt-4">
                                                <p class="text-base font-semibold text-indigo-200">- Chris Glazier, CEO at His Own Domain</p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                            <!-- Content area -->
                            <div class="pt-12 sm:pt-16 lg:pt-20">
                                <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Another Header About Stories</h2>
                                <div class="mt-6 text-gray-500 space-y-6">
                                    <p class="leading-7 text-gray-500">Here is where we could put a longer paragraph talking about how sharing your story is important to our mission and what not. You know just a couple sentences to really entice and explain the importance of empathy or something like that. Or maybe we talk about some other stuff you know? Like... idk probably best to keep it relevant to the page though. At this point im just typing to demonstrate what a block of text would look like in this context.</p>
                                    <p class="leading-7 text-gray-500">And maybe right here we just very briefly explain what is going on with this page. Select a question from the dropdown, answer the question in the text area. Enter in your information to ease the means of solicitation, etcetera, etcetera.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <form @submit.prevent="submit">
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 md:col-span-4">
                            <h2 class="text-xl text-indigo-600 font-semibold tracking-wide uppercase">Select a relevant Question</h2>
                        </div>
                        <div class="col-span-12 md:col-span-8">
                            <QuestionDropdown :questions="questions" />
                        </div>

                        <hr class="col-span-12 my-8" />

                        <div class="col-span-12 md:col-span-4">
                            <h2 class="text-xl text-indigo-600 font-semibold tracking-wide uppercase">Share your story</h2>
                            <p class="text-gray-500">{{ question }}</p>
                        </div>
                        <div class="col-span-12 md:col-span-8">
                            <textarea rows="6" v-model="form.story" name="story" id="story" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required></textarea>
                        </div>

                        <hr class="col-span-12 my-8" />

                        <div class="col-span-12 md:col-span-4">
                            <h2 class="text-xl text-indigo-600 font-semibold tracking-wide uppercase">Time to get personal</h2>
                        </div>

                        <div class="col-span-12 md:col-span-8 grid grid-cols-2 gap-6">
                            <div class="col-span-2 md:col-span-1">
                                <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                                <div class="mt-1">
                                    <input type="text" v-model="form.firstName" name="firstName" id="firstName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required />
                                </div>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                                <div class="mt-1">
                                    <input type="text" v-model="form.lastName" name="lastName" id="lastName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required />
                                </div>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                <div class="mt-1">
                                    <input type="email" v-model="form.email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required />
                                </div>
                            </div>

                        </div>

                        <div class="col-span-12 md:gap-6 gap-4 flex justify-between grid grid-cols-12 mt-8">

                            <div class="col-span-12 md:col-span-8">
                                <div class="relative flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="understand" v-model="form.understand" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" required />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="understand" class="font-medium text-gray-700">I understand all stories are reviewed and may be edited if published.</label>
                                    </div>
                                </div>
                                <div class="relative flex items-start mt-4">
                                    <div class="flex items-center h-5">
                                        <input id="termsOfService" v-model="form.termsOfService" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" required />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="termsOfService" class="font-medium text-gray-700">I have read and understand <a class="text-indigo-500" href="https://www.google.com" target="_blank">This</a> and <a class="text-indigo-500" href="https://www.google.com" target="_blank">That</a></label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-8 md:col-span-4 flex md:justify-end justify-start">
                                <button class="mt-6 w-full whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
                                    Share Your Story
                                </button>
                            </div>

                        </div>

                        <hr class="col-span-12 my-8" />

                    </div>
                </form>
            </div>

        </main>

        <Footer />

    </div>
</template>

<script>
import {ref, onMounted, reactive, inject} from 'vue';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Inertia } from '@inertiajs/inertia'
import QuestionDropdown from "../Components/QuestionDropdown";


export default {
    name: "YourStory",

    components: {
        Footer,
        Navbar,
        QuestionDropdown,
    },

    props: {
        questions: Object,
    },

    setup(props) {

        const emitter = inject('emitter');

        const questions = props.questions;
        const question = ref(null);

        const form = reactive({
            question: null,
            story: null,
            firstName: null,
            lastName: null,
            email: null,
            // acknowledge story may be edited if published checkbox
            understand: false,
            // acknowledge terms of service checkbox
            termsOfService: false,
        })

        // event listener for QuestionDropdown
        emitter.on('updateTopic', (newQuestion) => {

            // assign new topic in form property above
            form.question = newQuestion
        })


        function submit() {
            Inertia.post('/your-story/submit', form)
        }


        onMounted( () => {
            console.log(questions.value)
        })

        return {
            form,
            questions,
            question,
            submit,
        }
    }
}
</script>

<style scoped>

</style>