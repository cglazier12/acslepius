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

        $questions = StoryQuestion::all();

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
            $customer->first_name = $request->firstName;
            $customer->last_name = $request->last_name;
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
        $story->topic_id = $request->question['topic_id'];
        $story->story_question_id = $request->question['id'];
        $story->story = $request->story;
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
