var _a;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, RoutePath } from '@/shared/const/router';
export var routeConfig = (_a = {},
    _a[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _a[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _a[AppRoutes.PROFILE] = {
        path: "".concat(RoutePath.profile, ":id"),
        element: _jsx(ProfilePage, {}, void 0),
        authOnly: true,
    },
    _a[AppRoutes.ARTICLES] = {
        path: RoutePath.articles,
        element: _jsx(ArticlesPage, {}, void 0),
        authOnly: true,
    },
    _a[AppRoutes.ARTICLE_DETAILS] = {
        path: "".concat(RoutePath.article_details, ":id"),
        element: _jsx(ArticleDetailsPage, {}, void 0),
        authOnly: true,
    },
    _a[AppRoutes.ARTICLE_CREATE] = {
        path: "".concat(RoutePath.article_create),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _a[AppRoutes.ARTICLE_EDIT] = {
        path: "".concat(RoutePath.article_edit),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _a[AppRoutes.ADMIN_PANEL] = {
        path: "".concat(RoutePath.admin_panel),
        element: _jsx(AdminPanelPage, {}, void 0),
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    _a[AppRoutes.FORBIDDEN] = {
        path: "".concat(RoutePath.forbidden),
        element: _jsx(ForbiddenPage, {}, void 0),
    },
    // last
    _a[AppRoutes.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _a);
