const ProductDetails = async ({
    params
}: {
    params: Promise<{ productId: string }>
}) => {
    const { productId } = await params;
    return <h1>Details about product {productId}</h1>
}

export default ProductDetails;