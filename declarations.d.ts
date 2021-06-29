declare module '*.png' {
  const content: any;
  export default content;
}

declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}