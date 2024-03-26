import { Link } from "react-router-dom";

const FooterNavText = ({ title, route }) => {
  return (
    <div className="text-[#ADB3AB] mx-3 mt-1 font-poppins capitalize text-[11px] flex gap-7">
      {route ? (
        <Link to={`${route && route}`}>
          <span className="font-inter">{`${title}`}</span>
        </Link>
      ) : (
        <span className="font-inter">{`${title}`}</span>
      )}

      <span className="text-[#3C403C] font-bricolage font-extralight">/</span>
    </div>
  );
};
export default FooterNavText;
