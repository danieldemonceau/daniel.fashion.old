import meta from "../data/meta";

const Footer = () => {
  const domainName = meta.domainName;
  return (
    <>
      <div>
        <div className="mb-1 text-slate-200 text-xs text-right">
          <a href={`https://${domainName}`}>
            2022, daniel.<strong>fashion</strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
