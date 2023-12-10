import requirements from './assets/data/requirements'
import reqsdata from './assets/data/requirements_data'
import RequirementItem from './RequirementItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'

let totalReqs = 0;
let requirementsCompleted = 0;
let totalCredits = 0;
let totalInProgress = 0;
let totalRemaining = 0;
let totalCompleted = 0;
let requirementsPercent = 0;
let inprogressPercent = 0;
let remainingPercent = 0;
let completedPercent = 0;

if (requirements.length > 0) {
    for (let i = 0; i < requirements.length; i++) {
        totalReqs = totalReqs + 1;
        if (requirements[i].status == 'Satisfied') {
            requirementsCompleted = requirementsCompleted + 1;
            console.log(requirements[i].title + " is satisfied");
        };
        totalCredits += requirements[i].credits;
        totalInProgress += requirements[i].inprogress;
        totalRemaining += requirements[i].remaining;
        totalCompleted += requirements[i].completed;
    }
    requirementsPercent = (requirementsCompleted == 0) ? "0.00%" : (requirementsCompleted / totalReqs * 100).toFixed(2) + "%";
    inprogressPercent = (totalInProgress == 0) ? "0.00%" : (totalInProgress / totalCredits * 100).toFixed(2) + "%";
    remainingPercent = (totalRemaining == 0)? "0.00%" :  (totalRemaining / totalCredits * 100).toFixed(2) + "%";
    completedPercent = (totalCompleted == 0)? "0.00%" : (totalCompleted / totalCredits * 100).toFixed(2) + "%";
}

const Requirements = () => {
  return (
    <>
        <div className="mt-5">
            <div className="w-100">
                <div className="text-left p-6">
                    <div className="border-solid border-b borderbottom-pbsc-darkgreen p-1">
                        <h2 className="text-pbsc-darkgreen text-2xl font-semibold">
                            <FontAwesomeIcon icon={ faBarsProgress }  className="text-pbsc-gold mr-3" />
                            Degree Requirements
                        </h2>
                    </div>
                    <div className="mt-7 min-w-full">
                        <table className="w-full table-auto">
                            <thead className="table-sticky">
                                <tr className="font-semibold border whitespace-nowrap">
                                    <td className="bg-pbsc-green col-span-1 md:col-span-2 p-1 md:p-4 text-white text-md md:text-lg hidden md:table-cell"></td>
                                    <td className="bg-pbsc-green col-span-1 md:col-span-2 p-1 md:p-4 text-white text-md md:text-lg">Requirement</td>
                                    <td className="bg-pbsc-green p-1 md:p-4 text-white text-md md:text-lg">Credits</td>
                                    <td className="bg-pbsc-green p-1 md:p-4 text-white text-md md:text-lg">Status</td>
                                    <td className="bg-pbsc-green p-1 md:p-4 text-right text-white text-md md:text-lg hidden md:table-cell">In Progress</td>
                                    <td className="bg-pbsc-green p-1 md:p-4 text-right text-white text-md md:text-lg hidden md:table-cell">Remaining</td>
                                    <td className="bg-pbsc-green p-1 md:p-4 text-right text-white text-md md:text-lg hidden md:table-cell">Completed</td>
                                </tr>
                            </thead>
                            <tbody>
                                { requirements.map(req => (
                                <RequirementItem
                                    key = { req.recordid }
                                    id = { req.id }
                                    title = { req.title }
                                    credits = {req.credits }
                                    status = { req.status }
                                    iconname = { req.iconname }
                                    iconclass = { req.iconclass }
                                    inprogress = { req.inprogress }
                                    remaining = { req.remaining }
                                    completed = { req.completed }
                                />
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold border">
                                    <td className="bg-pbsc-green p-2 md:p-4 text-white text-md md:text-lg hidden md:table-cell"></td>
                                    <td className="bg-pbsc-green p-2 md:p-4 text-white text-md md:text-lg">Total Requirement(s): { totalReqs }</td>
                                    <td className="bg-pbsc-green p-2 md:p-4 text-white text-md md:text-lg text-center">{ totalCredits }</td>
                                    <td className="bg-pbsc-green p-2 md:p-4 text-white text-md md:text-lg text-center" title={ " " + requirementsPercent + " "}>{ requirementsCompleted }<div className="percentage">{ totalReqs }</div></td>
                                    <td className="bg-pbsc-green p-2 md:p-4 text-center text-white text-md md:text-lg hidden md:table-cell">{ totalInProgress }<div className="percentage">{ inprogressPercent }</div></td>
                                    <td className="bg-pbsc-green p-2 md:p-4 text-center text-white text-md md:text-lg hidden md:table-cell">{ totalRemaining }<div className="percentage">{ remainingPercent }</div></td>
                                    <td className="bg-pbsc-green p-2 md:p-4 text-center text-white text-md md:text-lg hidden md:table-cell">{ totalCompleted }<div className="percentage">{ completedPercent }</div></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Requirements