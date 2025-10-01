type DetailsProps = {
  title: string;
  content: string[];
};

const Details = ({ title, content }: DetailsProps) => {
  return (
    <>
      <details className="block lg:hidden">
        <summary className="cursor-pointer ">{title}</summary>
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </details>

      <div className="hidden lg:block">
        <h3>{title}</h3>
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Details;
