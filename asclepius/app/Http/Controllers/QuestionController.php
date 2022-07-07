<?php

namespace App\Http\Controllers;

use App\Models\StoryQuestion;
use App\Models\Topic;
use Carbon\Carbon;
use Illuminate\Http\Request;

class QuestionController extends Controller
{

    public function submit(Request $request)
    {

        $questions = StoryQuestion::all();

        $ids = [];


        foreach ($request->questions as $newQ) {
            array_push($ids, $newQ['id']);
        }


        // remove questions not in array of ids
        $deleteQuestions = StoryQuestion::whereNotIn('id', $ids)->get();

        foreach ($deleteQuestions as $q) {

            $q->delete();

        }



        foreach ($request->questions as $newQ) {

            $q = StoryQuestion::where('id', $newQ['id'])->first();

            $q->topic_id = $newQ['topic_id'];
            $q->question = $newQ['question'];
            $q->updated_at = Carbon::now();
            $q->save();

        }
    }

    public function addQuestion(Request $request)
    {

        // make a new question
        $question = new StoryQuestion();
        $question->question = 'Enter A New Question.';
        // assign default topic.
        $topic = Topic::where('slug', 'choose')->first();
        $question->topic_id = $topic->id;
        $question->save();
        $question->oldQuestion = 'Enter A New Question.';

        $questions = $request['questions'];

        // return all questions with the newly created one appended to the list.
        array_push($questions, $question->toArray());

        return response()->json($questions, 200);

    }
}
