"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+91 7893746567" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "k.v.akshay111@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Hyderabad, Telangana",
  },
];

const Contact = () => {
  const form = useRef();
  let [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    service: "",
    content: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_1782suv",
        "template_j6lf6bk",
        form.current,
        "GofgZx2Ly1tQpMVjk"
      );
      console.log(form.current);
      console.log(formData);
      alert("Email sent successfully!");
      /*toast.success("Email sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });*/
      console.log("SUCCESS!");
    } catch (error) {
      /*toast.error(
        "Failed to send email. Please try again later or Email me at k.v.akshay111@gmail.com",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );*/
      alert("Failed to send email. Please try again later or Email me at k.v.akshay111@gmail.com");
      console.error("FAILED...", error.text);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        width={500}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container mx-auto mt-[70px]">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={form}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h2 className="font-semibold text-accent hover:text:accent-hover text-[32px]">
                Let's Work Together!
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="phoneno"
                  placeholder="Phone Number"
                  value={formData.phoneno}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Select onValueChange={handleSelectChange} name="service">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="web dev">Web Development</SelectItem>
                      <SelectItem value="ml">Machine Learning</SelectItem>
                      <SelectItem value="dl">Deep Learning</SelectItem>
                      <SelectItem value="genai">Generative AI</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="mt-5 min-h-[100px]"
                  name="content"
                  placeholder="Content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit">SEND</Button>
            </form>
          </div>
          <div className="order-1 xl:order-none flex-1 flex items-center xl:justify-end mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="h-[32px] w-[32px] xl:w-[72px] xl:h-[72px] bg-primary text-accent hover:text-primary hover:bg-accent-hover rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/60">{item.title}</span>
                    <span className="text-white">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
