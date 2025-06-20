const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center w-full"
      style={{
        backgroundColor: "#0D0D0D", 
        backgroundImage: "url('/backgrounds/bg-ignitetax 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center flex-col md:flex-row text-center min-h-screen sm:pl-16 pl-1 sm:pr-16 pr-1 mt-6">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center ">
          
          <div className="header">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo/Ignite-Tax-Ai-4.png" alt="Ignite taxAI Logo" style={{ width: '400px', marginBottom: '16px' }} />
            </div>
            <h1 className="title-font sm:text-6xl text-3xl mb-6 font-large text-white text-shadow font-bold text-center">
              IgniteTaxAI:
            </h1>
          </div>
          <p className="mb-8 sm:pr-80 pr-10 sm:pl-80 pl-10 leading-relaxed sm:text-2xl text-yellow-200 text-center">
           AI Tax Assistant for Tax Professionals and Businesses
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
