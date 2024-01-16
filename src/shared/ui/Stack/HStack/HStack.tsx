import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex';

// Omit исключаем свойство direction
type HStackProps = Omit<FlexProps, 'direction'>
export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
