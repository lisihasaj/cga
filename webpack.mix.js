let mix = require('laravel-mix');
require('laravel-mix-alias');
mix.webpackConfig({
    output: {
        chunkFilename: 'js/[name].[contenthash].js',
    },
    resolve: {
        alias: {
            'styles': path.resolve(__dirname, 'resources/assets/app/scss'),
            '@': path.resolve(__dirname, 'resources/views/app/js'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'async'
        }
    }
});

mix.js('resources/views/app/js/app.js', 'public/js')
    .react('resources/views/admin/js/admin.js', 'public/js')
    .scripts([
        "node_modules/jquery/dist/jquery.min.js",
        'vendor/bkwld/croppa/public/js/croppa.js',
        "resources/assets/admin/js/jquery-ui.js",
        "resources/assets/admin/js/bootstrap.js",
        "resources/assets/admin/js/redactor/redactor.js",
        "resources/assets/admin/js/redactor/plugins/*/*.js",
    ], 'public/js/admin-vendors.js')
    .scripts([
        "node_modules/babel-polyfill/dist/polyfill.js",
        "vendor/bkwld/croppa/public/js/croppa.js",
        "resources/assets/app/js/custom.js"
    ], 'public/js/app-vendors.js')
    .options({
        processCssUrls: false
    })
    .sass('resources/assets/app/scss/app.scss', 'public/css')
    .sass('resources/assets/admin/scss/admin.scss', 'public/css')
    .copy('resources/assets/app/images', 'public/images')
    .copy('resources/assets/admin/images', 'public/images')
    .copy('resources/assets/app/fonts', 'public/fonts')
    .copy('resources/assets/admin/fonts', 'public/fonts')
    .sourceMaps()
    .version()
    .browserSync({
        proxy: 'cga-v2.test',
        files: [
            'public/css/app.css',
            'public/css/admin.css',
            'public/js/app.js',
            'public/js/admin.js'
        ]
    });

if (mix.inProduction()) {
    mix.version();
    mix.sourceMaps(false)
}
