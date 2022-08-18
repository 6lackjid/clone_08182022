import axios from "axios";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    axios
      .get("https://api.github.com/users/6lackjid/repos ")
      .then((response) => console.log(response));
  }, []);
  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container"></div>
      </div>
    </div>
  );
};
