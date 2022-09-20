const Home = () => {
  return (
    <div className="w-screen h-screen">
      <section className="w-full h-full bg-amber-100">
        <div className="w-full px-3 h-44 bg-slate-600">
          <h1 className="pt-12 text-6xl text-center text-white">
            우혜림 portfolio
          </h1>
          <ul className="flex justify-between float-right w-1/3 h-auto text-xl text-white cursor-pointer">
            <li>Intro</li>
            <li>Wish</li>
            <li>Wish+</li>
            <li>Wescanner</li>
            <li>Wescanner+</li>
          </ul>
        </div>
        <div className="flex w-full h-4/5">
          <div className="flex-1 bg-lime-200">내용 1</div>
          <div className="flex-1 bg-yellow-500 ">내용 2</div>
        </div>
      </section>
      <section className="w-full h-full bg-slate-200">content1</section>
      <section className="w-full h-full bg-red-200">content1-1</section>
      <section className="w-full h-full bg-green-100">content2</section>
      <section className="w-full h-full bg-blue-200">content2-1</section>
    </div>
  );
};

export default Home;
