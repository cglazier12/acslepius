<?php

namespace App\Http\Controllers;

use App\Models\Story;
use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\StoryQuestion;

class AdminController extends Controller
{

    public function dashboard()
    {

        return Inertia::render('App/Dashboard');
    }

    public function questions()
    {
        // get all questions,
        $questions = StoryQuestion::all();

        // get all topics
        $topics = Topic::all();

        foreach ($questions as $question) {

            // the label for each question will be the original question, so they can compare edits before saving
            $question->oldQuestion = $question->question;

        }

        return Inertia::render('App/Questions', ['questions' => $questions, 'topics' => $topics]);
    }


    public function donations()
    {

    }
}
