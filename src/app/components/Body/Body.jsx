import styels from "./Body.module.css";

const body = () => {
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
        <div>
          The Only Cryptocurrency Exchange You Need Our trading platform has
          zero fees, instant payment feature, device authorization for added
          security, allows you to communicate 24/7 with our exceptional customer
          support, has an incomparable help center that answers all your
          questions, and real-time price update. What’s not to love?
        </div>
      </div>
    </div>
  );
};
export default body;
