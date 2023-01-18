const Reciept = () => {
  const data = JSON.parse(window.localStorage.getItem("new_order"));
  console.log(data);
  return (
    <div className="w-full h-screen py-5">
      <div className="px-5">
        <h1 className="font-bold text-2xl">Awaiting Meals...</h1>
      </div>
      <div className="mt-5">
        <div className="w-full bg-orange-600 px-10 py-10">
          <div className="w-full bg-white py-4 px-3 shadow-lg rounded-lg h-[300px] grid items-center justify-center">
            <h1 className="text-5xl font-bold text-orange-600 ">
              {data?.data?.id}
            </h1>
          </div>
        </div>
        <div className="px-10 mt-5">
          <p>
            <span className="text-orange-600"> Note:</span> Calmly wait as your
            meal is being prepared,Your order number{" "}
            <span className="text-orange-600 font-semibold">(above)</span> will
            be called when your meal is ready to be served.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reciept;
