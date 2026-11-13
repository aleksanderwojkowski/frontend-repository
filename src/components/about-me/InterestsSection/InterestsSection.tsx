interface InterestsSectionProps {
  title: string;
  interests: string[];
}

const InterestsSection = ({ title, interests }: InterestsSectionProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

      <ul className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <li
            key={interest}
            className="break-words rounded-lg border px-4 py-2 text-sm"
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InterestsSection;
