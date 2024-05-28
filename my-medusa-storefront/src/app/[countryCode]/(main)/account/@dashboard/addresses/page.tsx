import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getCustomer, getRegion } from "@lib/data"

import { headers } from "next/headers"

export const metadata: Metadata = {
  title: "Direcciones",
  description: "Ver tus direcciones",
}

export default async function Addresses() {
  const nextHeaders = headers()
  const countryCode = nextHeaders.get("next-url")?.split("/")[1] || ""
  const customer = await getCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="addresses-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Direcciones de envío</h1>
        <p className="text-base-regular">
        Ver y actualizar tus direcciones de envío, puedes agregar tantas como
          desees. Guardar tus direcciones las hará disponibles durante el
          proceso de pago.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}