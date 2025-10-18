import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { UserProvider } from "../src/context/userContext";

export default function Layout() {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade"
        }}
      />
    </UserProvider>
  );
}




