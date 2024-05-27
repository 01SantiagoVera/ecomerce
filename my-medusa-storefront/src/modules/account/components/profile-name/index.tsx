"use client"

import { Customer } from "@medusajs/medusa"
import React, { useEffect } from "react"
import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { updateCustomerName } from "@modules/account/actions"

import AccountInfo from "../account-info"

type MisInformacionProps = {
  customer: Omit<Customer, "password_hash">
}

const NombrePerfil: React.FC<MisInformacionProps> = ({ customer }) => {
  const [estadoExitoso, setEstadoExitoso] = React.useState(false)

  const [estado, formAction] = useFormState(updateCustomerName, {
    error: false,
    success: false,
  })

  const limpiarEstado = () => {
    setEstadoExitoso(false)
  }

  useEffect(() => {
    setEstadoExitoso(estado.success)
  }, [estado])

  return (
    <form action={formAction} className="w-full overflow-visible">
      <AccountInfo
        label="Nombre"
        currentInfo={`${customer.first_name} ${customer.last_name}`}
        isSuccess={estadoExitoso}
        isError={!!estado?.error}
        clearState={limpiarEstado}
        data-testid="account-name-editor"
      >
        <div className="grid grid-cols-2 gap-x-4">
          <Input
            label="Nombre"
            name="first_name"
            required
            defaultValue={customer.first_name}
            data-testid="first-name-input"
          />
          <Input
            label="Apellido"
            name="last_name"
            required
            defaultValue={customer.last_name}
            data-testid="last-name-input"
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default NombrePerfil
