import { StoreGetProductsParams } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getProductsList, getRegion } from "@lib/data"

import ProductPreview from "../product-preview"

type RelatedProductsProps = {
  product: PricedProduct
  countryCode: string
}

const RelatedProducts = ({ product, countryCode }: RelatedProductsProps) => {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const setQueryParams = (): StoreGetProductsParams => {
    const params: StoreGetProductsParams = {}

    if (region?.id) {
      params.region_id = region.id
    }

    if (region?.currency_code) {
      params.currency_code = region.currency_code
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }

  const queryParams = setQueryParams()

  const { response } = await getProductsList({
    queryParams,
    countryCode,
  })

  const productPreviews = response.products.filter(
    (productPreview) => productPreview.id !== product.id
  )

  if (!productPreviews.length) {
    return null
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          Productos relacionados
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          También puedes querer echarle un vistazo a estos productos.
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {productPreviews.map((productPreview) => (
          <li key={productPreview.id}>
            <ProductPreview region={region} productPreview={productPreview} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedProducts
