interface IContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const SectionContainer = ({ id, title, children }: IContainerProps) => {
  return (
    <section
      id={id}
      className="flex flex-row gap-5 items-start justify-start w-full"
    >
      <div className="w-[28%] shrink-0">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      {children}
    </section>
  );
};
