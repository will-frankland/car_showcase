"use client"
import { useState, Fragment } from "react";

// Next Imports
import Image from "next/image";
import { useRouter } from "next/navigation";

// HeadlessUi Imports
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  return (
    <div>
      Custom Filter
    </div>
  )
}

export default CustomFilter
