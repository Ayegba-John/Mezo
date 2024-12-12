import { useState } from "react";
import styels from "./Body.module.css";

const body = () => {
  const [input, setInput] = useState("mark");
  return (
    <div className={styels.body}>
      <div>
        <input placeholder="Write your name" />
      </div>
      <div className={styels.body_warpper}>
        <div className={styels.body_one}>
          <p>we are about to move here to another level</p>
        </div>
        <div className={styels.body_two}>
          we are ready to ove to the next level
        </div>
        <div className={styels.body_three}>we have made the move</div>
      </div>
    </div>
  );
};
export default body;
