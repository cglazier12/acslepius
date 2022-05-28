<template>

</template>

<script>
import {ref, onMounted} from 'vue';
export default {
    name: "YourStory",

    props: {
        questions: Object,
    },

    setup(props) {

        const questions = ref(props.questions);

        onMounted( () => {
            console.log(questions.value)
        })

        return {
            questions,
        }
    }
}
</script>

<style scoped>

</style>