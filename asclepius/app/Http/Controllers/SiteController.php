<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Site/Contact');
    }

    public function donate()
    {
        return Inertia::render('Site/Donate');
    }
}
