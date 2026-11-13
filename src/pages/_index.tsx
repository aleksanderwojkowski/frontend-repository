import AboutSection from "../components/about-me/AboutSection/AboutSection";
import InterestsSection from "../components/about-me/InterestsSection/InterestsSection";
import ProfileHeader from "../components/about-me/ProfileHeader/ProfileHeader";
import TechnologiesSection from "../components/about-me/TechnologiesSection/TechnologiesSection";

const Index = () => {
  return (
    <main className="min-h-screen px-4 py-12 md:px-8">
      <div className="mx-auto w-full max-w-3xl space-y-12">
        <ProfileHeader
          name="Aleksander Wojkowski"
          description="Frontend Developer learning React, TypeScript and modern web development."
        />

        <AboutSection
          title="About me"
          description="I am a beginner frontend developer interested in web development and modern technologies. I enjoy learning new things, programming and building interesting projects."
        />
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-md underline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Visit my GitHub profile
        </a>
        <InterestsSection
          title="My interests"
          interests={["Programming", "Gaming", "Music", "Technology"]}
        />

        <TechnologiesSection
          title="Technologies I use"
          technologies={[
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Git",
          ]}
        />
      </div>
    </main>
  );
};

export default Index;
