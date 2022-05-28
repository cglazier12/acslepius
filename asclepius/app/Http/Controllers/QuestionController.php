<?php

namespace App\Http\Controllers;

use App\Models\StoryQuestion;
use Carbon\Carbon;
use Illuminate\Http\Request;

class QuestionController extends Controller
{

    public function submit(Request $request)
    {

        $i = 1; //assigns new order
        foreach ($request->questions as $newQ) {

            $q = StoryQuestion::where('id', $newQ['id'])->first();

            if (is_null($q)) {

                $q = new StoryQuestion();
                $q->created_at = Carbon::now();

            }

            $q->question = $newQ['question'];
            $q->order = $i;
            $q->active = $newQ['active'];
            $q->updated_at = Carbon::now();
            $q->save();


            if ($newQ['active'])
            $i++;
        }


    }
}
