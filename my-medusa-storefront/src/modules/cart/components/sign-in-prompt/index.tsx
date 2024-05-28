import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      {/* Encabezado */}
      <div>
        <Heading level="h2" className="txt-xlarge">
          ¿Ya tienes una cuenta?
        </Heading>
        {/* Texto de descripción */}
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Inicia sesión para obtener una mejor experiencia.
        </Text>
      </div>
      {/* Botón de inicio de sesión */}
      <div>
        {/* Enlace localizado para dirigir al usuario a la página de inicio de sesión */}
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10" data-testid="sign-in-button">
            Iniciar sesión
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
