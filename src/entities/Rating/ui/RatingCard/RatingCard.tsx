import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <>
                    <Text
                        title={feedbackTitle}
                    />
                    <Input
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
            off={(
                <>
                    <TextDeprecated
                        title={feedbackTitle}
                    />
                    <InputDeprecated
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
        />
    );
    const content = (
        <>
            <VStack align="center" gap="8" max>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={(
                        <>
                            <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                            <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
                        </>
                    )}
                    off={(
                        <>
                            {' '}
                            <TextDeprecated title={starsCount ? t('Спасибо за оценку!') : title} />
                            <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />

                        </>
                    )}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={(
                                    <>
                                        <Button onClick={cancelHandle}>
                                            {t('Закрыть')}
                                        </Button>
                                        <Button onClick={acceptHandle}>
                                            {t('Отправить')}
                                        </Button>
                                    </>
                                )}
                                off={(
                                    <>
                                        <ButtonDeprecated onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                                            {t('Закрыть')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated onClick={acceptHandle}>
                                            {t('Отправить')}
                                        </ButtonDeprecated>
                                    </>
                                )}
                            />

                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={(
                                <Button fullWidth onClick={acceptHandle} size="l">
                                    {t('Отправить')}
                                </Button>
                            )}
                            off={(
                                <ButtonDeprecated fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            )}
                        />

                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card padding="24" border="round" className={className} max>
                    {content}
                </Card>
            )}
            off={(
                <CardDeprecated className={className} max>
                    {content}
                </CardDeprecated>
            )}
        />
    );
});
