import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { logoutUser } from "../fetchApi/userApi";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const response = await logoutUser();
      // console.log(response);

      dispatch(logout());
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <button
      className="inline-bock px-6 py-2 font-bold text-white bg-red-700 duration-200 hover:bg-red-400 rounded-md"
      onClick={logoutHandler}
    >
      {window.innerWidth < 600 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      ) : (
        "Logout"
      )}
    </button>
  );
}

export default LogoutBtn;
