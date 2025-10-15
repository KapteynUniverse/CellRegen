import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  title: string;
  srOnly?: boolean;
}

const Main = ({ children, title, srOnly }: MainProps) => {
  return (
    <main>
      <h1 className={`text-center ${srOnly ? "sr-only" : ""}`}>{title}</h1>
      {children}
    </main>
  );
};

export default Main;
