import Link from "next/link";

export default function custom404() {
  return (
    <>
      <div className="text-slate-50 left-0 right-0 mx-auto">
        <div className="bg-slate-200 opacity-25 w-fit inset-0 mx-auto">
          <p className="text-9xl text-center">404</p>
          <p className="text-lg text-center">Page Not Found</p>
          <div className="mt-5">
            <Link href="/">&laquo; Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
