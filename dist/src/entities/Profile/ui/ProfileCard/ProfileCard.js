var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var _a, _b;
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error, readonly = props.readonly, onChangeFirstname = props.onChangeFirstname, onChangeLastname = props.onChangeLastname, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeAvatar = props.onChangeAvatar, onChangeUsername = props.onChangeUsername, onChangeCountry = props.onChangeCountry, onChangeCurrency = props.onChangeCurrency;
    var t = useTranslation('profile').t;
    if (isLoading) {
        return (_jsx(HStack, __assign({ justify: "center", max: true, className: classNames(cls.ProfileCard, (_a = {}, _a[cls.loading] = true, _a), [className]) }, { children: _jsx(Loader, {}, void 0) }), void 0));
    }
    if (error) {
        return (_jsx(HStack, __assign({ justify: "center", max: true, className: classNames(cls.ProfileCard, {}, [className, cls.error]) }, { children: _jsx(Text, { theme: TextTheme.ERROR, title: t('Произошла ошибка при загрузке профиля'), text: t('Попробуйте обновить страницу'), align: TextAlign.CENTER }, void 0) }), void 0));
    }
    var mods = (_b = {},
        _b[cls.editing] = !readonly,
        _b);
    return (_jsxs(VStack, __assign({ gap: "8", max: true, className: classNames(cls.ProfileCard, mods, [className]) }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx(HStack, __assign({ justify: "center", max: true, className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar }, void 0) }), void 0)), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('Ваше имя'), className: cls.input, onChange: onChangeFirstname, readonly: readonly, "data-testid": "ProfileCard.firstname" }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('Ваша фамилия'), className: cls.input, onChange: onChangeLastname, readonly: readonly, "data-testid": "ProfileCard.lastname" }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('Ваш возраст'), className: cls.input, onChange: onChangeAge, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('Город'), className: cls.input, onChange: onChangeCity, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('Введите имя пользователя'), className: cls.input, onChange: onChangeUsername, readonly: readonly }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Введите ссылку на аватар'), className: cls.input, onChange: onChangeAvatar, readonly: readonly }, void 0), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }, void 0), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, onChange: onChangeCountry, readonly: readonly }, void 0)] }), void 0));
};
