import type { ViewStyle } from "react-native";

export type BottomModalProps = {
  /**
   * Height of modal's presented state. This is required for animation to behave correctly
   */
  height: number;

  /**
   * Color of the fullscreen view displayed behind modal.
   * You can also change this by using backdropStyle prop.
   * @example rgba(255,255,255,0.8)
   */
  backdropColor?: string;

  /**
   * Style of modal's container
   */
  style?: ViewStyle;

  /**
   * Type of animation
   * uses withTiming if set to 'timing'
   * uses withSpring if set to 'spring'
   * @default "timing"
   * @example <<BottomModal animation='timing' timingConfig={{duration: 300, easing: Easing.quad}} height={500} ref={bottomModalRef}>>
   */
  animation?: "spring" | "timing";

  /**
   * Style of backdrop component
   */
  backdropStyle?: ViewStyle;
};

export type BottomModalRef = {
  /**
   * Shows modal
   */
  show: () => void;

  /**
   * Hides modal
   */
  dismiss: () => void;

  /**
   * true if modal is visible
   */
  isActive: boolean;
};
