import RegisterForm from "./components/forms/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Error from "./components/Error/Error";
import * as Sentry from "@sentry/react";
import moment from "moment";
const localizer = momentLocalizer(moment);
function App() {
  const error = "Page not found";
  const error404 = "Error 404";
  const myEventsList = [
    {
      title: "Recoger niño",
      start: new Date("June 04, 2022 05:12:00"),
      end: new Date("June 06, 2022 10:12:00"),
      allDay: false,
      resource: "any resource the event may be related to",
    },
    {
      title: "Compra semanal",
      start: new Date("June 12, 2022 18:12:00"),
      end: new Date("June 12, 2022 21:00:00"),
      allDay: false,
      resource: "any resource the event may be related to",
    },
    {
      title: "Hacer el trabajo",
      start: new Date("June 15, 2022 05:12:00"),
      end: new Date("June 15, 2022 10:12:00"),
      allDay: true,
      resource: "any resource the event may be related to",
    },
  ];
  return (
    <div>
      <Calendar
        className="calendario"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route
            path="*"
            element={<Error error={error} error404={error404} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Sentry.withProfiler(App);
