import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  title: string;
}

const Main = ({ children, title }: MainProps) => {
  return (
    <main>
      <h1 className="sr-only">{title}</h1>
      {children}
    </main>
  );
};

export default Main;
