export default function CommonCard({ children }: any) {
  return (
    <div className="mx-auto w-full rounded-xl border border-stroke bg-stroke/5 px-6 py-10 sm:p-[70px] dark:border-transparent dark:bg-[#1D232D]">
      {children}
    </div>
  );
}
