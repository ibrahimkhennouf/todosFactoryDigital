import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext, useState } from "react";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { signin } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const hndlSubmit = (e: any) => {
    e.preventDefault();
    signin(e.currentTarget.email.value, true)
      .then((res: any) => {
        navigate("/");
      })
      .catch((err: any) => {
        setError(true);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Create your todos account:</h1>
      <form onSubmit={hndlSubmit}>
        <input
          placeholder="Email"
          className="p-2 outline-none"
          required
          name="email"
        />
        <Button text="Signup" type="submit" />
      </form>
      {error && (
        <p className="text-red-500">
          Account Not Created Please Try Again Later
        </p>
      )}
      <div>
        <span>You have an account ? </span>
        <Link to={"/login"} className="text-blue-500">
          login
        </Link>
      </div>
    </div>
  );
}
