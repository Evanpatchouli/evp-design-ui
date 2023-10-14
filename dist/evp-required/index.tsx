export default function EvpRequired({
  className,
  hidden,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return hidden ? (
    <></>
  ) : (
    <div className={`evp-required ${className ?? ""}`.trim()} {...props}>
      {children ?? "*"}
    </div>
  );
}
