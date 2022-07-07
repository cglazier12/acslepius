<template>
    <Sidebar />

    <div class="md:pl-64 flex flex-col flex-1">
        <main class="flex-1">
            <div class="py-6">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 class="text-2xl font-semibold text-gray-900 mb-4">Story Questions</h1>
                </div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">


                    <div v-for="(question, index) in questions" class="border border-gray-500 rounded-lg p-4 mb-4">

                        <div class="flex flex-row">

                            <div class="w-3/4">
                                <label for="question" class="block text-sm font-medium text-gray-500"><span class="text-gray-700">Old Question: </span>{{ question.oldQuestion }}</label>
                            </div>

                            <div class="w-1/4">
                                <TopicDropdown :topics="topics" :question="question" />
                            </div>


                        </div>

                        <div class="flex flex-row">

                            <div class="w-3/4">
                                <div class="mt-1">
                                    <textarea v-model="question.question" name="question" id="question" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" ></textarea>
                                </div>
                            </div>

                            <div class="ml-auto mt-auto">
                                <button class="my-auto ml-auto bg-red-700 p-2 rounded text-white" @click="remove(index)">Remove</button>
                            </div>

                        </div>
                    </div>


                    <div class="mt-6 flex justify-between">
                        <button class="my-auto bg-blue-600 p-2 rounded text-white" @click="add">Add Question</button>
                        <button class="my-auto bg-blue-600 p-2 rounded text-white" @click="submit">Submit</button>
                    </div>



                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Sidebar from "../Components/Sidebar";
import TopicDropdown from "../Components/TopicDropdown";

import {ref, onMounted, inject} from "vue";
import axios from 'axios';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};

export default {
    name: "Questions",

    components: {
        Sidebar,
        TopicDropdown,
    },

    props: {
        questions: Object,
        topics: Object,
    },

    setup(props) {

        const questions = ref(props.questions);
        const topics = ref(props.topics)

        const emitter = inject('emitter')

        emitter.on('changeTopic', (e) => {
            console.log('emit received');

            questions.value.filter(question => question.id === e.questionId)[0].topic_id = e.newTopic.id
            console.log(questions.value);
        })

        // add a question to the list
        const add = () => {
            console.log(questions.value)
            axios.post('/api/questions/add', {questions: questions.value})
            .then(function (response) {
                // handle success
                questions.value = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        }

        // removes a question from the list
        const remove = (index) => {

            questions.value.splice(index, 1)

        }

        // submits the current state of the form. If removed questions will be deleted, phrasing of questions and topic will be saved.
        const submit = () => {
            console.log(questions.value)

            axios.post('/api/questions/submit', {questions: questions.value})
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }

        return {

            questions,
            topics,
            add,
            remove,
            submit,
        }
    }

}
</script>

<style scoped>

</style>