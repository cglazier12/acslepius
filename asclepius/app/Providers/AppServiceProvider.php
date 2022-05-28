<?php

namespace App\Providers;

use App\Models\Subscription;
use App\Models\SubscriptionItem;
use Illuminate\Support\ServiceProvider;
use App\Models\Customer;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Cashier::useCustomerModel(Customer::class);
        Cashier::useSubscriptionModel(Subscription::class);
        Cashier::useSubscriptionItemModel(SubscriptionItem::class);

        // TODO :: figure out tax status and if we collect/need to track taxes for donations
//        Cashier::calculateTaxes();
    }
}
