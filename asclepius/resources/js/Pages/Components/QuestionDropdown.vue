<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Listbox as="div" v-model="selected">

        <ListboxLabel class="block text-sm font-medium text-gray-700">Topic</ListboxLabel>
        <div class="relative">
            <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

            <span class="flex items-center">
                <span class="block truncate">{{ selected.question }}</span>
            </span>

                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>

            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">

                    <ListboxOption as="template" v-for="question in questions" :key="question.id" :value="question" v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">

                            <div class="flex items-center">
                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                                    {{ question.question }}
                                </span>
                            </div>

                            <span v-if="selected && selected.id != null" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>

                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script>
import {onMounted, ref, watch} from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import { inject } from 'vue'

export default {
    name: 'QuestionDropdown',

    components: {
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOption,
        ListboxOptions,
        CheckIcon,
        SelectorIcon
    },

    props: {
        questions: Object,
    },

    setup(props) {

        const emitter = inject('emitter')

        const choose = {
            id: null,
            question: "Choose ...",
        }

        const preFormatQuestions = props.questions;

        const questions = Object.assign({choose}, preFormatQuestions)

        const selected = ref(choose)

        watch(selected, async (newSelected, oldSelected) => {

            emitter.emit('updateTopic', newSelected)

        })

        onMounted(() => {
            console.log(questions, selected)
        })

        return {
            questions,
            choose,
            selected,
        }

    }


}

</script>