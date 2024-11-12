/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import SectionWrapper from "../../SectionWrapper";
import HeadingText from "../HeadingText";

export default function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "60-min-meeting" });
      cal("ui", {
        styles: { branding: { brandColor: "#818cf8" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <SectionWrapper id="calendar">
      <div className="max-w-2xl mx-auto text-center space-y-4 ">
        <HeadingText text="Schedule Your Meeting" />
        <p className="text-lg text-gray-600">
          Book a 60-minute slot at your convenience. Select an available date
          and time below.
        </p>
      </div>
      <div className="my-16 max-w-screen-xl mx-auto">
        <Cal
          namespace="60-min-meeting"
          calLink="infincode/60-min-meeting"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
        <p className="text-base text-center text-gray-600">
          If having any issue scheduling form the form above,{" "}
          <a
            href="https://cal.com/infincode"
            className="text-indigo-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Click Here To Book</strong>
          </a>{" "}
        </p>
      </div>
    </SectionWrapper>
  );
}
