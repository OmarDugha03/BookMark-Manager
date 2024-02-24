import { FC } from "react"

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center w-full lg:px-20">
        <div className="flex-row items-center justify-center w-[80%] p-6 mt-12 h-[80%] space-x-1 border animate-pulse rounded-xl ">
          <div className="flex flex-col space-y-2 resize backdrop-blur-sm">
            <div className="w-11/12 h-6 bg-gray-300 rounded-md "></div>
            <div className="w-10/12 h-6 bg-gray-300 rounded-md "></div>
            <div className="w-9/12 h-6 bg-gray-300 rounded-md "></div>
            <div className="w-9/12 h-6 bg-gray-300 rounded-md "></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
