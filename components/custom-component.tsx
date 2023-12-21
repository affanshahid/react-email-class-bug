import { Text } from "@react-email/components";

export interface CustomComponentProps {
  text: string;
  className?: string;
  clazzName?: string;
}

export function CustomComponent({
  text,
  className,
  clazzName,
}: CustomComponentProps) {
  return (
    <Text className={className}>
      {text}
      <br />
      Prop - className: {className}
      <br />
      Prop - clazzName: {clazzName}
      <br />
    </Text>
  );
}
