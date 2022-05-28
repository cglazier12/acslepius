<template>
    <Sidebar />

    <div class="md:pl-64 flex flex-col flex-1">
        <main class="flex-1">
            <div class="py-6">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 class="text-2xl font-semibold text-gray-900 mb-4">Story Questions</h1>
                </div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                    <draggable
                        :list="questions"
                        item-key="id"
                        @start="dragging = true"
                        @end="dragging = false">

                        <template  #item="{ element }">
                            <div class="flex flex-row border border-gray-500 rounded-lg p-4 mb-4">
                                <div class="w-3/4">
                                    <label for="question" class="block text-sm font-medium text-gray-700">{{ element.oldQuestion }}</label>
                                    <div class="mt-1">
                                        <input v-model="element.question" name="question" id="question" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div class="ml-auto my-auto">
                                    <button class="my-auto ml-auto bg-red-700 p-2 rounded text-white" @click="remove(element.order - 1)">Remove</button>
                                </div>
                            </div>

                        </template>


                    </draggable>

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
import {ref, onMounted} from "vue";
import draggable from "vuedraggable";
import axios from 'axios';
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};

export default {
    name: "Questions",

    components: {
        Sidebar,
        draggable,
    },

    props: {
        questions: Array,
    },

    setup(props) {

        const questions = ref(props.questions);

        const dragging = ref(false);

        onMounted( () => {
            console.log(questions.value, typeof questions)
        })

        const add = () => {

            // length will be used to assign new ID and order, order can still be changed during the drag event.
            let length = questions.value.length;

            questions.value.push(
                {
                    active: 1,
                    id: length + 1,
                    newQuestion: 'Enter new question',
                    question: 'Enter new question',
                    order: length + 1,
                });
        }

        const remove = (index) => {

            let q = questions.value.at(index)
            q.active = 0;

            console.log(q)
        }

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
            dragging,
            add,
            remove,
            submit,
        }
    }

}
</script>

<style scoped>

</style>