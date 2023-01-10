/* eslint-disable react/jsx-no-target-blank */

export default function Home() {
  return (
    <>
      <p className="pt-5 text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className=" grid lg:grid-cols-3 gap-5 mb-16">
        <div className=" rounded bg-white h-40 shadow-sm"></div>
        <div className=" rounded bg-white h-40 shadow-sm"></div>
        <div className=" rounded bg-white h-40 shadow-sm"></div>
      </div>
      <div className=" grid col-1 bg-white h-64 shadow-sm"></div>
    </>
  );
}
