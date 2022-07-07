<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoryController extends Controller
{

    public function index()
    {
        $stories = Story::all();

        foreach ($stories as $story) {
            $story->submitted = date('F j, Y', strtotime($story->created_at));
        }

        return Inertia::render('App/Stories/Index.vue', ['stories' => $stories]);
    }

    public function create()
    {

        return Inertia::render('App/Stories/Create');
    }

    public function store(Request $request)
    {


//        if ($request->file()) {
//            dd('true');
//        } else {
//            dd('false', $request);
//        }
        dd($request);
    }
}
