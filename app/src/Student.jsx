import StudentData from './assets/data/student_data'
import StudentInfo from './StudentInfo'
import AtAGlance from './AtAGlance'
import AtAGlanceChart from './AtAGlanceChart'

function Student () {
  return (
    <div className="mt-5">
        <div className="block md:flex md:flex-row">
            <div className="basis-1/2 text-left p-5">
                { StudentData.map(Student => (
                    <StudentInfo
                        key = { Student.id }
                        id = { Student.id }
                        studentid = { Student.studentid }
                        fullname = { Student.fullname }
                        fullflname = { Student.fullflname }
                        fullminame = { Student.fullminame }
                        dob = { Student.dob }
                        address1 = { Student.address1 }
                        address2 = { Student.address2 }
                        city = { Student.city }
                        state = { Student.state }
                        zip = { Student.zip }
                        degree = { Student.major }
                        degreecredits = { Student.degreecredits }
                        residency = { Student.residency }
                    />
                ))}

            </div>
            <div className="basis-1/2 text-left p-5">
                <AtAGlanceChart />                <AtAGlance />
            </div>
        </div>
    </div>
  )
}

export default Student