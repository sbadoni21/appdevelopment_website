import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-[63vh] md:h-[405px] bg-[#13375D]">
      <div className=" text-white bg-[url('/digismall.png')] bg-opacity-0 md:bg-[url('/digi.png')]  bg-no-repeat bg-center  ">
        <div className=" pt-[48px] px-[24px] md:flex md:justify-between md:px-[70px]    lg:flex lg:justify-between  lg:px-[100px]">
          <div className="space-y-5">
            <img src="./navbarlogo.png"  className="w-[140px] h-10"/>
            <p className="text-[14px] md:mr-6 md:w-[28vw] lg:mr-8  lg:w-[30vw] ">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim venia
            </p>
            <div className="flex justify-between md:w-[250px] md:[10px] lg:w-[415px] text-[8px] lg:text-[12px]">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="white"
                      d="M6.857 2.445C8.12 3.366 9.076 4.66 9.89 5.849l.638.938A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.356l.143.304c.35.709.954 1.73 1.863 2.64a9.87 9.87 0 0 0 2.104 1.58l.367.197l.327.162l.146.067l1.355-1.356a1.502 1.502 0 0 1 1.918-.171l1.014.703c1.152.81 2.355 1.733 3.29 2.931a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.534l-.3-.016l-.233-.02l-.258-.03l-.281-.038l-.305-.051l-.326-.064l-.346-.077l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26c-2.403-2.403-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a11.79 11.79 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159M5.93 4.253c-1.072.56-2.11 1.84-2.063 3.121l.02.328l.022.205l.029.23l.04.253l.051.277l.065.298l.08.32l.096.339l.114.358c.042.122.086.247.134.375l.154.392l.176.407c.628 1.382 1.652 3 3.325 4.672c1.672 1.672 3.29 2.697 4.672 3.325l.407.176l.392.154c.128.048.253.092.375.134l.358.114l.34.096l.319.08l.298.065l.277.051l.254.04l.23.03l.204.02l.328.02c1.264.047 2.554-.985 3.112-2.043c-.712-.835-1.596-1.52-2.571-2.21l-.748-.521l-.19.199l-.406.443l-.215.226c-.586.597-1.27 1.104-2.09.773l-.226-.095l-.276-.124l-.154-.073l-.338-.169l-.371-.2a11.866 11.866 0 0 1-2.567-1.925a11.867 11.867 0 0 1-1.925-2.567l-.2-.37l-.17-.339l-.196-.43L7 10.48c-.311-.769.117-1.418.664-1.98l.224-.22l.557-.513l.2-.19l-.473-.693c-.703-1.02-1.39-1.94-2.243-2.632Zm9.063 1.787l.116.013a3.5 3.5 0 0 1 2.858 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .232-1.983M15 3a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L19 9a3.998 3.998 0 0 0-3.738-3.991L15 5a1 1 0 1 1 0-2"
                    />
                  </g>
                </svg>
                <div>
                  <p>Have a question? </p>
                  <p>310-437-2766</p>
                </div>
              </div>

              <div className="flex  gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    fill-rule="evenodd"
                    d="M3.879 5.879C3 6.757 3 8.172 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-2.828 0-4.243-.879-5.121C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879m2.676 2.289a1 1 0 0 0-1.11 1.664l5.446 3.63a2 2 0 0 0 2.218 0l5.446-3.63a1 1 0 0 0-1.11-1.664L12 11.798z"
                    clip-rule="evenodd"
                  />
                </svg>

                <div>
                  <p>Contact us at</p>
                  <p>unreal@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[14px] md:text-[16px] md:w-[340px] lg:text-[16px] lg:w-[380px] pt-4 ">
            <div className="space-y-5">
              <p>SITE MAP</p>
              <p>
                {" "}
                <Link to={"/"}>Home</Link>
              </p>
              <p>
                <Link to={"/about"}>About Us</Link>
              </p>
              <p>
                <Link to={"/Contact"}>Contact</Link>
              </p>
            </div>
            <div className="space-y-5">
              <p>FOLLOW US</p>
              <p className="flex gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                    />
                  </svg>
                </div>{" "}
                <div>Facebook</div>
              </p>
              <p className="flex gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fill-rule="evenodd"
                      d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>YouTube</div>
              </p>
              <p className="flex gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15l5-3l-5-3z" />
                    </g>
                  </svg>
                </div>
                <div> Instagram</div>
              </p>
            </div>
            <div className="space-y-5 text-[10px] md:text-[16px] lg:text-[16px] md:hidden  lg:hidden">
              <p>Copyright © 2024</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-between md:py-[40px] md:px-[90px] lg:flex lg:justify-between  lg:py-[48px] lg:px-[100px]">
          <div>
            <p>Copyright © 2024</p>
          </div>
          <div className="flex justify-between w-[300px]">
            <div>
              <p>Terms & Conditions</p>
            </div>
            <div>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
