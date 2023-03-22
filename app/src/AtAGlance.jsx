import React from 'react';
import requirements from './assets/data/requirements'


// let totalReqs = 0;
let totalCredits = 0;
let totalInProgress = 0;
let totalRemaining = 0;
let totalCompleted = 0;
let inprogressPercent = 0;
let remainingPercent = 0;
let completedPercent = 0;

if (requirements.length > 0) {

    for (let i = 0; i < requirements.length; i++) {
        // totalReqs += 1;
        totalCredits += requirements[i].credits;
        totalInProgress += requirements[i].inprogress;
        totalRemaining += requirements[i].remaining;
        totalCompleted += requirements[i].completed;
    }
    inprogressPercent = (totalInProgress == 0) ? "0.00%" : (totalInProgress / totalCredits * 100).toFixed(2) + "%";
    remainingPercent = (totalRemaining == 0)? "0.00%" : (totalRemaining / totalCredits * 100).toFixed(2) + "%";
    completedPercent = (totalCompleted == 0)? "0.00%" : (totalCompleted / totalCredits * 100).toFixed(2) + "%";
}

function AtAGlance () {
  return (
    <>
        <div className="flex flex-col lg:flex-row text-center gap-4">
                <div className="basis-1/3 grow bg-pbsc-offwhite p-5">
                    <h2 className="text-pbsc-green text-2xl font-bold">
                        Completed
                    </h2>
                    <h2 className="text-6xl text-pbsc-gold font-semibold m-5">
                        { totalCompleted }
                    </h2>
                    <h2 className="text-pbsc-blue text-2xl font-semibold bordertop-pbsc-blue pt-3">
                        { completedPercent }
                    </h2>
                </div>
                <div className="basis-1/3 grow bg-pbsc-offwhite p-5">
                    <h2 className="text-pbsc-green text-2xl font-bold whitespace-nowrap">
                        In Progress
                    </h2>
                    <h2 className="text-6xl text-pbsc-gold font-semibold m-5">
                        { totalInProgress }
                    </h2>
                    <h2 className="text-pbsc-blue text-2xl font-semibold bordertop-pbsc-blue pt-3">
                        { inprogressPercent }
                    </h2>
                </div>
                <div className="basis-1/3 grow bg-pbsc-offwhite p-5">
                    <h2 className="text-pbsc-green text-2xl font-bold">
                        Remaining
                    </h2>
                    <h2 className="text-6xl text-pbsc-gold font-semibold m-5">
                        { totalRemaining }
                    </h2>
                    <h2 className="text-pbsc-blue text-2xl font-semibold bordertop-pbsc-blue pt-3">
                        { remainingPercent }
                    </h2>
                </div>
        </div>
    </>
  )
}

export default AtAGlance