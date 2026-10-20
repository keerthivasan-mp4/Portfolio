import { EducationInfo } from "../data/EducationInfo";

export default function Education() {
    return (
        <main id="education" className="min-h-70 px-3 py-16 md:px-10  border">
            {/* Main Section Title */}
            <h1 className="mb-10 text-sm font-serif md:text-6xl lg:text-7xl text-black">Education</h1>

            <div className="space-y-8">
                {EducationInfo.map((item) => (
                    <div 
                        key={item.id} 
                        className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-baseline py-6 border-b border-neutral-200 gap-4"
                    >
                        {/* Left Side: Qualification & Institution Hierarchy */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg md:text-xl font-semibold text-black lg:text-4xl ">
                                {item.qualification}
                            </h3>
                            <p className="text-sm md:text-lg text-gray-500 lg:text-2xl">
                                {item.institution}
                            </p>
                        </div>
                        
                        {/* Right Side: Year / Duration placed at the right end */}
                        <div className="text-xs md:text-base font-medium text-gray-400 uppercase tracking-wider">
                            {item.duration}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}