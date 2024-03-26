import { Container } from "../layouts";

const NotFound = () => {
  return (
    <section className="bg-black mt-24">
      <Container>
        <div className="h-[calc(100vh-6rem)] flex items-center justify-center  text-white">
          <p className="text-white flex items-center gap-5">
            <span className="text-2xl  border-r pr-4">404</span>
            <span>This page could not be found</span>
          </p>
        </div>
      </Container>
    </section>
  );
};
export default NotFound;
