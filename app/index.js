/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "../constants/theme";
import { useRouter } from "expo-router";

function WelcomeScreen(props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      {/* liner gradient */}
      <Animated.View style={{ flex: 1 }} entering={FadeInDown.duration(600)}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.9 }}
        />
        {/* Content title */}
        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.duration(400).springify()}
            style={styles.title}
          >
            Pexels
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.duration(500).springify()}
            style={styles.subTitle}
          >
            Every Art tells a tale
          </Animated.Text>
          {/* start btn */}
          <Animated.View entering={FadeInDown.duration(600).springify()}>
            <TouchableOpacity
              style={styles.startbtn}
              onPress={() => router.push("home")}
            >
              <Text style={styles.startbtnText}>Start Exploring</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.bold,
  },
  subTitle: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium,
  },
  startbtn: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
  },
  startbtnText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium,
  },
});

export default WelcomeScreen;
