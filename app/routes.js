define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main':                             { navbar:   'navbar'},
        'main/docs':                        { layout:   'navbar' },
        'main/docs/home':                   { content:  'tasks'},
        'main/docs/component':              { layout:   'tasks', content:  'tasks-form' },
        'main/std':                         { layout:   'tasks-form' },
        'main/std/home':                    { content:  'tasks' },
        'main/std/about':                   { content:  'tasks'}
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
