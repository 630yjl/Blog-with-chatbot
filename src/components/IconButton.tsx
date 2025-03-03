import { cn } from '@/utils/style';
import {
  Component,
  ComponentPropsWithoutRef,
  createElement,
  ElementType,
} from 'react';
import { IconType } from 'react-icons';

type IconButtonProps<Component extends ElementType> =
  ComponentPropsWithoutRef<Component> & {
    Icon: IconType;
    iconClassName?: string;
    className?: string;
    component?: Component;
  };
const IconButton = <Component extends ElementType = 'button'>({
  component,
  className,
  iconClassName,
  Icon,
  ...props
}: IconButtonProps<Component>) => {
  return createElement(
    component ?? 'button',
    {
      className: cn('p-1 lg:p-2', className),
      ...props,
    },
    <Icon
      className={cn('h-6 w-6 transition-all lg:h-6 lg:w-6s', iconClassName)}
    />,
  );
};

export default IconButton;
