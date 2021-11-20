/* eslint-disable no-use-before-define */
import React, {
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  forwardRef
} from "react";
import { StyleSheet, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import { screen } from "../../utils/screen";
import type { BottomModalProps, BottomModalRef } from "./types";

const BottomModal = forwardRef<
  BottomModalRef,
  PropsWithChildren<BottomModalProps>
>(
  (
    { height, backdropColor, style, children, backdropStyle, animation },
    ref
  ) => {
    const maxHeight = Math.min((screen.height / 4) * 3, height);

    const top = useSharedValue(screen.height);

    // Animates top value
    const updateTop = useCallback(
      (value: number) => {
        "worklet";

        if (animation === "spring") {
          return withSpring(value);
        }
        return withTiming(value);
      },
      [animation]
    );

    const isActive = useDerivedValue<boolean>(() => {
      if (top?.value > screen.height - 10) {
        return false;
      }
      return true;
    }, [top]);

    useImperativeHandle(ref, () => ({
      show: () => {
        top.value = updateTop(screen.height - maxHeight);
      },
      dismiss: () => {
        top.value = updateTop(screen.height);
      },
      isActive: isActive?.value
    }));

    const gestureHandler = useAnimatedGestureHandler<
      PanGestureHandlerGestureEvent,
      { startHeight: number }
    >({
      onStart: (_, context) => {
        context.startHeight = top?.value;
      },
      onActive: (event, context) => {
        // Prevent modal to go up more than it should
        if (
          context.startHeight + event.translationY >
          screen.height - maxHeight
        ) {
          top.value = context.startHeight + event.translationY;
        }
      },
      onEnd: () => {
        // Determine if modal should close or go back to its original height
        if (top.value > screen.height - maxHeight / 2) {
          top.value = updateTop(screen.height);
        } else {
          top.value = updateTop(screen.height - maxHeight);
        }
      }
    });

    const containerAnimatedStyle = useAnimatedStyle(() => ({
      top: top.value
    }));

    const backdropAnimatedStyle = useAnimatedStyle(() => ({
      // Less opaque if top value is larger, vice verca
      opacity: interpolate(
        top.value,
        [screen.height - maxHeight, screen.height],
        [1, 0]
      ),
      // don't show backdrop component if modal is not present, as it cancels any touch events
      top: isActive.value ? 0 : screen.height
    }));

    return (
      <View style={styles.fullScreen}>
        <Animated.View
          style={[
            styles.backdrop,
            { backgroundColor: backdropColor },
            backdropStyle,
            backdropAnimatedStyle
          ]}
        />
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              styles.container,
              { height: maxHeight },
              style,
              containerAnimatedStyle
            ]}
          >
            {children}
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  fullScreen: {
    height: screen.height,
    position: "absolute",
    top: 0,
    left: screen.width / 2,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  backdrop: {
    position: "absolute",
    height: screen.height,
    width: screen.width
  },
  container: {
    width: Math.min(screen.width - 20, 500),
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  }
});

export { BottomModal };
