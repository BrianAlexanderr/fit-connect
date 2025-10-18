import { Stack } from "expo-router";
import { RegistrationProvider } from "../../../src/context/RegistrationContext";

export default function RegisterLayout() {
  return (
    <RegistrationProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="RegisterName" />
        <Stack.Screen name="RegisterEmail" />
        <Stack.Screen name="RegisterInfo" />
      </Stack>
    </RegistrationProvider>
  );
}

