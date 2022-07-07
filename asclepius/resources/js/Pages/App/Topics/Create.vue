<template>
    <Sidebar />

    <div class="md:pl-64 flex flex-col flex-1">
        <main class="flex-1">
            <div class="py-6">
                <form @submit.prevent="submit">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 class="text-2xl font-semibold text-gray-900 mb-4">User Stories</h1>
                    </div>
                    <div class="px-4 sm:px-6 lg:px-8">
                        <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h2 class="mt-2 text-lg text-gray-700">Create a New Story.</h2>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="submit" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Save</button>
                            </div>
                        </div>

                        <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

                                    <div class="grid grid-cols-2 gap-6">

                                        <div>
                                            <label for="title">Title</label>
                                            <div class="mt-1">
                                                <input v-model="form.title" type="text" name="title" id="title" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required/>
                                            </div>
                                        </div>

                                        <div>

                                        </div>


                                        <div>
                                            <label>Story Image</label>
                                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                                <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div class="space-y-1 text-center">
                                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <div class="flex text-sm text-gray-600">
                                                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" class="sr-only" @input="form.file = $event.target.files[0]" @change="onFileChange"/>
                                                            </label>
                                                            <p class="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div id="preview">
                                                <img v-if="url" :src="url" />
                                            </div>
                                        </div>



                                        <div class="col-span-2">
                                            <label for="summary">Summary</label>
                                            <div class="mt-1">
                                                <input v-model="form.summary" type="text" name="summary" id="summary" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required/>
                                            </div>
                                        </div>

                                        <div class="col-span-2 mb-36">
                                            <label>Story</label>
                                            <Editor
                                                v-model="form.content"
                                                api-key="tul2mk41y3pqsawm9jnaef57lp8npf5sjpef63snn5zv8ooy"
                                                :init="{
                                                plugins: 'lists link image table code help wordcount'
                                              }"
                                            />
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import Sidebar from "../../Components/Sidebar";
import Editor from '@tinymce/tinymce-vue'
import { onMounted, ref } from "vue";
import {Inertia} from "@inertiajs/inertia";
import { useForm } from '@inertiajs/inertia-vue3'

import axios from "axios";

export default {
    name: "Index",

    components: {
        Sidebar,
        Editor,
    },

    props: {

    },

    setup() {


        const form = useForm({
            title: null,
            file: null,
            summary: null,
            content: null,
        })


        function submit()
        {

            form.post('/admin/topics/store')

        }


        return {
            submit,
            form,
        }
    },
}
</script>

<style scoped>

</style>