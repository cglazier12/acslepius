<template>
    <div class="bg-white">
    <Navbar />
    <main>
        <div class="bg-white">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <div class="space-y-5 sm:space-y-4">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our leadership</h2>
                        <p class="text-xl text-gray-500">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.</p>
                    </div>
                    <div class="lg:col-span-2">
                        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                            <li v-for="person in people" :key="person.name">
                                <div class="flex items-center space-x-4 lg:space-x-6">
                                    <img class="w-24 h-24 rounded-full object-cover lg:w-32 lg:h-32" :src="person.imageUrl" alt="" />
                                    <div class="font-medium text-lg leading-6 space-y-1">
                                        <h3>{{ person.name }}</h3>
                                        <p class="text-indigo-600">{{ person.role }}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Footer />

    </div>
</template>

<script>
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const people = [
    {
        name: 'Shirleen Bornstein',
        slug: 'shirleen-bornstein',
        role: 'CEO and Founder',
        imageUrl: 'images/board-members/shirleen.png',
    },
    {
        name: 'Jeff Zakem',
        slug: 'jeff-zakem',
        role: 'Some Title',
        imageUrl: 'images/board-members/jeff.jpg',
    },
    {
        name: 'Kim Turner',
        slug: 'kim-turner',
        role: 'Some Title',
        imageUrl: 'images/board-members/kim-turner.jpg',
    },
    // More people...
]

export default {
    components: {
        Footer,
        Navbar
    },
    props: {
        people: Object,

    },
    setup(props) {
        return {
            people,
        }
    },
}
</script>