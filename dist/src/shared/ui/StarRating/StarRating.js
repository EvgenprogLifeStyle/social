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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
var stars = [1, 2, 3, 4, 5];
export var StarRating = memo(function (props) {
    var className = props.className, _a = props.size, size = _a === void 0 ? 30 : _a, _b = props.selectedStars, selectedStars = _b === void 0 ? 0 : _b, onSelect = props.onSelect;
    var _c = useState(selectedStars), currentStarsCount = _c[0], setCurrentStarsCount = _c[1];
    var _d = useState(Boolean(selectedStars)), isSelected = _d[0], setIsSelected = _d[1];
    var onHover = function (starsCount) { return function () {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    }; };
    var onLeave = function () {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };
    var onClick = function (starsCount) { return function () {
        if (!isSelected) {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    }; };
    return (_jsx("div", __assign({ className: classNames(cls.StarRating, {}, [className]) }, { children: stars.map(function (starNumber) {
            var _a;
            return (_jsx(Icon, { className: classNames(cls.starIcon, (_a = {}, _a[cls.selected] = isSelected, _a), [currentStarsCount >= starNumber ? cls.hovered : cls.normal]), Svg: StarIcon, width: size, height: size, onMouseLeave: onLeave, onMouseEnter: onHover(starNumber), onClick: onClick(starNumber) }, starNumber));
        }) }), void 0));
});
