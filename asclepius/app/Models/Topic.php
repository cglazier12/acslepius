<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    public function getQuestions()
    {

        return $this->hasMany(StoryQuestion::class)->get();
    }

    public function getStories()
    {

        return $this->hasMany(Story::class)->get();
    }
}
