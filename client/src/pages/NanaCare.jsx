import Projectpagecontainer from "@/components/Projectpagecontainer"
export default function NanaCare() {
    return (
        <div>
           <Projectpagecontainer
                title="NANACARE"
                year="2025"
                image="/assets/nanacareportfoliopic.png"
                description="A fullstack MERN application connecting domestic workers with verified employers under formal contracts, Focused on social impact, addressing informality and exploitation in domestic work."
                techniques={[
                    "React.js",
                    "Expressjs",
                    "Tailwind CSS",
                    "shadcn",
                    "JWT & bcrypt",
                    "Axios",
                    "Mongodb",
                    "Vercel"
                ]}
                features={[
                    "🌟Service Display System: Interactive service showcase with synchronized sliders.",
                    "🌟Blog Management: SEO-friendly blog with categorization and search.",
                    "🌟Product Showcase: Dynamic product grid with filtering and animations.",
                    "🌟worker/employer review systems",
                    "🌟Implemented secure authentication using JWT and bcypt",
                    "🌟Added job-matching and training modules to promote professionalism and fair labor practices"
                ]}
                roles={[
                    "✅Designed backend  ",
                    "🚀designed UI/UX",
                ]} 
                liveLink="https://nana-care-app-deo-siatah.vercel.app/"
                githubLink="https://github.com/Deo-Siatah/NANA-CARE-APP-"  
                />


        </div>
    )
}