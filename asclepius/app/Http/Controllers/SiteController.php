<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Story;
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

        foreach($questions as $question) {
            $question->response = "";
        }

        return Inertia::render('Site/YourStory', ['questions' => $questions]);
    }

    public function submitStory(Request $request)
    {

        // only need to worry about validating email
        $validated = $request->validate([
            'email' => 'required|email',
        ]);

        // we check to see if we already have a customer with this email address.
        $customer = Customer::where('email', $validated['email'])->first();

        // take some liberties and automatically sign up for newsletter when submitting story
        if (is_null($customer)) {

            // make a new customer
            $customer = new Customer();
            $customer->name = $request->firstName . ' ' . $request->lastName;
            $customer->email = $validated['email'];
            $customer->notify = 1;
            $customer->story = 1;
            $customer->save();

        } else {

            // update existing customer
            $customer->notify = 1;
            $customer->story = 1;
            $customer->save();

        }

        // create a new story
        $story = new Story();
        $story->customer_id = $customer->id;
        $story->name = $request->firstName . ' ' . $request->lastName;
        $story->email = $validated['email'];
        $story->story = json_encode($request->questions);
        $story->save();

        return redirect()->to(url('/your-story'))->with('success', 'We have received your story, thank you for sharing it with us!');
    }

    public function contact()
    {

        return Inertia::render('Site/Contact');
    }

    public function donate()
    {


        return Inertia::render('Site/Donate');
    }
}
