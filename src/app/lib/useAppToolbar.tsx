import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollTolbar } from '@/widgets/ScrollTolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute:OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollTolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollTolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
