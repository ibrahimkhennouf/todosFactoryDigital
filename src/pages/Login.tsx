import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext, useState } from "react";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { signin } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const hndlSubmit = (e: any) => {
    e.preventDefault();
    signin(e.currentTarget.email.value, false)
      .then((res: any) => {
        navigate("/");
      })
      .catch((err: any) => {
        setError(true);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Login to your todos account:</h1>
      <form onSubmit={hndlSubmit}>
        <input
          placeholder="Email"
          className="p-2 outline-none rounded-sm"
          type="email"
          name="email"
          required
        />
        <Button text="Login" type="submit" />
      </form>
      {error && <p className="text-red-500">User Not Found Please Signup</p>}
      <div>
        <span>You don't have an account ? </span>
        <Link to={"/signup"} className="text-blue-500">
          signup
        </Link>
      </div>
    </div>
  );
}
