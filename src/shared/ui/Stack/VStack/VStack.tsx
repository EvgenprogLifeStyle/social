import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex';

// Omit исключаем свойство direction
type VStackProps = Omit<FlexProps, 'direction'>
export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex direction="column" align={align} {...props} />;
};
