import type React from "react"
import { createContext, useContext, useState } from "react"

interface RegistrationData {
  firstName: string
  lastName: string
  fullName: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
  dateOfBirth: string
}

interface RegistrationContextType {
  data: RegistrationData
  updateData: (newData: Partial<RegistrationData>) => void
  resetData: () => void
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined)

const initialData: RegistrationData = {
  firstName: "",
  lastName: "",
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  dateOfBirth: "",
}

export function RegistrationProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<RegistrationData>(initialData)

  const updateData = (newData: Partial<RegistrationData>) => {
    setData((prev) => ({ ...prev, ...newData }))
  }

  const resetData = () => {
    setData(initialData)
  }

  return <RegistrationContext.Provider value={{ data, updateData, resetData }}>{children}</RegistrationContext.Provider>
}

export function useRegistration() {
  const context = useContext(RegistrationContext)
  if (!context) {
    throw new Error("useRegistration must be used within RegistrationProvider")
  }
  return context
}
