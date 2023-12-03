import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/magic/Header";
import Product from "@/components/magic/product/Product";
import Footer from "@/components/reusable/Footer";
import { productsInfo } from "@/utils/magicProductsInfo";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = productsInfo.find(
    (product) =>
      product.code.toLocaleLowerCase() === params.productId.toLocaleLowerCase()
  );

  return {
    title: `Fitted Magic Tags - ${product?.name}`,
  };
}

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = productsInfo.find(
    (product) =>
      product.code.toLocaleLowerCase() === params.productId.toLocaleLowerCase()
  );

  if (!product) {
    return notFound();
  }

  return (
    <>
      <Header />
      <Product product={product} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const products = productsInfo.map((product) => ({
    productId: product.code,
  }));

  return products;
}
