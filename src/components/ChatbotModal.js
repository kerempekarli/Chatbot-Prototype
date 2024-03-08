import React from "react";

export default function Chatbot() {
  return (
    <div className="">
      <div class="chatbot h-[704px] w-[404px] bg-white rounded-2xl shadow-lg flex flex-col">
        {/* HEADER */}
        <div class="header bg-gradient-to-b from-[#0057FF] to-blue-400 text-white px-4 text-center font-extrabold text-lg py-7 rounded-t-2xl">
          <div className="flex justify-between items-baseline px-2">
            {/* 1th item */}
            <div className="flex items-end">
              <img
                className="content-center rounded-full"
                width={70}
                height={70}
                src="https://media.licdn.com/dms/image/D4D03AQEhhYi4htUIVg/profile-displayphoto-shrink_800_800/0/1679668956322?e=1715212800&v=beta&t=4xcKbZdGjzupdOcVfBBxqW5NuuJfnkH-RxPPHihyvQE"
              ></img>
              <div className="text-left pl-5">
                <div className="text-xl font-medium">Chat with</div>
                <div className="text-xl font-semibold">Kerem Pekarlı</div>
              </div>
            </div>
            {/* END OF 1TH ITEM */}
            {/* 2TH ITEM */}

            <div className="flex mt-5 space-x-3 ">
              <div>
                <svg
                  height="30px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="color-white"
                >
                  <path
                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="40px"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
            {/* END OF 2TH */}
          </div>
        </div>
        {/* END OF HEADER */}

        {/* Chat area */}
        {/* Normal chat */}
        <div className="py-4 px-3 overflow-auto	">
          {" "}
          {/* MEHDİ ESTE */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://ca.slack-edge.com/TB9STAJ94-UB8T0FMB5-c05d1878d746-72"
                />
              </div>
            </div>
            <div className="chat-header">Mehdi</div>
            <div className="chat-bubble bg-gray-100 text-gray-800">
              You were the Chosen One!
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          {/* END OF MEHDİ ESTE  */}
          {/* SHAYAN */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://ca.slack-edge.com/TB9STAJ94-UK90G6D8E-86c8143a06f2-72"
                />
              </div>
            </div>
            <div className="chat-header">Shayan</div>
            <div className="chat-bubble bg-blue-500 text-gray-100">
              Yes I am!
            </div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
          {/* END OF SHAYAN */}
          {/* Navs button */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://ca.slack-edge.com/TB9STAJ94-UB8T0FMB5-c05d1878d746-72"
                />
              </div>
            </div>
            <div className="chat-header">Mehdi</div>
            <div className="chat-bubble bg-gray-100 text-gray-800">
              <div className="mb-2">
                Which category best fits with your experience?
              </div>
            </div>

            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          {/* End of Navs */}
          {/* SHAYAN */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://ca.slack-edge.com/TB9STAJ94-UK90G6D8E-86c8143a06f2-72"
                />
              </div>
            </div>
            <div className="chat-header">Shayan</div>
            <div className="chat-bubble w-full bg-blue-100 text-blue-800">
              <div className="flex flex-col leading-7 items-center roboto-semi font-serif p-2 ">
                <button className="pl-1 py-1 border-white rounded-md bg-blue-500 text-white  hover:text-white hover:bg-blue-700 w-full text-center">
                  Finance
                </button>
                <button className="pl-1 py-1 border-white rounded-md  bg-blue-500 text-white mt-2 hover:text-white hover:bg-blue-700 w-full text-center">
                  Software
                </button>
                <button className="pl-1 py-1 border-white rounded-md  bg-blue-500 text-gray-50 mt-2 hover:text-white hover:bg-blue-700 w-full text-center ">
                  Resourcing
                </button>
              </div>
            </div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
          {/* END OF SHAYAN */}
        </div>
        {/* End of normal chat */}

        {/* End of chat area */}

        <div class="messages flex-1 p-4 overflow-y-auto"></div>
        <div className="border-gray-100 border min-w-full"></div>
        {/* INPUT AREA */}
        <div class="input-area flex pl-5 pr-10 ">
          <input
            type="text"
            className="form-input text-gray-500 bg-white min-h-[60px] w-full p-2 rounded outline-none"
            placeholder="Mesajınızı yazın..."
          />
          <svg
            id="Layer_1_1_"
            style={{ enableBackground: "new 0 0 16 16" }}
            version="1.1"
            viewBox="0 0 16 16"
            width={33}
            className="m-2 mt-4"
            // XML Namespace ile ilgili özellikleri kaldırıldı
          >
            <polygon points="5,9 5,14 9,11 13,16 16,0 0,8 " />
          </svg>
        </div>
        {/* END OF INPUT AREA */}
        <div className="flex items-center justify-between roboto-medium pb-7 py-2 px-8 mr-3 text-right text-gray-400">
          <div className="flex space-x-3">
            <svg
              height="30px"
              viewBox="0 0 24 24"
              fill="#999999"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M6.70504 10.7092C6.8501 10.5689 7.01205 10.4438 7.1797 10.3321C7.50489 10.1153 7.80058 10 8 10C8.19942 10 8.49511 10.1153 8.8203 10.3321C9.07494 10.5018 9.26866 10.6837 9.2931 10.7074C9.68451 11.0859 10.3173 11.0969 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289C10.4723 9.05848 10.2052 8.85164 9.9297 8.66795C9.50489 8.38475 8.80058 8 8 8C7.19942 8 6.49511 8.38475 6.0703 8.66795C5.79505 8.85145 5.52844 9.05816 5.29363 9.29216C4.90926 9.67754 4.90613 10.3203 5.29289 10.7071C5.68258 11.0968 6.31431 11.0972 6.70504 10.7092Z"
                fill="#999999"
              />
              <path
                d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z"
                fill="#999999"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                fill="#999999"
              />
              <path
                d="M14.705 10.7092C14.8501 10.5689 15.0121 10.4438 15.1797 10.3321C15.5049 10.1153 15.8006 10 16 10C16.1994 10 16.4951 10.1153 16.8203 10.3321C17.0749 10.5018 17.2687 10.6837 17.2931 10.7074C17.6845 11.0859 18.3173 11.0969 18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289C18.4723 9.05848 18.2052 8.85164 17.9297 8.66795C17.5049 8.38475 16.8006 8 16 8C15.1994 8 14.4951 8.38475 14.0703 8.66795C13.795 8.85145 13.5284 9.05816 13.2936 9.29216C12.9093 9.67754 12.9061 10.3203 13.2929 10.7071C13.6826 11.0968 14.3143 11.0972 14.705 10.7092Z"
                fill="#999999"
              />
            </svg>

            <svg
              fill="#999999"
              width="25px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 30.34 30.34"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M22.562,12.491c0,0,1.227-0.933,0.293-1.866c-0.934-0.933-1.842,0.271-1.842,0.271l-9.389,9.391
            c0,0-2.199,2.838-3.871,1.122c-1.67-1.718,1.121-3.872,1.121-3.872l12.311-12.31c0,0,2.873-3.165,5.574-0.466
            c2.697,2.7-0.477,5.579-0.477,5.579L12.449,24.173c0,0-4.426,5.113-8.523,1.015s1.066-8.474,1.066-8.474L15.494,6.209
            c0,0,1.176-0.982,0.295-1.866c-0.885-0.883-1.865,0.295-1.865,0.295L1.873,16.689c0,0-4.549,4.989,0.531,10.068
            c5.08,5.082,10.072,0.533,10.072,0.533l16.563-16.565c0,0,3.314-3.655-0.637-7.608s-7.607-0.639-7.607-0.639L6.543,16.728
           c0,0-3.65,2.969-0.338,6.279c3.312,3.314,6.227-0.39,6.227-0.39L22.562,12.491z"
                />
              </g>
            </svg>
          </div>
          <div className="pl-1 flex text-sm items-center">
            <span className="pr-1">Powered by </span>
            <img
              src="https://elay.io/static/img/other/elay.png"
              width={35}
              className="align-middle"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
