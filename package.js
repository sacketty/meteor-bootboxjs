Package.describe({
    summary: "Programmatic dialog boxes using Twitter's bootstrap modals"
});

Package.on_use(function (api) {
    api.use([
    	'bootstrap-3',
    	'jquery',
    	'lib/bootbox.js'
    ] 'client');
});