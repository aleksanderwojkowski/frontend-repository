interface TechnologiesSectionProps {
  title: string;
  technologies: string[];
}

const TechnologiesSection = ({
  title,
  technologies,
}: TechnologiesSectionProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

      <ul className="flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="break-words rounded-lg border px-4 py-2 text-sm"
          >
            {technology}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechnologiesSection;
