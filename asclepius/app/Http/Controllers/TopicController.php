<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TopicController extends Controller
{

    public function index()
    {

        $topics = Topic::all();

        foreach ($topics as $topic) {

            $this->storiesAndQuestions($topic);

        }

        return Inertia::render('App/Topics/Index', ['topics' => $topics]);
    }

    public function create()
    {

        return Inertia::render('App/Topics/Create');
    }

    public function store(Request $request)
    {

        dd($request);
    }

    public function edit(string $slug)
    {

        $topic = Topic::where('slug', $slug)->first();

        dd($this->storiesAndQuestions($topic));

        return Inertia::render('App/Topics/Edit', ['topic' => $topic]);
    }

    public function update(Request $request)
    {

    }



    protected function storiesAndQuestions(Topic $topic)
    {

        $topic->stories = $topic->getStories();

        $topic->questions = $topic->getQuestions();

        return $topic;
    }
}
