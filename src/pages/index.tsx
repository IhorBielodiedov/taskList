import Head from "next/head";
import { useSelector } from "react-redux";
import type { RootState } from "types/todoSliceTypes";
import TaskList from "~/components/taskList";

export default function Home() {
  const { isDarkTheme } = useSelector((state: RootState) => state.taskSlice);
  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Task list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-start py-[30px] ${
          isDarkTheme ? "bg-[#060607]" : ""
        }`}
      >
        <div className="my-[10px]">
          <p
            className={`${
              isDarkTheme ? "text-white" : "text-gray-900"
            } text-[22px] font-semibold`}
          >
            Список задач
          </p>
        </div>
        <TaskList />
      </main>
    </>
  );
}
