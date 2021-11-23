import Svg, { Path } from "react-native-svg";
import tw from "twrnc";

export type ViewFinderProps = {
  className?: string;
};

const ViewFinder = ({ className }: ViewFinderProps) => (
  <Svg style={tw`${className}`} viewBox="0 0 500 500">
    <Path
      d="M12 172V72c0-33.115 26.885-60 60-60h100M328 12h100c33.115 0 60 26.885 60 60v100M488 328v100c0 33.115-26.885 60-60 60H328M172 488H72c-33.115 0-60-26.885-60-60V328"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
    />
  </Svg>
);

export { ViewFinder };
