

export default function Skills(){

    interface skill_list{
        title: string;
        skill_name: string[];
    }

    
    
    
    const skills: skill_list[]=[

        {
            title:"Language",
            skill_name:["Java", "python", "HTML & CSS"]
        },
        {
            title:"Framework / Library",
            skill_name:["ReactJs", "NextJs", "TailwindCSS"]
        },
        {
            title:"Tools",
            skill_name:["Git", "GitLab","Vercel","Figma"]
        },
    ]
    return(
    
        <main className="min-h-screen px-3 py-16  md:px-10 mt-6 border-2 border-black-600">
            <h1 className="mb-10 text-sm font-serif md:text-6xl lg:text-7xl text-black-800">Skills</h1>

            <div className="space-y-6">
                {skills.map((category, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 border-b border-neutral-200 dark:border-neutral-800 gap-2 "
                    >
                        {/* Title: Larger, bold, mono color contrast */}
                        <h3 className="text-sm font-semibold tracking-wide md:text-lg font-semiboldtext-black-900 lg:text-xl font-semibold text-black-900 ">
                            {category.title}
                        </h3>
                        
                        {/* Skills: Smaller, muted mono color */}
                        <div className="lg:flex justify-center gap-x-16 gap-y-2 border border-red-500 text-xl">
                            {category.skill_name.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className="text-xs  md:text-lg lg:text-xl text-grey-450  hover:text-neutral-900  cursor-default"
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