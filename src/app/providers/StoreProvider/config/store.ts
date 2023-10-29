import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { ScrollSaveReducer } from 'features/ScrollSave';
import { $api } from 'shared/api/api';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateShema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    // navigation?: (to: To, options?: NavigateOptions)=> void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        saveScroll: ScrollSaveReducer,

    };
    const reducerManager = createReducerManager(rootReducers);
    const extraArg:ThunkExtraArg = {
        api: $api,
        // navigation,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
