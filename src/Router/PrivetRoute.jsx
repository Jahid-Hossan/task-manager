import { Navigate, useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useAuth();

    console.log(user)

    const location = useLocation();

    if (loading) {
        return <div className="container mx-auto py-[20vh]">
            <Oval
                height={80}
                width={1536}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    }

    if (!user) {
        console.log(!user)
        return <Navigate state={location.pathname} to='/login' />;
    }

    return children;
};

export default PrivetRoute;