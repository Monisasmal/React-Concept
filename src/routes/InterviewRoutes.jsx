import BasicQuestions from "../components/pages/interview/BasicComponent/basic"
import Counter from "../components/pages/interview/BasicComponent/Counter"
import TodoCRUD from "../components/pages/interview/BasicComponent/TodoCURD"
import ConditionalRendering from "../components/pages/interview/BasicComponent/ConditionalRendering"
import ListRendering from "../components/pages/interview/BasicComponent/ListRendering"

import UiQuestions from "../components/pages/interview/UIComponent/UIbasic"
import Accordion from "../components/pages/interview/UIComponent/Accordion"
import Modal from "../components/pages/interview/UIComponent/Modal"
import FormHandling from "../components/pages/interview/BasicComponent/FormHandling"

const interviewRoutes = [

{path:"/interview/basic", element:<BasicQuestions/>},
{path:"/interview/basic/counter", element:<Counter/>},
{path:"/interview/basic/TodoCURD", element:<TodoCRUD/>},
{path:"/interview/basic/ConditionalRendering", element:<ConditionalRendering/>},
{path:"/interview/basic/ListRendering", element:<ListRendering/>},
{path:"/interview/basic/FormHandling", element:<FormHandling/>},

{path:"/interview/ui", element:<UiQuestions/>},
{path:"/interview/ui/Accordion", element:<Accordion/>},
{path:"/interview/ui/Modal", element:<Modal/>},

]

export default interviewRoutes