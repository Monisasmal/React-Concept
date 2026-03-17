import BasicQuestions from "../components/pages/interview/BasicComponent/basic"
import Counter from "../components/pages/interview/BasicComponent/Counter"
import TodoCRUD from "../components/pages/interview/BasicComponent/TodoCURD"
import ConditionalRendering from "../components/pages/interview/BasicComponent/ConditionalRendering"
import ListRendering from "../components/pages/interview/BasicComponent/ListRendering"

import UiQuestions from "../components/pages/interview/UIComponent/basic"
import Accordion from "../components/pages/interview/UIComponent/Accordion"

const interviewRoutes = [

{path:"/interview/basic", element:<BasicQuestions/>},
{path:"/interview/basic/counter", element:<Counter/>},
{path:"/interview/basic/TodoCURD", element:<TodoCRUD/>},
{path:"/interview/basic/ConditionalRendering", element:<ConditionalRendering/>},
{path:"/interview/basic/ListRendering", element:<ListRendering/>},

{path:"/interview/ui", element:<UiQuestions/>},
{path:"/interview/ui/Accordion", element:<Accordion/>},

]

export default interviewRoutes