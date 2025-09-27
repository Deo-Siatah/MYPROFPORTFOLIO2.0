import Projectpagecontainer from "@/components/Projectpagecontainer"
export default function NanaCare() {
    return (
        <div>
           <Projectpagecontainer
                title="DEADTIME"
                year="2025"
                image="/assets/Deadtimepic.png"
                description="Tons of people start projects (coding, business ideas, YouTube channels, etc.) but abandon
                    them. This platform preserves them, allows others to adopt, fork, or revive them — turning a “dead” project into a
                    community-driven restart."
                techniques={[
                    "React.js",
                    "Expressjs",
                    "websockets",
                    "Oauth",
                    "Tailwind CSS",
                    "shadcn",
                    "JWT & bcrypt",
                    "Axios",
                    "Mongodb",
                    "Vercel"
                ]}
                features={[
                    "🚀Graveyard view A dope visual timeline or graveyard map of abandoned projects.",
                    "✨Submit Project to the Graveyard: Users upload their unfinished projects with a short backstory and status i.e abandoned, on-hold, half-baked idea",
                    "✨Legacy Mode: Original creators can see updates and progress if someone revives it.",
                    "'✨Revival Streak: Leaderboards for those who’ve successfully brought dead projects back to life.",
                    "🚀Ghost Notes: People can leave encouraging notes or suggestions to the original creator anonymously.",
                ]}
                roles={[
                    "✅Designed backend  ",
                    "🚀Designed the Database",
                ]}   
                liveLink="https://deadtime2.vercel.app/"
                githubLink="https://github.com/creeksonJoseph/Deadtime"
                />


        </div>
    )
}