import BasicQuestions from "../components/pages/interview/BasicComponent/basic"
import Counter from "../components/pages/interview/BasicComponent/Counter"
import TodoCRUD from "../components/pages/interview/BasicComponent/TodoCURD"

const interviewRoutes = [

{
 path:"/interview/basic",
 element:<BasicQuestions/>
},

{
 path:"/interview/basic/counter",
 element:<Counter/>
},

{
  path:"/interview/basic/TodoCURD",
 element:<TodoCRUD/>
}
]

export default interviewRoutes