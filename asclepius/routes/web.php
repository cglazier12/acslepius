<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\TopicController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
 *  Front end routes :: site layout
 */


Route::get('/', [SiteController::class, 'home']);

Route::get('/our-team', [SiteController::class, 'ourTeam']);

Route::post('/your-story/submit', [SiteController::class, 'submitStory']);

Route::get('/your-story', [SiteController::class, 'yourStory'])->name('yourStory');


Route::get('/contact', [SiteController::class, 'contact']);

Route::get('/donate', [SiteController::class, 'donate']);



/*
 *  Back end routes :: app layout
 */

Route::prefix('/admin')->name('admin.')->middleware(['auth'])->group(function () {

    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/questions', [AdminController::class, 'questions'])->name('questions');

    Route::prefix('/topics')->name('topics.')->middleware(['auth'])->group(function () {
        Route::get('/', [TopicController::class, 'index'])->name('index');
        Route::get('/create', [TopicController::class, 'create'])->name('create');
        Route::get('/{slug}', [TopicController::class, 'edit'])->name('edit');
    });

    Route::prefix('/stories')->name('stories.')->middleware(['auth'])->group(function () {
        Route::get('/', [StoryController::class, 'index'])->name('index');
        Route::get('/create', [StoryController::class, 'create'])->name('create');
        Route::post('/store', [StoryController::class, 'store'])->name('store');
    });


    Route::get('/donations', [AdminController::class, 'donations'])->name('donations');

});


require __DIR__.'/auth.php';

