import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Smart Hybrid Energy Recommender System",
    category: "Data & Logic",
    image: "/projects/energy_dashboard.png",
    description: "Analyzed energy consumption patterns and recommended optimal hybrid energy solutions, improving efficiency and sustainability."
  },
  {
    title: "LinkedIn Clone",
    category: "Full Stack",
    image: "/projects/linkedin_clone.png",
    description: "Built a social platform with React.js and Node.js. Includes user authentication, profile management, image uploads, and MongoDB integration."
  },
  {
    title: "Portfolio Website",
    category: "Next.js",
    image: "/projects/portfolio_web.png",
    description: "Developed a personal portfolio using Next.js with server-side rendering (SSR), optimized for performance and SEO."
  },
  {
    title: "Task Management Dashboard",
    category: "Full Stack",
    image: "/projects/task_manager.png",
    description: "A comprehensive task management tool with kanban boards, real-time updates, and an elegant glassmorphism user interface."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-[#121212] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
          Selected Work
        </h2>
        
        <div className="flex flex-col gap-20 lg:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-16",
                  !isEven ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Image Card */}
                <div className="w-full lg:w-1/2">
                  <div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    <div className="aspect-video overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                      />
                    </div>
                  </div>
                </div>

                {/* Description Beside */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <a href="#" className="self-start inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
