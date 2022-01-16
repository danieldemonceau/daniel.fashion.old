import meta from "../data/meta";

const Footer = () => {
  const domainName = meta.domainName;
  return (
    <>
      <div className="h-5 align-bottom text-slate-200 text-xs text-right align-right">
        <a href={`https://${domainName}`}>
          2022, daniel.<strong>fashion</strong>
        </a>
      </div>
    </>
  );
};

export default Footer;
