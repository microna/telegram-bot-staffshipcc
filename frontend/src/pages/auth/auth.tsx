import { useAuthState } from 'auth-state/use-auth-state.hook';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export interface IErrorResponse {
  message: string;
}

interface IUserData {
  email: string;
  password: string;
}

const Auth = () => {
  const { setToken } = useAuthState();
  const [isLoading, setIsLoading] = useState(false);
  const [loginErorr, setLoginError] = useState('');
  const login = async ({ email, password }: IUserData) => {
    try {
      const result = await axios.post(backendUrl + 'login', {
        email,
        password,
      });
      return result;
    } catch (e) {
      const axiosError = e as unknown as AxiosError<IErrorResponse>;
      if (
        axiosError.response?.data.message ===
        'Login or Password incorrect (User not finded)'
      ) {
        setLoginError(axiosError.response?.data.message);
        setIsLoading(false);
      }
    }
  };
  const handleLogin = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: { value: string };
      password: { value: string };
    };
    const userData = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    login(userData).then((result) => {
      console.log(result);
      setIsLoading(false);
      if (!result) return;
      console.log(result?.data.token);
      setToken(result?.data.token);
    });
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          {isLoading && <div>loading...</div>}
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              id="email"
              className="p-2 mt-8 rounded-xl border"
              placeholder="Email"
              required={true}
            />
            <div className="relative">
              <input
                id="password"
                type="password"
                className="p-2 rounded-xl border w-full"
                placeholder="Password"
                required={true}
              />
              {/* <IconEye /> */}
            </div>
            <button
              type="submit"
              className="bg-[#002D74] mb-[20px] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Submit
            </button>
          </form>
          {loginErorr}
        </div>
      </div>

      {/* <svgIconPass width={100} height={100} /> */}
    </section>
  );
};

export default Auth;
