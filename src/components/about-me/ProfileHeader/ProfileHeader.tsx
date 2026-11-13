interface ProfileHeaderProps {
  name: string;
  description: string;
}

const ProfileHeader = ({ name, description }: ProfileHeaderProps) => {
  return (
    <header className="space-y-4">
      <h1 className="break-words text-4xl font-bold tracking-tight md:text-5xl">
        {name}
      </h1>

      <p className="break-words text-lg text-muted-foreground">{description}</p>
    </header>
  );
};

export default ProfileHeader;
