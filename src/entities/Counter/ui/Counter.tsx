import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, decrement } = useCounterActions();
    const handelIncrement = () => {
        increment()
    };

    const handelDecrement = () => {
        decrement()
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handelIncrement}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handelDecrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
