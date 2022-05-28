<?php

namespace App\Http\Controllers;

use App\Models\StoryQuestion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function home()
    {

        return Inertia::render('Site/Home');
    }

    public function ourTeam()
    {
        return Inertia::render('Site/OurTeam');
    }

    public function yourStory()
    {

        $questions = StoryQuestion::where('active', 1)->get();

        return Inertia::render('Site/YourStory', ['questions' => $questions]);
    }

    public function contact()
    {

        dd('sfdsdf');
        return Inertia::render('Site/Contact');
    }

    public function donate()
    {
        return Inertia::render('Site/Donate');
    }
}
