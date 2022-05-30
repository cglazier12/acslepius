<?php

namespace App\Http\Controllers;

use App\Models\Story;
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

        $questions = StoryQuestion::orderBy('order', 'asc')->where('active', 1)->get();

        foreach ($questions as $question) {

            $question->oldQuestion = $question->question;

        }

        $questions = $questions->toArray();

        return Inertia::render('App/Questions', ['questions' => $questions]);
    }

    public function stories()
    {

        $stories = Story::all();

        foreach ($stories as $story) {
            $story->submitted = date('F j, Y', strtotime($story->created_at));
        }

        return Inertia::render('App/Stories', ['stories' => $stories]);

    }

    public function donations()
    {

    }
}
