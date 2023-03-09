import React, { useCallback, useMemo } from "react";
import { Select } from "antd";
import { TAVAILABLE_WIDGETS } from "../App";

interface IWidgetsSelectorProps {
  selectedWidgets: string[] | undefined;
  setSelectedWidgets: React.Dispatch<
    React.SetStateAction<TAVAILABLE_WIDGETS[] | undefined>
  >;
}

export enum AVAILABLE_WIDGETS {
  WORK_TIMER = "work_timer",
  NOTES = "notes",
  TASKS = "tasks",
}

export default function WidgetsSelector(props: IWidgetsSelectorProps) {
  const availableWidgets = useMemo(
    () => [
      {
        value: AVAILABLE_WIDGETS.WORK_TIMER,
        label: "Work Timer",
      },
      {
        value: AVAILABLE_WIDGETS.NOTES,
        label: "Notes",
      },
      {
        value: AVAILABLE_WIDGETS.TASKS,
        label: "Tasks",
      },
    ],
    []
  );

  const getOptionsToDisply = useCallback(() => {
    const filteredOptions = availableWidgets?.filter(
      (widget) => !props?.selectedWidgets?.includes(widget?.value)
    );
    return filteredOptions;
  }, [availableWidgets, props?.selectedWidgets]);

  const handleOptionChange = useCallback(
    (selectedWidgetOption: TAVAILABLE_WIDGETS) =>
      props?.setSelectedWidgets((previouslySelectedWidgets) => {
        if (previouslySelectedWidgets)
          return [...previouslySelectedWidgets, selectedWidgetOption];
        return [selectedWidgetOption];
      }),
    [props]
  );

  return (
    <Select
      onSelect={handleOptionChange}
      placeholder="Select widgets to display"
    >
      {getOptionsToDisply()?.map((option) => (
        <Select.Option value={option?.value}>{option?.label}</Select.Option>
      ))}
    </Select>
  );
}
