import Image from "next/image";

export default function Home() {
  const name = "Sreeram Reddy Velagala"
  const roles = ["Senior Software Engineer", "Full-Stack Developer"]
  const title = ["Engineering", "High-Performance", "Full-Stack Systems & AI Frontiers"]
  const subtitle = "Building high-performance financial systems & LLM-integrated platforms."
  const exploreWorkButtonText = "Explore My Work"
  const downloadResumeButtonText = "Download Resume"

  // Section 2: Core Expertise
  const section2Title = "Core Expertise"
  const cardDetails = [
    {
      icon: "payments",
      title: "Fintech Systems",
      description: "Building resilient, low-latency transaction engines and complex ledger systems using Spring Boot and Java."
    },
    {
      icon: "psychology",
      title: "AI-Accelerated",
      description: "Leveraging GenAI for faster development cycles and integrating LLMs into enterprise-grade applications."
    },
    {
      icon: "architecture",
      title: "Tech Stack",
    }
  ]

  // Section 3: Selected Work
  const section3Title = "Selected Work"
  const section3Subtitle = "A collection of projects bridging the gap between algorithmic complexity and user-centric design."

  // Section 4: Call to Action
  const section4Title = "Ready to engineer your next high-performance system?"

  const modifiedTitle = title.map((word, idx) => {
    if (idx === 1) {
      return <p key={idx} className="text-[#9e8b8b]">{word}</p>
    }
    return <p key={idx}>{word}</p>
  })
  
  return (
    <>
      <div>
        <div className="flex gap-10 min-h-160 justify-between m-10">
          <div className="flex flex-col gap-4 relative">
            <p className="uppercase font-mono text-[12px] text-[#535353] tracking-[0.16em]">{roles.join(" / ")}</p>
            <div className="max-w-175">
              <h1 className="uppercase font-sora font-extrabold text-7xl tracking-tighter">{modifiedTitle}</h1>
            </div>
            <div className="flex gap-4">
              <button className="btn-secondary text-[12px]">{exploreWorkButtonText}</button>
              <button className="btn-secondary text-[12px]">{downloadResumeButtonText}</button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-3 max-w-72.5 p-4 self-end">
            <p className="uppercase font-mono text-[12px] text-[#535353]">{roles.join(" / ")}</p>
            <p className="font-bold font-inter text-black">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="m-10">
        <h2 className="uppercase font-sora text-5xl font-extrabold">{section2Title}</h2>
        <div className="border-4 w-33 mt-5 mb-10"></div>
        <div className="grid grid-cols-3 gap-5">
          {
            cardDetails.map(card => {
              return (
                <div 
                  key={card.icon} 
                  className="flex flex-col gap-2 border-3 border-black min-w-75 card-shadow px-8 py-10 text-black even:bg-black even:text-[#00F0FF]"
                >
                  <span className="material-symbols-outlined text-4xl! mb-6">{card.icon}</span>
                  <h3 className="font-bold font-inter">{card.title}</h3>
                  <p className="font-light font-inter">{card.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <h2>{section3Title}</h2>
        <p>{section3Subtitle}</p>

        <div>
          Project1
        </div>
        <div>
          Project2
        </div>
      </div>
      <div>
        <h2>{section4Title}</h2>
        <button>{exploreWorkButtonText}</button>
        <button>{downloadResumeButtonText}</button>
      </div>
    </>
  );
}
