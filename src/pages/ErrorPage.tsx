import { Link } from "react-router-dom";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <section className="flex justify--center align--center error">
      <div className="error__modal">
        <h1>Error! - Page Not Found</h1>
        <p>
          You might have entered a page that has been removed or had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="btn--primary error__btn">
            Go Back To HomePage
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
