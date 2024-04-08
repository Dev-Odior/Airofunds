const UnderRepair = () => {
  return (
    <section className="bg-black fixed top-0 z-[999999999]">
      <div className="h-[100vh] w-[100vw] flex md:flex-row flex-col items-center justify-center text-white">
        {/* <img src={logo} alt="" className="h-12 neonText md:h-40 " /> */}
        <p className="text-white neonText uppercase 2xl md:3xl font-bold flex items-center  justify-center gap-5 ">
          <span>The site is under Repairs, come back later </span>
        </p>
      </div>
    </section>
  );
};
export default UnderRepair;
