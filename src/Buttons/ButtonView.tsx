import LinkButton, {Link} from "./LinkButton.tsx";

export default function ButtonView({links, categoryName}: { links: Link[], categoryName: string }) {
  return (
    <>
      <div>{categoryName}</div>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <LinkButton key={index} {...link} extraClass="bg-neutral-100 p-4 rounded-md"/>
        ))}
      </div>
    </>
  )
}