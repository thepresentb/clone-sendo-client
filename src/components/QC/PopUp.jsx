export const PopUp = ({ setShowPopUp }) => {
  return (
    <div style={{ animation: `fadeIn 0.2s` }}>
      <div className="flex">
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="flex m-auto overflow-x-hidden overflow-y-auto fixed h-modal md:h-fit w-full sm:w-fit top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
        >
          <div
            className="absolute z-50 right-0 top-0 font-bold text-2xl text-slate-100 cursor-pointer"
            onClick={() => setShowPopUp(false)}
          >
            [X]
          </div>
          <img className="w-[400px]" src="https://media3.scdn.vn/img4/2023/05_11/aGw5nUw2owoGxwyqCz7g.png" alt="" />
        </div>
      </div>
      <div className={`opacity-70 fixed inset-0 z-40 bg-black `}></div>
    </div>
  );
};
