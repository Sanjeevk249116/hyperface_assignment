import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_top">
        <div>
          <h1>
            Hey <span>{"Anirudh "}</span> 👋
          </h1>
         
        </div>
        <div>
        <img src="https://i.ibb.co/QJdvHQd/image-1.png" alt="user_image" />
        </div>
      </div>
      <div className="listdata"> <p>It's nice day to learn something new</p></div>
      <div className="navbar2">
            <p>Join and help us in building AirVoice!</p>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12" fill="none">
                    <path d="M5.11348 5.0932C4.8343 5.0932 4.61389 5.3383 4.61389 5.63732C4.61389 5.93634 4.8392 6.18144 5.11348 6.18144C5.39267 6.18144 5.61308 5.93634 5.61308 5.63732C5.61797 5.3383 5.39267 5.0932 5.11348 5.0932ZM6.90124 5.0932C6.62206 5.0932 6.40165 5.3383 6.40165 5.63732C6.40165 5.93634 6.62695 6.18144 6.90124 6.18144C7.18042 6.18144 7.40083 5.93634 7.40083 5.63732C7.40083 5.3383 7.18042 5.0932 6.90124 5.0932Z" fill="white" />
                    <path d="M9.28158 0.980408H2.71832C2.16485 0.980408 1.71423 1.43139 1.71423 1.99021V8.61767C1.71423 9.17649 2.16485 9.62747 2.71832 9.62747H8.2726L8.01301 8.72061L8.63995 9.30394L9.2326 9.85296L10.2857 10.7843V1.99021C10.2857 1.43139 9.83505 0.980408 9.28158 0.980408ZM7.39097 7.38237C7.39097 7.38237 7.21464 7.17159 7.0677 6.98531C7.70934 6.80394 7.95423 6.40198 7.95423 6.40198C7.75342 6.53433 7.5624 6.62747 7.39097 6.69119C7.14607 6.79414 6.91097 6.86276 6.68076 6.90198C6.21056 6.99021 5.77954 6.9657 5.41219 6.89708C5.13301 6.84315 4.89301 6.76472 4.69219 6.68629C4.57954 6.64217 4.45709 6.58825 4.33464 6.51963C4.31995 6.50982 4.30525 6.50492 4.29056 6.49512C4.28076 6.49021 4.27587 6.48531 4.27097 6.48041C4.1828 6.43139 4.13383 6.39708 4.13383 6.39708C4.13383 6.39708 4.36893 6.78923 4.99097 6.97551C4.84403 7.16178 4.6628 7.38237 4.6628 7.38237C3.58036 7.34806 3.16893 6.63727 3.16893 6.63727C3.16893 5.05884 3.87423 3.77943 3.87423 3.77943C4.57954 3.25002 5.25056 3.26472 5.25056 3.26472L5.29954 3.32355C4.41791 3.57845 4.01138 3.9657 4.01138 3.9657C4.01138 3.9657 4.11913 3.90688 4.30036 3.82355C4.82444 3.59315 5.24076 3.52943 5.41219 3.51472C5.44158 3.50982 5.46607 3.50492 5.49546 3.50492C5.79423 3.4657 6.13219 3.4559 6.48485 3.49511C6.95015 3.54904 7.44974 3.68629 7.95913 3.9657C7.95913 3.9657 7.57219 3.59806 6.73954 3.34315L6.80811 3.26472C6.80811 3.26472 7.47913 3.25002 8.18444 3.77943C8.18444 3.77943 8.88974 5.05884 8.88974 6.63727C8.88974 6.63727 8.47342 7.34806 7.39097 7.38237Z" fill="white" />
                </svg>
                <span>Community</span>
            </button>
        </div>
    </div>
  );
}

export default Navbar;
