import { useEffect } from 'react';
export function useInitialEffect(callback) {
    useEffect(function () {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
