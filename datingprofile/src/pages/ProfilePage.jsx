import MusicCard from "../components/MusicCard";
import PromptCard from "../components/PromptCard";

export default function ProfilePage() {
    return(
        <div className = "profile-page">
            <section className = "hero-card">
                <img src="/photos/lumberjack.jpg" alt="Dakota" />
                <div className="hero-info">
                    <h1>Dakota, 34</h1>
                    <p>Pittsburgh</p>
                </div>
            </section>
            
                <PromptCard
                    prompt="Why even date me?"
                    answer="I'm caring, funny, loyal. I sound like a Golden Retriever, but I promise I'm not. You will always be my #1."
                />  

                <PromptCard
                    prompt="What is your dream date?"
                    answer="Going to Korean BBQ and eating all the food we can until they kick us out. Then we go to back to my place and play a board game. Night ends cuddling and talking until the sun comes up."
                />

                <PromptCard
                    prompt="How do you handle conflict?"
                    answer="I like to talk things out and find a solution where both parties are happy. I don't like to hold a grudge in a relationship, so I try to come to a resolution as quickly as possible."
                />

                <PromptCard
                    prompt="I'll pick the playlist if you..."
                    answer="Don't mind my white boy dance moves. I'll also be singing along so be prepared!"
                />

                <PromptCard
                    prompt="What is something you learned from a past relationship?"
                    answer="Codependency is not healthy. I need someone who has their own hobbies, wants, and dreams that does not mind that I have my own. I want us to be two people that come together to share a life, not become one person."
                />
                <PromptCard
                    prompt="My Roman Empire is..."
                    answer="The Kingdom Hearts series and lore. There is SO MUCH that I could talk about it for hours. I hope you wouldn't mind watching me play the games and talk about the story with you. I would love to hear your thoughts on it too!"
                />
            

            <section className="photo-card">
                <img src="/photos/rumble.jpg" alt="Dakota's Dog" />
            </section>

            <section className="music-card">
                <MusicCard />
            </section>

            <section className="invite-card">
                <h2>So...</h2>

                <p>Let's go on an adventure together!</p>

                <button>
                    Go on a date with me?
                </button>

                <button>
                    Create a profile back?
                </button>
            </section>
        </div>
    );
}
