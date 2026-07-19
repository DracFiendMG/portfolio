import Image from "next/image";

export default function Home() {
  const name = "Sreeram Reddy Velagala"
  const roles = ["Senior Software Engineer", "Full-Stack Developer"]
  const title = "Engineering High-Performance Full-Stack Systems & AI Frontiers"
  const subtitle = "Building high-performance financial systems & LLM-integrated platforms."
  const exploreWorkButtonText = "Explore My Work"
  const downloadResumeButtonText = "Download Resume"

  // Section 2: Core Expertise
  const section2Title = "Core Expertise"

  // Section 3: Selected Work
  const section3Title = "Selected Work"
  const section3Subtitle = "A collection of projects bridging the gap between algorithmic complexity and user-centric design."

  // Section 4: Call to Action
  const section4Title = "Ready to engineer your next high-performance system?"
  
  return (
    <>
      <div>
        <div>
          <p>{name} // {roles[0]}</p>
          <h1>{title}</h1>
          <button>{exploreWorkButtonText}</button>
          <button>{downloadResumeButtonText}</button>
        </div>
        <div>
          <p>{roles.join(" / ")}</p>
          <p>{subtitle}</p>
        </div>
      </div>
      <div>
        <h2>{section2Title}</h2>
        <div>
          <div>
            Card1
          </div>
          <div>
            Card2
          </div>
          <div>
            Card3
          </div>
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
