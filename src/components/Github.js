import React, { useEffect, useState} from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
    const [isBrowser, setIsBrowser] = useState(false);
    const [load, upadateLoad] = useState(0);

  useEffect(() => {
    const changescreen = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    if (screenWidth < 1180 && screenWidth > 1005) {
        upadateLoad(1180);
    }
    else if (screenWidth > 1180) {
      upadateLoad(1);
    }
    else if (screenWidth < 1005 && screenWidth > 800) {
      upadateLoad(1000);
    }
    else if (screenWidth < 800) {
        upadateLoad(0);
    }
    else {
        upadateLoad(0);
    }
  }

  changescreen();
  
  window.addEventListener('resize', changescreen);

  return () => {
    window.removeEventListener('resize', changescreen);
  }
  }, []);

    useEffect(() => {
        setIsBrowser(typeof window !== 'undefined');
    }, []);
    return (
        <>
        <div className="text-gray-300 flex flex-col justify-center items-center mt-10 800:hidden">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center">
                <span className="purple">Github</span> Contributions</h1>
            <p className="text-center text-xl mt-3 mx-3">
            I am a passionate <span className="purple">developer</span> and I love to contribute to <span className="purple">open source
            projects</span>
            </p>
        </div>
        </div>
        <div className="text-gray-300 flex flex-col justify-center items-center mt-10 mx-10 ">
        {isBrowser && load === 1 ? (
    <GitHubCalendar
        username="shubham-karn"
        blockSize={15}
        blockMargin={5}
        fullYear={true}
        colorScheme="dark"
        fontSize={16}
        showWeekdayLabels={true}
    />
) : (
    isBrowser && load === 1180 ? (
        <GitHubCalendar
            username="shubham-karn"
            blockSize={12}
            blockMargin={4}
            fullYear={true}
            colorScheme="dark"
            fontSize={14}
            showWeekdayLabels={true}
        />
    ) : (
        isBrowser && load === 1000 ? (
            <GitHubCalendar
                username="shubham-karn"
                blockSize={8}
                blockMargin={3}
                fullYear={true}
                colorScheme="dark"
                fontSize={10}
                showWeekdayLabels={true}
            />
        ) : (
            <></>
        )
    )
)}
        </div>
        </>
    );
}

export default Github;