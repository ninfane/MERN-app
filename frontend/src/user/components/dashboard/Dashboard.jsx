import MainNavbar from "../navbar/Navbar";

const Dashboard = ({ children }) => {
    return (
        <div className="container">
            <MainNavbar />
            <div className="mainContainer">
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Dashboard;
