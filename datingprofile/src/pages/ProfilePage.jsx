import { useState } from "react";
import MusicCard from "../components/MusicCard";
import PromptCard from "../components/PromptCard";
import PhotoCard from "../components/PhotoCard";

export default function ProfilePage() {
    // 1. Separate state variables for both popups
    const [showRightPopup, setShowRightPopup] = useState(false);
    const [showLeftPopup, setShowLeftPopup] = useState(false);

    // Reuseable inline style for the popup boxes
    const popupStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '30px',
        border: '2px solid #000',
        boxShadow: '0px 4px 15px rgba(0,0,0,0.4)',
        zIndex: 1000,
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '400px',
        width: '90%',
        color: '#000'
    };

    return (
        <div className="profile-page">
            <section className="hero-card">
                <img src="/photos/lumberjack.jpg" alt="Dakota" />
                <div className="hero-info">
                    <h1>Dakota, 34</h1>
                    <p>Pittsburgh</p>
                    <p>Hello, Lexy! This page has been curated just for you. For some reason you just make me want to go above and beyond for anything I do for you, so I hope you at least think this is funny, even if you say no.</p>
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

            <MusicCard />

            <PromptCard
                prompt="How do you handle conflict?"
                answer="I like to talk things out and find a solution where both parties are happy. I don't like to hold a grudge in a relationship, so I try to come to a resolution as quickly as possible."
            />

            <PhotoCard
                photo={<img src="/photos/rumble.jpg" alt="Dakota's Dog" />} />

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
            
            <PhotoCard
                photo={<img src="/photos/dakots.jpg" alt="Kingdom Hearts" />} />
            <section className="invite-card">
                <h2>So...</h2>
                <p>I know that you have a lot going on, and I am not rushing you in any way. Just wanted to do something cute for you! The decision is still yours. Would you go on a date with me?</p>

                {/* Triggers the Right Popup */}
                <button onClick={() => setShowRightPopup(true)}>
                    Swipe Right!
                </button>
                {" "}
                {/* Triggers the Left Popup */}
                <button onClick={() => setShowLeftPopup(true)}>
                    Swipe Left...
                </button>
            </section>

            {/* Swipe Left Popup Box */}
            {showLeftPopup && (
                <div style={popupStyle}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', lineHeight: '1.4' }}>
                        Okay! Thank you for being honest with me! This doesn't change how I feel about you, and I hope we can still be friends.
                    </p>
                    <button 
                        onClick={() => setShowLeftPopup(false)}
                        style={{ padding: '8px 16px', cursor: 'pointer' }}
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Swipe Right Popup Box */}
            {showRightPopup && (
                <div style={popupStyle}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', lineHeight: '1.4' }}>
                        Yeah...I had a feeling you would say yes! I can't wait to see you. I will be in touch soon to set up a date!
                    </p>
                    <button 
                        onClick={() => setShowRightPopup(false)}
                        style={{ padding: '8px 16px', cursor: 'pointer' }}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}
