<?php

use App\Http\Controllers\QuestionController;
use App\Http\Controllers\StoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/questions')->name('admin.')->group(function () {

    Route::post('/add', [QuestionController::class, 'addQuestion']);
    Route::post('/submit', [QuestionController::class, 'submit']);

});

Route::prefix('/stories')->name('stories.')->group(function () {

    Route::post('/create', [StoryController::class, 'adminStore']);

});
