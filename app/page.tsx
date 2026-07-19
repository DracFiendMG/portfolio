import Image from "next/image";

export default function Home() {
  const name = "Sreeram Reddy Velagala";
  const role = "Senior Software Engineer";
  const title = "Engineering High-Performance Full-Stack Systems & AI Frontiers";
  return (
    <div>
      <div>
        <p>{name} // {role}</p>
        <h1>{title}</h1>
        <button>Explore My Work</button>
        <button>Download Resume</button>
      </div>
    </div>
  );
}
