import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const toggleHeader = () => setHeaderOpen((prev) => !prev);

  return (
    <>
      <Head>
        <title>LAS-WG</title>
        <meta name="description" content="A lean working group that develops standards for AI agents." />
        <meta property="og:title" content="Lightweight Agent Standard Working Group" />
        <meta property="og:description" content="A lean working group that develops standards for AI agents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://las-wg.org" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/assets/logo/logo1.png" type="image/x-icon" />
      </Head>
      <div className="flex flex-col min-h-[100vh] bg-[#ffffff] relative">
        {/* Header */}
        <div className="absolute top-0 flex h-[150px] w-full">
          <div className="header-gradient h-full w-full"></div>
        </div>

        <header className="lgtw-max-w-lg:justify-around max-w-lg:px-4 max-w-lg:mr-auto absolute top-0 z-20 flex h-[60px] w-full bg-opacity-0 px-[5%] text-black cover-white">
          <a className="h-[60%] p-[4px]" href="/" style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <img src="/logo.svg" alt="logo" className="hidden lg:block" style={{height: '100%'}} />
          </a>
          <div id="collapsed-header-items" className={`collapsible-header animated-collapse ${headerOpen ? "w-full" : "w-0"}`}>
            <div className="flex h-full w-max gap-5 text-base text-black max-lg:mt-[30px] max-lg:flex-col max-lg:place-items-end max-lg:gap-5 lg:mx-auto lg:place-items-center">
              <a className="header-links" href="#about-us">About us</a>
              <a className="header-links" href="https://github.com/las-wg">Github</a>
              <a className="header-links" href="https://discord.gg/wmRSNHsRAh">Discord</a>
              {/*<a className="header-links" href="">Company</a>*/}
            </div>
            <div className="mx-4 flex place-items-center gap-[20px] text-base max-md:w-full max-md:flex-col max-md:place-content-center">
              <a href="" aria-label="signup" className="rounded-full bg-primary px-3 py-2 text-white transition-transform duration-[0.3s] hover:translate-x-2">
                <span>Get started</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <button onClick={toggleHeader} aria-label="menu" id="collapse-btn" className="bi bi-list absolute right-3 top-3 z-50 text-3xl text-black lg:hidden"></button>
        </header>

        {/* Main landing sections */}
        
        <img src="/background.svg" className="black-to-primary" style={{ filter: "invert(1)", position: "absolute", width: "100vw", padding: "1em",  backgroundSize: "cover", opacity: 0.25, backgroundPosition: "center" }} />
        <main className="relative flex flex-col gap-16 p-8 pb-20 sm:p-20 mt-[60px]">
          {/* Hero Section */}
          <div className="flex flex-col items-center gap-6 p-[5%]">
          <div className="text-center text-6xl font-semibold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug cover-white" style={{ position:"absolute"}}>
              <span>Lightweight Agent Standards</span>
              <br />
              <span className="text-primary">Working Group</span>
            </div>
          </div>
          <section className="flex flex-col items-center gap-6 p-[5%]">
            
            <div className="mt-10 max-w-[450px] p-2 text-center max-lg:max-w-full cover-white text-xl">
            Creating the agent standards we need today.
            </div>
            <div className="mt-2 flex place-items-center gap-4 p-2 cover-white">
              <a className="btn transition-transform duration-[0.3s] hover:scale-x-[1.03]" href="https://discord.gg/wmRSNHsRAh">
                Discord
              </a>
              <a className="btn !bg-[#c8cbf984] !text-primary transition-transform duration-[0.3s] hover:scale-x-[1.03] cover-white" href="#about-us">
                <span>Learn more</span>
              </a>
            </div>
            <div className="reveal mt-6 flex gap-4 text-2xl">
              {/* ... any social icons or additional markup ... */}
            </div>
            {/*<div className="flex w-full place-content-center place-items-center">
              <div className="relative flex w-fit place-content-center place-items-center">
                <div className="flex max-h-[550px] min-h-[450px] min-w-[350px] max-w-[650px] overflow-hidden rounded-2xl shadow-xl max-lg:h-fit max-lg:max-h-[320px] max-lg:min-h-[150px] max-lg:w-[320px]">
                  <Image src="/assets/images/home/dashboard.png" alt="dashboard" width={650} height={550} className="object-cover max-lg:object-contain" />
                </div>
              </div>
            </div>*/}
          </section>

          {/* Brands Section */}
          {/*<section className="relative flex w-full max-w-[100vw] flex-col items-center p-6">
            <div className="flex w-full place-content-center gap-10">
              <div className="h-[30px] w-[150px]">
                <Image src="/assets/images/brand-logos/google.svg" alt="Google" width={150} height={30} className="object-contain grayscale transition-colors hover:grayscale-0" />
              </div>
              <div className="h-[30px] w-[150px]">
                <Image src="/assets/images/brand-logos/microsoft.svg" alt="Microsoft" width={150} height={30} className="object-contain grayscale transition-colors hover:grayscale-0" />
              </div>
              <div className="h-[30px] w-[150px]">
                <Image src="/assets/images/brand-logos/adobe.svg" alt="Adobe" width={150} height={30} className="object-contain grayscale transition-colors hover:grayscale-0" />
              </div>
            </div>
          </section>*/}

          {/* Core Features Section */}
          <section id="about-us" className="relative flex w-full flex-col items-center p-6 cover-white pb-1">
            <div className="flex max-w-[750px] flex-col gap-5 text-center">
              <h2 className="mt-10 text-4xl font-semibold max-lg:text-3xl">
                Small, <span className="text-primary">Specific</span> Standards
              </h2>
              <div className="text-gray-700">
              LAS-WG develops interoperable standards for agent communication. We address concrete, immediate challenges by defining clear, focused guidelines that enhance consistency across the industry.
              </div>
            </div>
            <div className="mt-6 flex flex-wrap place-content-center gap-2 max-lg:flex-col">
              {/* Repeat feature cards */}
              {[
                { icon: "bi-boombox-fill", title: "Build Small", content: "We focus on specific parts of agent communication." },
                { icon: "bi-award-fill", title: "Application-Driven", content: "We work with the major agent companies & organizations to focus on the issues that matter."},
                { icon: "bi-book-fill", title: "Quick & Iterative", content: "We prefer testing something rather than debating if it will work." },
              ].map((feat, idx) => (
                <div key={idx} className="flex  w-[350px] flex-col gap-2 p-4 text-center max-lg:w-[320px]">
                  <i className={`bi ${feat.icon} text-5xl text-primary`}></i>
                  <h3 className="text-2xl font-semibold">{feat.title}</h3>
                  <div className="text-[#595959]">
                    {feat.content}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          {/*<section className="mt-5 flex w-full flex-col items-center p-[2%]">
            <h3 className="text-3xl font-medium text-primary max-md:text-2xl">Member Organizations</h3>
            <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
              {[ 
                { name: "Samuele Marro", title: "University of Oxford", img: "/assets/images/people/women.jpg", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero." },
                { name: "Nuno Campos", title: "LangChain", img: "/assets/images/people/man.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt delectus consectetur enim cupiditate ab nemo voluptas repellendus qui quas.." },
                { name: "Jesse Wright", title: "University of Oxford", img: "/assets/images/people/man2.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, numquam." },
                { name: "Lara", title: "xz, cto", img: "/assets/images/people/women.jpg", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe illum. Dicta quisquam praesentium quod!" },
                { name: "James", title: "app, cto", img: "/assets/images/people/man.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga accusamus non enim debitis rem neque beatae explicabo corrupti porro ullam?" },
                { name: "Ron", title: "marketplace, cto", img: "/assets/images/people/man2.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga accusamus non enim debitis rem neque beatae explicabo corrupti porro ullam?" }
              ].map((t, idx) => (
                <div key={idx} className="flex h-fit w-[350px] break-inside-avoid flex-col rounded-lg p-4 shadow-lg max-lg:w-[320px]">
                  <div className="flex place-items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-full border-[2px] border-solid border-primary">
                      <Image src={t.img} alt={t.name} width={50} height={50} className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-[#4b4b4b]">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>*/}

          <section className="mt-5 flex w-full flex-col items-center p-[2%] pb-1">
            <h3 className="text-4xl font-medium text-primary max-md:text-2xl">Membership</h3>
            <h2 className="text-xl max-md:text-lg p-2">Members join individually. We have members from several organizations, including:</h2>
            <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
              {[ 
                { name: "LangChain", img: "langchain.png" },
                { name: "Camel AI", img: "camelai.png" },
                { name: "University of Oxford", img: "oxford.png" },
                { name: "Stanford University", img: "stanford.png" },
                { name: "Massachussets Institute of Technology", img: "mit.png" },
                { name: "Cosmos Institute", img: "cosmos.png" },
                { name: "Wildcard", img: "wildcard.png" },
                { name: "Agent Network Protocol", img: "anp.png"},
                { name: "Eclipse LMOS", img: "eclipse-lmos.png"},
                { name: "AgentOps", img: "agentops.png"},
                { name: "Firecrawl", img: "firecrawl.png"},
              ].map((t, idx) => (
                <div key={idx} className="flex h-fit w-[350px] break-inside-avoid flex-col rounded-lg p-4 shadow-lg max-lg:w-[320px]">
                  <div className="flex place-items-center gap-3">
                    <img src={"/orgs/" + t.img} alt={t.name} className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          

          

          {/* Pricing Section */}
          {/*<section id="pricing" className="mt-5 flex w-full flex-col items-center p-[2%]">
            <h3 className="text-3xl font-medium text-primary max-md:text-2xl">Simple pricing</h3>
            <div className="mt-10 flex flex-wrap place-content-center gap-8 max-lg:flex-col">
              {[
                { price: "$9", period: "/mo", items: ["Lorem ipsum dolor sit amet.", "Lorem, ipsum.", "Lorem, ipsum dolor.", "Lorem ipsum dolor sit."] },
                { price: "$19", period: "/mo", items: ["Lorem ipsum dolor sit amet.", "Lorem, ipsum.", "Lorem, ipsum dolor.", "Lorem ipsum dolor sit."] },
                { price: "$49", period: "/mo", items: ["Lorem ipsum dolor sit amet.", "Lorem, ipsum.", "Lorem, ipsum dolor.", "Lorem ipsum dolor sit."] }
              ].map((plan, idx) => (
                <div key={idx} className={`flex w-[380px] flex-col items-center gap-2 rounded-lg p-8 shadow-xl max-lg:w-[320px] ${idx === 1 ? "border-2 border-primary" : ""}`}>
                  <h3>
                    <span className="text-5xl font-semibold">{plan.price}</span>
                    <span className="text-2xl text-gray-600">{plan.period}</span>
                  </h3>
                  <p className="mt-3 text-center text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo!
                  </p>
                  <hr className="my-4" />
                  <ul className="mt-4 flex flex-col gap-2 text-center text-lg text-gray-600">
                    {plan.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="http://" className="btn mt-8 !w-full transition-transform duration-[0.3s] hover:scale-x-[1.02]">
                    Get now
                  </a>
                </div>
              ))}
            </div>
          </section>*/}

          <section className="flex w-full flex-col items-center gap-[10%] p-[5%] px-[10%]">
            <div className="flex w-full flex-col items-center gap-3">
              <h2 className="text-2xl text-primary max-md:text-xl">Stay updated</h2>
              <h2 className="text-xl max-md:text-lg">Weekly meetings on AI agent standards.</h2>
              <div className="flex h-[60px] items-center gap-2 overflow-hidden p-2">
              <a className="btn transition-transform duration-[0.3s] hover:scale-x-[1.03]" href="https://discord.gg/wmRSNHsRAh">
                Join our Discord
              </a>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          {/*<section className="flex w-full flex-col items-center gap-[10%] p-[5%] px-[10%]">
            <div className="flex w-full flex-col items-center gap-3">
              <h2 className="text-2xl text-primary max-md:text-xl">Newsletter</h2>
              <h2 className="text-xl max-md:text-lg">Keep yourself updated</h2>
              <div className="flex h-[60px] items-center gap-2 overflow-hidden p-2">
                <a className="btn transition-transform duration-[0.3s] hover:scale-x-[1.03]" href="">
                Discord
              </a>
              </div>
            </div>
          </section>*/}

          {/* Footer Section */}
          <footer className="mt-auto flex w-full place-content-around gap-3 p-[5%] px-[10%] text-black max-md:flex-col">
            <div className="flex h-full w-[250px] flex-col items-center gap-6 max-md:w-full">
              {/*<Image src="/assets/logo/logo1.png" alt="logo" width={120} height={120} className="max-w-[120px]" />*/}
              <img src="/logo.svg" alt="logo" style={{height: '100%'}} />
              
              {/*<div className="mt-3 text-lg font-semibold">Follow us</div>
              <div className="flex gap-4 text-2xl">
                <a href="" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com/@pauls_freeman" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://instagram.com/" className="h-[40px] w-[40px]" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>*/}
            </div>
            <div className="flex h-full w-[250px] flex-col gap-4">
              <h2 className="text-3xl max-md:text-xl">Resources</h2>
              <div className="flex flex-col gap-3 max-md:text-sm">
                <a href="https://discord.gg/wmRSNHsRAh" className="footer-link">Discord</a>
                <a href="https://github.com/las-wg" className="footer-link">Github</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}