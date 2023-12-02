"use client";
import { useState } from "react";
import Header from "@/components/magic/Header";
import Product from "@/components/magic/product/Product";
import Modal from "@/components/magic/product/Modal";
import Footer from "@/components/reusable/Footer";
import NotFound from "@/components/magic/product/NotFound";

export default function ProductPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <Product setShowModal={setShowModal} />
      {/* <NotFound /> */}
      <Footer />

      {showModal && <Modal />}
    </>
  );
}
