import LinkButton, { Link } from './LinkButton.tsx';

export default function ButtonCategoryView(prop: {
  links: Link[];
  categoryName: string;
}) {
  const { links, categoryName } = prop;
  return (
    <div className="w-[330px] flex justify-center flex-col p-4">
      <div className="text-xl text-center font-bold p-3 text-slate-300">
        {categoryName}
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <LinkButton key={index} {...link} />
        ))}
      </div>
    </div>
  );
}
