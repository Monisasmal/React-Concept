import BasicQuestions from "../components/pages/interview/BasicComponent/basic"
import Counter from "../components/pages/interview/BasicComponent/Counter"

const interviewRoutes = [

{
 path:"/interview/basic",
 element:<BasicQuestions/>
},

{
 path:"/interview/basic/counter",
 element:<Counter/>
}

]

export default interviewRoutes