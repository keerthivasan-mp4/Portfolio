export default function Experience() {

    interface ExperienceItem {
        position: string;
        organization: string;
        duration: string;
    }

    const experiences: ExperienceItem[] = [
        {
            position: "Web Developer Intern",
            organization: "Robas Research",
            duration: "Current"
        },
        {
            position: "Frontend Developer Intern",
            organization: "Yaswanth Rural Development (NGO)",
            duration: "Feb 2026 - April 2026"
        }
    ];

    return (
        <main id="experience" className="min-h-screen px-3 py-16 md:px-10 mt-6">
            {/* Main Section Title */}
            <h1 className="mb-10 text-sm font-serif md:text-6xl lg:text-7xl text-black">Experience</h1>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div 
                        key={index} 
                        className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-baseline py-6 border-b border-neutral-200 gap-4"
                    >
                        {/* Left Side: Position & Organization Hierarchy */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg md:text-2xl font-semibold text-black">
                                {exp.position}
                            </h3>
                            <p className="text-sm md:text-lg text-gray-500">
                                {exp.organization}
                            </p>
                        </div>
                        
                        {/* Right Side: Duration (Muted, aligned for visual balance) */}
                        <div className="text-xs md:text-base font-medium text-gray-400 uppercase tracking-wider">
                            {exp.duration}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}