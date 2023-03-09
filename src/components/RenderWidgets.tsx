import { Card } from "antd";
import React from "react";
import { TAVAILABLE_WIDGETS } from "../App";
import { widgetValueComponentMap } from "./widgets/WidgetValueComponentMap";

interface IRenderWidgetsProps {
  selectedWidgets: string[] | undefined;
  setSelectedWidgets: React.Dispatch<
    React.SetStateAction<TAVAILABLE_WIDGETS[] | undefined>
  >;
}

export default function RenderWidgets(props: IRenderWidgetsProps) {
  return (
    <div>
      {props?.selectedWidgets?.map((item) => {
        return <Card>{(widgetValueComponentMap as any)[item]}</Card>;
      })}
    </div>
  );
}
