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
    question: "Do I Need To Pay Any Money To Register ?",
    answer:
      "No. You do not have to pay anything to anyone to register yourself for SRM Builds 4.0",
  },
  {
    question: "Who can apply ?",
    answer:
      "Anyone(must be a college/School student) having a knack of solving real life problems can apply for the hackathon.",
  },
  {
    question: "What Is The Procedure Of Forming A Team ?",
    answer:
      "Firstly make sure all teammates have registered on Devfolio. You can create your team from the devfolio dashboard.",
  },
  {
    question: "What will be the problem statements ?",
    answer:
      "We will announce problem statements for each domain you need to solve along with your mentors when the hackathon starts.",
  },
];

function FAQsComponent() {
  return (
    <div className="flex justify-center bg-background">
      <motion.div
        className="mt-4 flex w-[min(100%,_70rem)] flex-col items-center justify-center gap-12 px-4 py-24 md:px-8 lg:px-12"
        id="faqs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <div className="flex w-full flex-col gap-10">
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
        </div>
      </motion.div>
    </div>
  );
}

export default FAQsComponent;
