import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateShema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
