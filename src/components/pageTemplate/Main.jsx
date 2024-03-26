import { Container } from "../../layouts";
import { CallToAction } from "../ui";

const Main = ({ children, hide }) => {
  return (
    <main className="mt-16">
      {children}

      {!hide && (
        <Container>
          <CallToAction />
        </Container>
      )}
    </main>
  );
};
export default Main;
