import { Template as Page } from "../components/pageTemplate";
import { Button } from "../components/button";
import { bin } from "../assets/icons";
import { BodyText, HeaderBody } from "../components/text";
import {
  action,
  actionContacting,
  businessRelates,
  limitation,
  exclusions,
  legalDispute,
  severability,
  businessTransaction,
  restrictedActivities,
  aup,
  disclaimer,
  indemnity,
  miscellaneous,
} from "../db/privacypolicy";

const Ul = ({ arr, children, type }) => {
  return (
    <ul className={`bodyText ${type ? type : "list-decimal"} list-inside`}>
      {children}
      {arr?.map((each, index) => {
        return <li key={index}>{each}</li>;
      })}
    </ul>
  );
};

export const TitleText = ({ title, desc }) => {
  return (
    <div>
      <h5 className="font-semibold text-lg font-inter mb-3">{title}</h5>
      <BodyText>{desc}</BodyText>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <Page first={`Privacy`} second={`Policy`}>
      <HeaderBody dark={true} first={`Privacy`} second={`Policy`} />
      <BodyText>
        Ellington Funds is committed to managing your Personal Information in
        line with global industry best practices. You can read our Privacy
        Policy to understand how we use your information and the steps we take
        to protect your information.
      </BodyText>

      <TitleText title={disclaimer.title} desc={disclaimer.desc} />

      <TitleText title={`Limitation of Liability`} />
      <Ul obj={limitation}>
        In no event will Ellington Funds or its parent company be liable for
      </Ul>
      <TitleText title={exclusions.title} desc={exclusions.desc} />
      <TitleText title={indemnity.title} desc={indemnity.desc} />
      <TitleText title={`Updates, Modifications & Amendments`} />
      <BodyText>
        We may need to update, modify, or amend our Agent{" "}
        <a>Terms of Service</a> as our technology evolves. We reserve the right
        to make changes to this Agent <a>Terms of Service</a> at any time by
        giving notice to users on this page.We advise that you check this page
        often, referring to the date of the last modification on the page If you
        <a>Terms of Service</a> have any objection to any of the changes to this
        Agent <a>Terms of Service</a>, you must cease using our website and/or
        services immediately.
      </BodyText>

      <TitleText title={legalDispute.title} desc={legalDispute.desc} />

      <TitleText title={severability.title} desc={severability.desc} />
      <TitleText title={miscellaneous.title} desc={miscellaneous.desc} />
      <TitleText title={aup.title} desc={aup.desc} />
      <TitleText title={`Restricted Activities`} />

      <Ul arr={restrictedActivities} type={`list-disc`}>
        You may not use Ellington Funds in connection with any product, service,
        transaction, or activity that:
      </Ul>
      <TitleText title={`Certain Business Categories`} />
      <Ul type={`list-disc`}>
        You may not use Ellington Funds in connection with any product, service,
        transaction, or activity that:
        <li>
          Falls within the Prohibition List of the Nigerian Customs
          Administration of the Federal Republic of Nigeria
        </li>
        <li>Relates to the sale and/or purchase of:</li>
        <ol type="a" className="ml-8">
          {businessRelates.map((each, index) => {
            return <li key={index}>{each}</li>;
          })}
        </ol>
        <li>Relate to transactions that:</li>
        <ol type="a" className="ml-8">
          {businessTransaction.map((each, index) => {
            return <li key={index}>{each}</li>;
          })}
        </ol>
      </Ul>
      <TitleText title={`Actions by Ellington Funds`} />
      <Ul type={`list-disc`}>
        If, in our sole discretion, we believe that you may have engaged in any
        violation of this Acceptable Use Policy, we may (with or without notice
        to you) take such actions as we deem appropriate to mitigate risk
        to Ellington Funds and any impacted third parties and to ensure
        compliance with this Acceptable Use Policy. Such actions may include,
        without limitation
        {action.map((each, index) => {
          return <li key={index}>{each}</li>;
        })}
        <ol type="a" className="ml-8">
          {actionContacting.map((each, index) => {
            return <li key={index}>{each}</li>;
          })}
        </ol>
        <li>
          Assessing against you any fees, penalties, assessments, or expenses
          (including reasonable attorneys’ fees) that we may incur because of
          such violations, which you agree to pay promptly upon notice.
        </li>
      </Ul>
      <TitleText
        title={`Updates, Modifications & Amendments`}
        desc={`We may need to update, modify, or amend our Acceptable Use Policy at any time. We reserve the right to make changes to this Acceptable Use Policy.We advise that you check this page often, referring to the date of the last modification on the page.`}
      />
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
export default PrivacyPolicy;
