export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className={'flex flex-col gap-10 max-w-screen-md mx-auto px-5 pt-10 pb-5'}>{children}</div>
  );
}
