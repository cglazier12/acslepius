<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @routes
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/manifest.js') }}" defer></script>
    <script src="{{ asset('js/vendor.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script defer src="https://unpkg.com/@alpinejs/mask@3.x.x/dist/cdn.min.js"></script>
    <script src="https://kit.fontawesome.com/3829d1257d.js" crossorigin="anonymous"></script>
    <script type="text/javascript">
        window.csrf_token = "{{ csrf_token() }}"
    </script>
    @inertiaHead
</head>

<body>

{{-- ALERT CARD START --}}
@if (Session::has('success'))
    <div class="alert alert-success">
        <ul>
            <li>{!! Session::get('success') !!}</li>
        </ul>
    </div>
@endif
{{-- ALERT CARD END --}}
<!--SITE LAYOUT-->
@inertia
</body>

</html>