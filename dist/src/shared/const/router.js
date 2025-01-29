var _a;
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILS"] = "article_details";
    AppRoutes["ARTICLE_CREATE"] = "article_create";
    AppRoutes["ARTICLE_EDIT"] = "article_edit";
    AppRoutes["ADMIN_PANEL"] = "admin_panel";
    AppRoutes["FORBIDDEN"] = "forbidden";
    // last
    AppRoutes["NOT_FOUND"] = "not_found";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile/',
    _a[AppRoutes.ARTICLES] = '/articles',
    _a[AppRoutes.ARTICLE_DETAILS] = '/articles/',
    _a[AppRoutes.ARTICLE_CREATE] = '/articles/new',
    _a[AppRoutes.ARTICLE_EDIT] = '/articles/:id/edit',
    _a[AppRoutes.ADMIN_PANEL] = '/admin',
    _a[AppRoutes.FORBIDDEN] = '/forbidden',
    // последний
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
