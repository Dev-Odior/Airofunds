const Container = ({ children }) => {
  return (
    <div className={`container mx-auto lg:max-w-screen-2xl`}>{children}</div>
  );
};
export default Container;
