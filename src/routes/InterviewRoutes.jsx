import BasicQuestions from "../components/pages/interview/BasicComponent/basic"
import Counter from "../components/pages/interview/BasicComponent/Counter"
import TodoCRUD from "../components/pages/interview/BasicComponent/TodoCURD"
import ConditionalRendering from "../components/pages/interview/BasicComponent/ConditionalRendering"
import ListRendering from "../components/pages/interview/BasicComponent/ListRendering"
import FormHandling from "../components/pages/interview/BasicComponent/FormHandling"
import ControlledInput from "../components/pages/interview/BasicComponent/ControllInput"
import SearchFilter from "../components/pages/interview/BasicComponent/SearchFilter"

import UiQuestions from "../components/pages/interview/UIComponent/UIbasic"
import Accordion from "../components/pages/interview/UIComponent/Accordion"
import Modal from "../components/pages/interview/UIComponent/Modal"
import MatrixGenerator from "../components/pages/interview/UIComponent/MatrixGenerator"
import Tabs from "../components/pages/interview/UIComponent/Tabs"


const interviewRoutes = [

{path:"/interview/basic", element:<BasicQuestions/>},
{path:"/interview/basic/counter", element:<Counter/>},
{path:"/interview/basic/TodoCURD", element:<TodoCRUD/>},
{path:"/interview/basic/ConditionalRendering", element:<ConditionalRendering/>},
{path:"/interview/basic/ListRendering", element:<ListRendering/>},
{path:"/interview/basic/FormHandling", element:<FormHandling/>},
{path:"/interview/basic/ControllInput", element:<ControlledInput/>},
{path:"/interview/basic/SearchFilter", element:<SearchFilter/>},



{path:"/interview/ui", element:<UiQuestions/>},
{path:"/interview/ui/Accordion", element:<Accordion/>},
{path:"/interview/ui/Modal", element:<Modal/>},
{path:"/interview/ui/MatrixGenerator", element:<MatrixGenerator/>},
{path:"/interview/ui/Tabs", element:<Tabs/>},

]

export default interviewRoutes