<template>
    <Sidebar />

    <div class="md:pl-64 flex flex-col flex-1">
        <main class="flex-1">
            <div class="py-6">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 class="text-2xl font-semibold text-gray-900 mb-4">User Stories</h1>
                </div>
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <p class="mt-2 text-sm text-gray-700">A list of all stories.</p>
                        </div>
                        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <a href="/admin/stories/create" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add Story</a>
                        </div>
                    </div>
                    <div class="mt-8 flex flex-col">
                        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead>
                                    <tr class="px-4">
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">Name</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Topic</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Title</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Title</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Status</th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                            <span class="sr-only">Edit Story</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                    <tr v-for="story in stories" :key="story.email" class="px-4">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">{{ story.name }}</td>
                                        <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ story.email }}</td>
                                        <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ story.submitted }}</td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                                            <a href="'/admin/stories/ " class="text-indigo-600 hover:text-indigo-900">View Story<span class="sr-only">, {{ story.name }}</span></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Sidebar from "../../Components/Sidebar";


export default {
    name: "Index",

    components: {
        Sidebar,
    },

    props: {
        stories: Object,
    },

    setup(props) {

        const stories = props.stories;


        return {
            stories,
        }
    },
}
</script>

<style scoped>

</style>