<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // three boolean columns track, respectively:
            // whether they have made a one time donation
            // whether they have recurring payments set up
            // whether they have email notifications enabled
            // whether they have submitted a story
            // whether they have ever contacted acslepius before

        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->boolean('donated')->default(0);
            $table->boolean('subscribed')->default(0);
            $table->boolean('notify')->default(0);
            $table->boolean('story')->default(0);
            $table->boolean('contacted')->default(0);
            $table->string('stripe_id')->nullable()->index();
            $table->string('pm_type')->nullable();
            $table->string('pm_last_four', 4)->nullable();
            $table->timestamp('trial_ends_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
};
