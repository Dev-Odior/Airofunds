import { Template as Page } from "../components/pageTemplate";
import { Button } from "../components/button";
import { bin } from "../assets/icons";
import { terms } from "../db/terms";

const Terms = () => {
  return (
    <Page first={`Terms of`} second={`Service`}>
      {terms.map((each, index) => {
        return (
          <div key={index} className="mb-5">
            <h1 className="text-2xl font-semibold mb-2">{each.heading}</h1>
            {each.content.map((item, index) => {
              if (item.sub && item?.sub.length > 0) {
                return (
                  <ul className="bodyText -mb-1" key={index}>
                    <p className="bodyText -mb-1">{item.desc}</p>
                    {item?.sub?.map((each, index) => {
                      return (
                        <li className="bodyText" key={index}>
                          {each}
                        </li>
                      );
                    })}
                  </ul>
                );
              } else {
                return (
                  <p key={index} className="bodyText m-0">
                    {item.desc}
                  </p>
                );
              }
            })}
          </div>
        );
      })}
      <Button
        name={`delete my account`}
        size={`text-[12px]`}
        route={`/delete-account`}
      >
        <img src={bin} alt="" className="-mt-1" />
      </Button>
    </Page>
  );
};
export default Terms;
