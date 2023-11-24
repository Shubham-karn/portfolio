import React, { useEffect, useState} from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(typeof window !== 'undefined');
    }, []);
    return (
        <>
        <div className="text-gray-300 flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center">
                <span className="purple">Github</span> Contributions</h1>
            <p className="text-center text-xl mt-3 mx-3">
            I am a passionate <span className="purple">developer</span> and I love to contribute to <span className="purple">open source
            projects</span>
            </p>
        </div>
        </div>
        <div className="text-gray-300 flex flex-col justify-center items-center mt-10 mx-10 overflow-auto">
        {isBrowser && (
            <GitHubCalendar
                username="shubham-karn"
                blockSize={15}
                blockMargin={5}
                fullYear={true}
                colorScheme="dark"
                fontSize={16}
                showWeekdayLabels={true}
            />
        )}
        </div>
        </>
    );
}

export default Github;