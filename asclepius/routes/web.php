<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\SiteController;
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

Route::get('/your-story', [SiteController::class, 'yourStory']);

Route::get('/contact', [SiteController::class, 'contact']);

Route::get('/donate', [SiteController::class, 'donate']);

/*
 *  Back end routes :: app layout
 */

Route::prefix('/admin')->name('admin.')->middleware(['auth'])->group(function () {

    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/questions', [AdminController::class, 'questions'])->name('questions');
    Route::get('/donations', [AdminController::class, 'donations'])->name('donations');

});


require __DIR__.'/auth.php';

