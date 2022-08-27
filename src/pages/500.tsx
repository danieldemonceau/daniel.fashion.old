import Link from "next/link";

export default function custom500() {
  return (
    <>
      <div className="text-slate-50">
        <p className="text-9xl">500</p>
        <p className="text-lg text-center">Server-side error occurred</p>
        <div className="mt-5">
          <Link href="/">&laquo; Home</Link>
        </div>
      </div>
    </>
  );
}
