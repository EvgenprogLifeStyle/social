import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '../../../assets/icons/avatar-filled.svg';
import {Icon} from "@/shared/ui/deprecated/Icon";
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?:boolean
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar = ({
    className, src, size = 100, alt, fallbackInverted
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
