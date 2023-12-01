"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";

type Question = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, domain experts, and others, collaborate intensively on software projects. A hackathon typically lasts between a day and a week.",
  },
  {
    question: "Team Size?",
    answer: "4 members per team.",
  },
  {
    question: "Do I Need To Pay Any Money To Register?",
    answer:
      "We don't want to monetize learning, community, and innovation. So, There is no participation/registration fees.",
  },
  {
    question:
      "Do I need to have any specific qualifications to be a participant for the hackathon?",
    answer:
      "If you love to code, you are more than welcome to participate in the hackathon.",
  },
  {
    question: "I am a newbie, can I hack?",
    answer:
      "Based on the info provided in the registration form and a telephonic interview (if required), teams will be shortlisted for the hackathon.",
  },
  {
    question: "What is the shortlisting procedure?",
    answer:
      "Firstly make sure all teammates have registered on Devfolio. You can create your team from the devfolio dashboard.",
  },
  {
    question: "Can I start working on my hack before the event?",
    answer:
      "No. In the interest of fairness, students should not be working on their projects before SRM BUILDS begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand.",
  },
];

function FAQsComponent() {
  return (
    <div className="flex justify-center" id="faqs">
      <motion.div
        className="mt-4 flex w-[min(100%,_80rem)] flex-col items-center justify-center gap-8 px-4 py-16 md:px-8 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <h1 className="text-center text-4xl font-extrabold md:text-5xl">
          <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
            FAQs
          </span>
        </h1>
        <Accordion className="w-full" variant="splitted">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              title={question.question}
              className="w-full text-lg font-semibold"
            >
              <p className="text-base">{question.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}

export default FAQsComponent;
