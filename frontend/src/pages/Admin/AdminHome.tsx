export const AdminHome = () => {
  return (
    <>
      <p className="font-secondary p-5 text-4xl tracking-tight text-center">
        Welcome *name*
      </p>
      <div className="uppercase p-5 gap-5 grid grid-cols-2 items-center justify-center m-auto sm:w-3/4 md:w-1/2">
        <div className="bg-black text-white h-32 flex items-center justify-center">
          <p className="text-3xl">Orders</p>
        </div>
        <div className="bg-black text-white h-32 flex items-center justify-center">
          <p className="text-3xl">Products</p>
        </div>
        <div className="bg-black text-white h-32 flex items-center justify-center">
          <p className="text-3xl">Empty</p>
        </div>
        <div className="bg-black text-white h-32 flex items-center justify-center">
          <p className="text-3xl">Emtpy</p>
        </div>
      </div>
    </>
  );
};
