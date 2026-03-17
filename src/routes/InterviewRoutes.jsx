import BasicQuestions from "../components/pages/interview/BasicComponent/basic"
import Counter from "../components/pages/interview/BasicComponent/Counter"
import TodoCRUD from "../components/pages/interview/BasicComponent/TodoCURD"
import ConditionalRendering from "../components/pages/interview/BasicComponent/ConditionalRendering"
import ListRendering from "../components/pages/interview/BasicComponent/ListRendering"

const interviewRoutes = [

{path:"/interview/basic", element:<BasicQuestions/>},
{path:"/interview/basic/counter", element:<Counter/>},
{path:"/interview/basic/TodoCURD", element:<TodoCRUD/>},
{path:"/interview/basic/ConditionalRendering", element:<ConditionalRendering/>},
{path:"/interview/basic/ListRendering", element:<ListRendering/>},

]

export default interviewRoutes