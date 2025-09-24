import Projectpagecontainer from "@/components/Projectpagecontainer"
export default function NanaCare() {
    return (
        <div>
           <Projectpagecontainer
                title="MTI Electronics"
                year="2025"
                image=""
                description="A complete agency and portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings."
                techniques={[
                    "Next.js",
                    "Payload CMS",
                    "Tailwind CSS",
                    "shadcn",
                    "Swiper.js",
                    "React Hook Form",
                    "Vercel"
                ]}
                features={[
                    "Service Display System: Interactive service showcase with synchronized sliders.",
                    "Blog Management: SEO-friendly blog with categorization and search.",
                    "Product Showcase: Dynamic product grid with filtering and animations."
                ]}
                role="Led frontend development, designed UI/UX, integrated Payload CMS, and optimized deployment on Vercel."
                />


        </div>
    )
}