@if (isset($_COOKIE['anl_cga']) && ($_COOKIE['anl_cga'] == "true"))
    <noscript>
        <iframe>Hello from cookies</iframe>
    </noscript>
@endif