import { Link } from "components/documentation";

const QAS = [
  {
    question:
    "Q1. What is a resume builder? Why resume builder is better than resume template doc?",
  answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          Re.sume saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets Re.sume apart from other resume builders and templates?",
    answer: (
      <>
        <p>
        
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. India-Specific Best Practices – Unlike global resume builders, Re.sume is tailored for the Indian job market. It avoids unnecessary sections like references and follows a simple, ATS-friendly, single-column format.
          </span>
         
        </p>
        <p>
          <span className="font-semibold">
            2. Re.sume is super privacy focus.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
          data in their databases, Re.sume believes that resume data should
          remain private and accessible only on user’s local machine. Therefore,
          Re.sume doesn’t require sign up to use the app, and all inputted
          data is stored in user’s browser that only user has access to.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created Re.sume and why?",
    answer: (
      <p>
        Re.sume was created by{" "}
        Re.sume was created by Souradeep Saha, Muddabir Rehan Ansari, and Suvodeep Bhattacharjee as a college project in India. While applying for internships and jobs, they noticed many students struggling with resume mistakes and best practices. Wanting to help, they used their skills to build Re.sume—a simple, privacy-focused resume builder that follows Indian job market standards. Their goal is to make it easier for students and professionals to create modern, professional resumes and apply for jobs with confidence.
      </p>
    ),
  },
  {
    question: "Q4. How can I support Re.sume?",
    answer: (
      <>
        <p>
          The best way to support Re.sume is to share your thoughts and
          feedback with us to help further improve it. You can send us an email
          at{" "}
          <Link href="mailto:hello@open-resume.com">hello@open-resume.com</Link>{" "}
          or{" "}
          <Link href="https://github.com/xitanggg/open-resume/issues/new">
            open an issue
          </Link>{" "}
          at our Github repository. Whether you like it or not, we would love to
          hear from you.
        </p>
        <p>
          Another great way to support Re.sume is by spreading the words.
          Share it with your friends, on social media platforms, or with your
          school’s career center. Our goal is to reach more people who struggle
          with creating their resume, and your word-of-mouth support would be
          greatly appreciated. If you use Github, you can also show your support
          by{" "}
          <Link href="https://github.com/xitanggg/open-resume">
            giving the project a star
          </Link>{" "}
          to help increase its popularity and reach.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
