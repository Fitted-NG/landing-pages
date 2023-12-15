export const getAllProducts = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}product/tagged-product/${id}`
    );
    return res.json();
  } catch (error) {
    return error;
  }
};
