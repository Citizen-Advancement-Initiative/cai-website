import { Value } from "../about-us.constants";

type Props = {
  value: Value;
};

export default function ValueCard({ value }: Props) {
  return (
    <article className="border-l-2 pl-6 border-primary">
      <p className="text-xl text-foreground font-medium mb-2">{value.title}</p>
      <p className="text-foreground">{value.description}</p>
    </article>
  );
}
