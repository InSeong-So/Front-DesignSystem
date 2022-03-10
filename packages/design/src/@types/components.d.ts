declare module 'chip' {
  export type ChipProps = {
    text: string;
    closeable?: boolean;
    onClose: () => void;
    style?: React.CSSProperties;
  };
}
