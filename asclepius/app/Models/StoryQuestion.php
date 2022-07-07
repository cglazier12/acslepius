<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoryQuestion extends Model
{
    use HasFactory;

    public function getTopic()
    {

        return $this->hasOne(Topic::class, 'id', 'topic_id')->first();
    }
}
