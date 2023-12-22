export const getAllProducts = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}product/tagged-product/${id}`
    );
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching product");
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
  }
};
