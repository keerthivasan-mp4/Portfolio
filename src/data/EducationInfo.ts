export interface Education{
    id:number;
    qualification: string;
    institution: string;
    duration: string;
}

export const EducationInfo:Education[]=[
    {
        id:1,
        qualification:"Master's of Computer Application",
        institution:"Garden City University",
        duration:"2024-2026"
    
    },
    {
        id:2,
        qualification:"Bachelor's of Computer Application",
        institution:"New Horizon College",
        duration:"2020-2023"
    
    },
    {
        id:3,
        qualification:"Higher Secondary [12th]",
        institution:"Indiranagar Composite PU College",
        duration:"2018-2020"
    
    },
]