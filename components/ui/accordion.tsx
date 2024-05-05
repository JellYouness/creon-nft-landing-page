"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import border from "@/assets/border.png";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  icon?: any;
  state?: boolean;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-900 py-2", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, icon, state, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "w-full flex flex-1 items-center justify-between gap-4 lg:gap-8 text-start py-4 font-bold lg:text-[1.146vw] transition-all hover:text-main [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>div>div>svg>#border]:fill-white",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-8">
        <div className="relative w-[22vw] md:w-[15vw] lg:w-[8vw]">
          <Image loading="lazy" src={border} alt="Creon" />

          <div className="absolute top-1/2 left-1/2 z-10 flex justify-center items-center -translate-x-1/2 -translate-y-1/2">
            {icon}
          </div>
          {/* bg hexagon */}
          <svg
            className="absolute top-1/2 left-1/2 z-0 flex justify-center items-center -translate-x-1/2 -translate-y-1/2"
            width="50"
            height="56"
            viewBox="0 0 56 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 19.0366C0 16.8543 1.18486 14.8441 3.0941 13.7872L25.0941 1.60862C26.9021 0.607766 29.0979 0.607766 30.9059 1.60862L52.9059 13.7872C54.8151 14.8441 56 16.8543 56 19.0366V42.9634C56 45.1457 54.8151 47.1559 52.9059 48.2128L30.9059 60.3914C29.0979 61.3922 26.9021 61.3922 25.0941 60.3914L3.0941 48.2128C1.18486 47.1559 0 45.1457 0 42.9634V19.0366Z"
              fill="#2a2e33"
            />
          </svg>
          {/* border */}
          <svg
            className="absolute top-1/2 left-1/2 -z-10 flex justify-center items-center -translate-x-1/2 -translate-y-1/2"
            width="62"
            height="70"
            viewBox="0 0 68 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="border"
              d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z"
              className="fill-[#13171D] transition-all duration-[.25s] ease-out"
            />
          </svg>
        </div>
        <div className="w-[45.333vw] md:w-full">{children}</div>
      </div>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ml-28"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
