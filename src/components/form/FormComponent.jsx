import { Container } from "../../layouts";
import { Heading, FormInput } from "../text";
import { formimg } from "../../assets/images/form";

const FormComponent = () => {
  return (
    <Container>
      <div className="flex md:flex-row flex-col justify-center gap-10  w-full md:w-[90%] mx-auto my-10">
        <img
          src={formimg}
          loading="lazy"
          alt=""
          className="md:h-[30rem] h-[20rem]"
        />
        <form className=" w-full md:w-[32%] px-4 flex flex-col">
          <Heading
            first="Contact"
            second="us"
            dark={true}
            margin="mb-3 md:mb-2 -mt-3"
          />
          <FormInput label="name" placeHolder="[Your Name]" />
          <FormInput label="email" placeHolder="[Your Email]" />
          <FormInput label="phone number" placeHolder="[Your Number]" />

          <div className="w-full ">
            <label className="text-[13px] font-md capitalize">Message</label>
            <textarea className="py-3 px-3  w-full border border-[#ADB3AB] rounded-lg mt-1 " />
          </div>

          <button className="py-3 px-3  w-full border border-[#ADB3AB] rounded-lg mt-1 ">
            Send message
          </button>
        </form>
      </div>
    </Container>
  );
};
export default FormComponent;
