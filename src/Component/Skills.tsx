export default function Skills(){

    interface skill_list{
        title: string;
        skill_name: string[];
    }

    const skills: skill_list[]=[
        {
            title: "Language",
            skill_name: ["Java", "Python", "HTML & CSS"]
        },
        {
            title: "Framework",
            skill_name: ["ReactJs", "NextJs", "TailwindCSS"]
        },
        {
            title: "Tools",
            skill_name: ["Git", "GitLab", "Vercel", "Figma"]
        },
    ]

    return(
        <main id="skills" className="min-h-screen px-3 py-16 md:px-10 mt-6">
            {/* Main title in solid black */}
            <h1 className="mb-10 text-sm font-serif md:text-6xl lg:text-7xl text-black">Skills</h1>

            <div className="space-y-6">
                {skills.map((category, index) => (
                    <div 
                        key={index} 
                        className="grid grid-cols-1 md:grid-cols-[280px_1fr] items-center py-6 border-b border-neutral-200 gap-4"
                    >
                        {/* Title Column: Normal block layout so multi-line text stays neatly grouped with its colon */}
                        <h3 className="text-sm md:text-lg lg:text-3xl font-semibold text-black">
                            {category.title} :
                        </h3>
                        
                        {/* Skills Column: Gray text, no hover effects */}
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-xl">
                            {category.skill_name.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className="text-xs md:text-lg lg:text-xl text-gray-500 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}