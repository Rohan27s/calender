import React, { useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective,  Week,  Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();



  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-2xl">
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date()}
        eventSettings={{ dataSource: scheduleObj }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[ Week,Resize, DragAndDrop]} />
      </ScheduleComponent>
        <table
          style={{ width: '100%', background: 'white' }}
        >
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>                
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Scheduler;
