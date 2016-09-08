define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main':                             { navbar:   'main-test'},
        'main/docs':                        { layout:   'main-test' },
        'main/docs/home':                   { content:  'pages-docs-home'},
        'main/docs/component':              { content:  'pages-docs-component' },
        'main/std':                         { layout:   'main-test2' },
        'main/std/home':                    { content:  'pages-home' },
        'main/std/about':                   { content:  'pages-about'}
    }

    var routes = {
        'main/std/home':                '',
        'main/std/about':               'about',
        'main/docs/home':               'docs',
        'main/docs/component':          'docs/component/:name:'
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
