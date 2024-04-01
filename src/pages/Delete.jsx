import { useState } from "react";
import { Template as Page } from "../components/pageTemplate";
import { BodyText } from "../components/text";
import { bin } from "../assets/icons";

const Input = ({ label, type }) => {
  return (
    <div>
      <label className="text-[#1A1A1ACC] text-sm mb-4 font-bold">{label}</label>
      <div className="text-sm border rounded-md mt-5 overflow-hidden p-1 border-[#D9D9D999] shadow-lg">
        <input
          type={type}
          className="py-3 px-3 outline-none border-none w-full"
        />
      </div>
    </div>
  );
};

const Delete = () => {
  const [input, setInput] = useState({ email: "", password: "", reason: "" });
  const { email, password, reason } = input;

  const deleteHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Page first={`Account Deletion`} second={`Request`}>
      <BodyText>
        Please fill the form below to request for the deletion of your account
        with Ellington Fund Permanently remove your Personal Account and it's
        data from the Ellington Fund platform.This action is not reversible, so
        please continue with caution.
      </BodyText>
      <form className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <Input label={`Provide Email Address`} type="text" />
          <div className="flex flex-col">
            <label className="text-[#1A1A1ACC] text-sm font-bold">
              Select Reason for deleting account
            </label>
            <select className="text-sm border rounded-md mt-5 py-4 px-3 overflow-hidden p-1 border-[#D9D9D999] shadow-lg"></select>
          </div>
          <Input label={`Provide your password`} type="text" />
        </div>
        <button
          className="px-8 py-2 text-sm   rounded-full
      font-roboto
      font-normal
      uppercase 
      outline-none 
      border
      flex 
      items-center
      justify-center 
      gap-2 "
          onClick={deleteHandler}
        >
          <img src={bin} alt="" />
          Delete Account
        </button>
      </form>
    </Page>
  );
};
export default Delete;
