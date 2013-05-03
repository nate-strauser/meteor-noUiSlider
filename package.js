Package.describe({
    summary: "noUiSlider packaged for meteor."
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
    api.add_files([
        'lib/noUiSlider/jquery.noUiSlider.js',
        'lib/noUiSlider/nouislider.fox.css'
    ], 'client'
    );
});