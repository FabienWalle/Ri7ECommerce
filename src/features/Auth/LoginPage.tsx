
import Spinner from "@/components/Spinner";
import { useLoginMutation } from "@/store/api/authSlice";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({
        username: "mor_2314",
        password: "83r5^_"
      }).unwrap()
      if (response.token) {
        localStorage.setItem("token", response.token);
        navigate('/main');
      } else {
        console.log("Token not found in the response");
      }
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">DaisyUI</h1>
        <form className="space-y-4" onSubmit={e => {
          e.preventDefault();
          handleLogin();
        }}>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input type="text" placeholder="Email Address" className="w-full input input-bordered" autoComplete="off" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password"
              className="w-full input input-bordered" autoComplete="off" />
          </div>
          <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
          <div>
            <button className="btn btn-block" type="submit">
              {isLoading ? <Spinner isLoading={isLoading} loaderType="spinner" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage