import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-[768px] mb-20 mx-auto min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-lg font-semibold mb-2">Product Not Found</h1>
      <Link href="/magic">Go back</Link>
    </main>
  );
}
