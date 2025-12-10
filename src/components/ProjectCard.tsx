import { AnimationWrapper } from "./AnimationWrapper";

interface Props {
  name: string;
  client: string;
  location: string;
  category: string;
  status: string;
  image?: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  name,
  client,
  location,
  category,
  status,
  image,
  onClick
}: Props) => {
  return (
    <AnimationWrapper>
      <button
        onClick={onClick}
        className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white text-left shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      >
        <div className="h-40 bg-slate-100">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-xs text-slate-400">
              Project Image
            </div>
          )}
        </div>
        <div className="p-4 space-y-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-primary">
            {category}
          </p>
          <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
            {name}
          </h3>
          <p className="text-xs text-slate-600">
            {client} • {location}
          </p>
          <p className="text-[11px] text-slate-500 mt-1">Status: {status}</p>
        </div>
      </button>
    </AnimationWrapper>
  );
};
