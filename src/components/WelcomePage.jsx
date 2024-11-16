import { useState } from "react";

const WelcomePage = () => {
  const [task, setTask] = useState();

  return (
    <div className="welcome__Page m-3">
      <h1 className="text-bg-primary p-3">WelcomePage</h1>
      <div>
        <h3>
          Login to{" "}
          <span style={{ fontSize: "30px", fontFamily: "Nunito" }}>
            {" "}
            SampleBankCom{" "}
          </span>{" "}
        </h3>
        <div className="text-bg-light p-3">
          <h6>Enter User ID</h6>
          <h6>Enter Password</h6>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
