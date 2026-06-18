// utils/getFeaturedImage.js
export const getFeaturedImage = (productId, productImages) => {
  const productImageSet = productImages.find((p) => p.productId === productId);

  if (!productImageSet) return null;

  return (
    productImageSet.images.find((img) => img.isFeatured) ||
    productImageSet.images[0]
  );
};
