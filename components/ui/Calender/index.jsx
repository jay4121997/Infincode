/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import SectionWrapper from "../../SectionWrapper";

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
    <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center space-y-4 ">
        <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
          Schedule Your{" "}
          <span className="text-indigo-600 underline decoration-wavy decoration-indigo-400">
            Meeting
          </span>
        </h2>
        <p className="text-lg text-gray-600">
          Book a 60-minute slot at your convenience. Select an available date
          and time below.
        </p>
      </div>
      <div className="my-20 max-w-screen-xl mx-auto">
        <Cal
          namespace="60-min-meeting"
          calLink="infinicode/60-min-meeting"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </SectionWrapper>
  );
}
