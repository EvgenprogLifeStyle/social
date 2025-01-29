import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../consts/userConsts';
export var getUserRoles = function (state) { var _a; return (_a = state.user.authData) === null || _a === void 0 ? void 0 : _a.roles; };
export var isUserAdmin = createSelector(getUserRoles, function (roles) { return Boolean(roles === null || roles === void 0 ? void 0 : roles.includes(UserRole.ADMIN)); });
export var isUserManager = createSelector(getUserRoles, function (roles) { return Boolean(roles === null || roles === void 0 ? void 0 : roles.includes(UserRole.MANAGER)); });
