import { AnimationWrapper } from "./AnimationWrapper";

interface Props {
  title: string;
  description: string;
  category: string;
}

export const ServiceCard = ({ title, description, category }: Props) => {
  return (
    <AnimationWrapper>
      <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-2">
          {category}
        </p>
        <h3 className="text-base font-semibold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </AnimationWrapper>
  );
};
