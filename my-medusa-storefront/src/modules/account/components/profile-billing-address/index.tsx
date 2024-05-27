"use client"

import { Customer, Region } from "@medusajs/medusa"
import React, { useEffect, useMemo } from "react"

import Input from "@modules/common/components/input"
import NativeSelect from "@modules/common/components/native-select"

import AccountInfo from "../account-info"
import { useFormState } from "react-dom"
import { updateCustomerBillingAddress } from "@modules/account/actions"

type MiInformacionProps = {
  customer: Omit<Customer, "password_hash">
  regions: Region[]
}

const DireccionFacturacionPerfil: React.FC<MiInformacionProps> = ({
  customer,
  regions,
}) => {
  const opcionesRegion = useMemo(() => {
    return (
      regions
        ?.map((region) => {
          return region.countries.map((country) => ({
            value: country.iso_2,
            label: country.display_name,
          }))
        })
        .flat() || []
    )
  }, [regions])

  const [estadoExitoso, setEstadoExitoso] = React.useState(false)

  const [estado, formAction] = useFormState(updateCustomerBillingAddress, {
    error: false,
    success: false,
  })

  const limpiarEstado = () => {
    setEstadoExitoso(false)
  }

  useEffect(() => {
    setEstadoExitoso(estado.success)
  }, [estado])

  const informacionActual = useMemo(() => {
    if (!customer.billing_address) {
      return "No hay dirección de facturación"
    }

    const pais =
      opcionesRegion?.find(
        (country) => country.value === customer.billing_address.country_code
      )?.label || customer.billing_address.country_code?.toUpperCase()

    return (
      <div className="flex flex-col font-semibold" data-testid="current-info">
        <span>
          {customer.billing_address.first_name}{" "}
          {customer.billing_address.last_name}
        </span>
        <span>{customer.billing_address.company}</span>
        <span>
          {customer.billing_address.address_1}
          {customer.billing_address.address_2
            ? `, ${customer.billing_address.address_2}`
            : ""}
        </span>
        <span>
          {customer.billing_address.postal_code},{" "}
          {customer.billing_address.city}
        </span>
        <span>{pais}</span>
      </div>
    )
  }, [customer, opcionesRegion])

  return (
    <form action={formAction} onReset={() => limpiarEstado()} className="w-full">
      <AccountInfo
        label="Dirección de facturación"
        currentInfo={informacionActual}
        isSuccess={estadoExitoso}
        isError={!!estado.error}
        clearState={limpiarEstado}
        data-testid="account-billing-address-editor"
      >
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-2">
            <Input
              label="Nombre"
              name="billing_address.first_name"
              defaultValue={customer.billing_address?.first_name || undefined}
              required
              data-testid="billing-first-name-input"
            />
            <Input
              label="Apellido"
              name="billing_address.last_name"
              defaultValue={customer.billing_address?.last_name || undefined}
              required
              data-testid="billing-last-name-input"
            />
          </div>
          <Input
            label="Compañía"
            name="billing_address.company"
            defaultValue={customer.billing_address?.company || undefined}
            data-testid="billing-company-input"
          />
          <Input
            label="Dirección"
            name="billing_address.address_1"
            defaultValue={customer.billing_address?.address_1 || undefined}
            required
            data-testid="billing-address-1-input"
          />
          <Input
            label="Casa, apartamento, etc..."
            name="billing_address.address_2"
            defaultValue={customer.billing_address?.address_2 || undefined}
            data-testid="billing-address-2-input"
          />
          <div className="grid grid-cols-[144px_1fr] gap-x-2">
            <Input
              label="Código postal"
              name="billing_address.postal_code"
              defaultValue={customer.billing_address?.postal_code || undefined}
              required
              data-testid="billing-postal-code-input"
            />
            <Input
              label="Ciudad"
              name="billing_address.city"
              defaultValue={customer.billing_address?.city || undefined}
              required
              data-testid="billing-city-input"
            />
          </div>
          <Input
            label="Departamento"
            name="billing_address.province"
            defaultValue={customer.billing_address?.province || undefined}
            data-testid="billing-province-input"
          />
          <NativeSelect
            name="billing_address.country_code"
            defaultValue={customer.billing_address?.country_code || undefined}
            required
            data-testid="billing-country-code-select"
          >
            <option value="">-</option>
            {opcionesRegion.map((opcion, i) => {
              return (
                <option key={i} value={opcion.value}>
                  {opcion.label}
                </option>
              )
            })}
          </NativeSelect>
        </div>
      </AccountInfo>
    </form>
  )
}

const mapBillingAddressToFormData = ({ customer }: MiInformacionProps) => {
  return {
    billing_address: {
      first_name: customer.billing_address?.first_name || undefined,
      last_name: customer.billing_address?.last_name || undefined,
      company: customer.billing_address?.company || undefined,
      address_1: customer.billing_address?.address_1 || undefined,
      address_2: customer.billing_address?.address_2 || undefined,
      city: customer.billing_address?.city || undefined,
      province: customer.billing_address?.province || undefined,
      postal_code: customer.billing_address?.postal_code || undefined,
      country_code: customer.billing_address?.country_code || undefined,
    },
  }
}

export default DireccionFacturacionPerfil
