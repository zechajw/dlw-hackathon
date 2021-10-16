import { FC } from "react";
import Image from "next/image";

const Technologies: FC = () => {
  return (
    <div id="technologies" className="pt-32">
      <h1 className="heading">Technologies</h1>
      <h2 className="mt-16 subheading">AI/ML Models and Data Analysis</h2>
      <p className="mt-8 paragraph">
        Our Natural Language Processing (NLP) ML model was adapted from a{" "}
        <a
          href="https://huggingface.co/nlptown/bert-base-multilingual-uncased-sentiment"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline"
        >
          pre-trained Pytorch model
        </a>{" "}
        used to gauge customer sentiment in product reviews. Using this model,
        we extracted positive and negative keywords from the chats and utilized
        it as one of the measurements to predict the interest of the other
        party. The score ranges from 1 to 5, where 1 indicates a conversation
        with negative energy, while 5 indicates a conversation with sparks
        flying{" "}
        <span role="img" aria-label="Sparks emoji">
          ✨
        </span>
        .
      </p>
      <p className="mt-8 paragraph">
        The <span className="font-bold text-ai-300">Pytorch</span> ML model is
        hosted on the cloud with{" "}
        <span className="font-bold text-ai-300">AWS Lambda</span> and{" "}
        <span className="font-bold text-ai-300">
          AWS Elastic File System (EFS)
        </span>
        . When users upload their chat history, they receive their predictions
        using FastAPI which provides a Rest API to link the frontend to the
        model.
        <p className="mt-4 text-xl paragraph">
          (Unfortunately, due to the size of the model, we were unable to host
          the Pytorch model onto the cloud. The code is still in the GitHub
          repository, though the frontend is currently rendering randomly
          generated data into the charts and dashboard)
        </p>
      </p>
      <div className="flex w-full">
        <div className="px-6 pt-4 mx-auto mt-8 bg-white rounded-lg bg-opacity-90">
          <Image
            src="/images/software-archi.svg"
            alt="Software architecture diagram"
            height={157}
            width={1000}
            layout="fixed"
          />
        </div>
      </div>
      <p className="mt-8 paragraph">
        However, we quickly became aware that sentiment analysis alone is
        insufficient due to the multifaceted nature of attraction. Therefore, we
        did even more data analysis through using{" "}
        <span className="font-bold text-ai-300">Matplotlib</span> to parse the
        chats and calculating the average response time for each person for each
        day. With this additional data, we were able to do a weighted average
        between all our data points to come up with an indication of interest{" "}
        <span role="img" aria-label="Heart eyes emoji">
          😍
        </span>
        .
      </p>
      <h2 className="mt-16 subheading">
        Front End Technologies and Data Visualization
      </h2>
      <p className="mt-8 paragraph">
        We utilized <span className="font-bold text-ai-300">Next.js</span>,{" "}
        <span className="font-bold text-ai-300">TypeScript</span> and{" "}
        <span className="font-bold text-ai-300">Tailwind CSS</span> for the
        frontend. Next.js has static-site generation capabilities coupled with
        client-side rendering to ensure that the static portions of the website
        are easily indexed by web crawlers and load quickly while the analyzer
        renders with low response times. TypeScript helps us in our development
        to prevent bugs as the project scales while increasing efficiency with
        intellisense{" "}
        <span role="img" aria-label="Laptop emoji">
          💻
        </span>
        .
      </p>
      <p className="mt-8 paragraph">
        The graphs are drawn with the{" "}
        <span className="font-bold text-ai-300">Recharts</span> library that
        utilizes D3 under the hood. With this, we are able to plot out multiline
        charts so that users can more quickly observe trends in their day-to-day
        conversations with the other party.
      </p>
      <h2 className="mt-16 subheading">GitHub</h2>
      <p className="mt-8 paragraph">
        <a
          className="text-blue-400 underline"
          href="https://github.com/zechajw/dlw-hackathon"
          target="_blank"
          rel="noreferrer"
        >
          Front End GitHub Repository
        </a>
        <br />
        <br />
        <a
          className="text-blue-400 underline"
          href="https://github.com/zechajw/dlw-hackathon"
          target="_blank"
          rel="noreferrer"
        >
          Pytorch ML Model and Data Analysis Repository
        </a>
      </p>
    </div>
  );
};
export default Technologies;
