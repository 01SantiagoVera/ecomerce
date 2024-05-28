import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Inicia sesión en tu cuenta de Medusa Store.",
}

const Login = () => {
  return <LoginTemplate />
}

export default Login
