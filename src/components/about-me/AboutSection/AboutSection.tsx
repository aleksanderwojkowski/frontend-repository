interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection = ({ title, description }: AboutSectionProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

      <p className="break-words text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </section>
  );
};

export default AboutSection;
