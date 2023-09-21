import { useAuthState } from 'auth-state/use-auth-state.hook';
import axios from 'axios';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

interface IUserData {
  email: string;
  password: string;
}
const login = async ({ email, password }: IUserData) => {
  try {
    const result = await axios.post(backendUrl + 'login', {
      email,
      password,
    });
    return result;
  } catch (e) {
    console.log('error login');
  }
};

const Auth = () => {
  const { setToken } = useAuthState();
  const handleOpenPublicGame = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: { value: string };
      password: { value: string };
    };
    const userData = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    const result = await login(userData);
    if (!result) return;
    console.log(result?.data.token);
    setToken(result?.data.token);
  };
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleOpenPublicGame}>
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
              <svg
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <svgIconPass width={100} height={100} /> */}
    </section>
  );
};

export default Auth;
