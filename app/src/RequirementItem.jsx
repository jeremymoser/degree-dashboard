import React from 'react';

let inprogressPercent = 0;
let remainingPercent = 0;
let completedPercent = 0;

const RequirementItem = ({ id, title, credits, status, iconname, iconclass, inprogress, remaining, completed }) => {
  inprogressPercent = inprogress == 0 ? "(0%)" : "(" + inprogress / credits * 100 + "%)";
  remainingPercent = remaining == 0? "(0%)" : "(" + remaining / credits * 100 + "%)";
  completedPercent = completed == 0? "(0%)" : "(" + completed / credits * 100 + "%)";
  if( id == 14 || id == 15 || id == 16) { completedPercent = "(100%)"; }
  return (
    <tr key={ id } className={ id % 2 == 0 ? "bg-gray-100" : "bg-white"}>
        <td className="border p-1 md:p-4 text-center hidden md:table-cell">{ id }</td>
        <td className="border p-1 md:p-4">{ title }</td>
        <td className="border p-1 md:p-4 text-center">{ credits }</td>
        <td className="border p-1 md:p-4 whitespace-nowrap text-lg md:text-2xl text-center">
            <i className={ iconclass } title={" " + status + " "} />
          </td>
        <td className="border p-1 md:p-4 text-right hidden md:table-cell">{ inprogress } {inprogressPercent }</td>
        <td className="border p-1 md:p-4 text-right hidden md:table-cell">{ remaining } { remainingPercent }</td>
        <td className="border p-1 md:p-4 text-right hidden md:table-cell">{ completed } { completedPercent }</td>
    </tr>
  )
}

export default RequirementItem