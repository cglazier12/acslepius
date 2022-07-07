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
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Topic Name</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Questions</th>
                                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Stories</th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                            <span class="sr-only">Edit Topic</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                    <tr v-for="topic in topics" :key="topic.id" class="px-4">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ topic.topic }}</td>
                                        <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ topic.questions.length }}</td>
                                        <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ topic.stories.length }}</td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a :href="'/admin/topics/' + topic.slug " class="text-indigo-600 hover:text-indigo-900">View Story<span class="sr-only">, {{ topic.name }}</span></a>
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
        topics: Object,
    },

    setup(props) {

        const topics = props.topics;


        return {
            topics,
        }
    },
}
</script>

<style scoped>

</style>