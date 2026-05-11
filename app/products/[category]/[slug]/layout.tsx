import { Metadata } from "next";
import { PRODUCTS } from "@/lib/seed-data";
import ProductDetailPage from "./page";
import { use } from "react";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Axion Technology`,
    description: product.short_description,
    openGraph: {
      title: product.name,
      description: product.short_description,
      images: [{ url: product.featured_image }],
    },
  };
}

export default ProductDetailPage;
