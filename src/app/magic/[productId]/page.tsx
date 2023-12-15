import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/magic/Header";
import Product from "@/components/magic/product/Product";
import Footer from "@/components/reusable/Footer";
import { getAllProducts } from "@/components/magic/product/getAllProducts";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const res = await getAllProducts(params.productId);

  if (res?.error || !res) {
    return {
      title: "Fitted Magic Tags - Not Found",
    };
  }

  return {
    title: `Fitted Magic Tags - ${res?.data?.tagged_product?.name}`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const res = await getAllProducts(params.productId);

  if (res?.error || !res) {
    return notFound();
  }

  return (
    <>
      <Header />
      <Product product={res?.data?.tagged_product} />
      <Footer />
    </>
  );
}
