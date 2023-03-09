import { AVAILABLE_WIDGETS } from "../WidgetsSelector";
import Notes from "./notes/Notes";
import Task from "./tasks/Task";
import WorkTimer from "./work-timer/WorkTimer";

export const widgetValueComponentMap = {
  [AVAILABLE_WIDGETS.NOTES]: <Notes />,
  [AVAILABLE_WIDGETS.TASKS]: <Task />,
  [AVAILABLE_WIDGETS.WORK_TIMER]: <WorkTimer />,
};
