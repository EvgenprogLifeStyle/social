import { useCallback, useRef } from 'react';
export function useDebounce(callback, delay) {
    var timer = useRef();
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(function () {
            callback.apply(void 0, args);
        }, delay);
    }, [callback, delay]);
}
