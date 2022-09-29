export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', myName: 'Thiago'} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about'} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'} );
};

export function displayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'login'} );
};

export function displayBusListPage(req, res, next) {
    res.render('index', { title: 'BusList', page: 'buslist'} );
};
