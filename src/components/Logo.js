import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <ul>
        <NavLink to="/">
          <motion.svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
            version="1"
            viewBox="0 0 375 375"
          >
            <motion.path
              fill="none"
              d="M4.297-29.844h8.172c3.719 0 6.789.742 9.219 2.219 2.437 1.469 4.21 3.367 5.328 5.688a16.828 16.828 0 011.672 7.359c0 2.898-.68 5.453-2.032 7.672-1.343 2.21-3.148 3.914-5.406 5.11C19-.599 16.55 0 13.906 0h-9.61zm8.828 25.969c2.207 0 4.176-.43 5.906-1.297 1.727-.875 3.082-2.133 4.063-3.781.976-1.656 1.468-3.625 1.468-5.906 0-2.344-.511-4.352-1.53-6.032-1.024-1.675-2.376-2.945-4.063-3.812C17.28-25.566 15.457-26 13.5-26H8.297v22.125zm0 0"
              transform="translate(0 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              fill="none"
              d="M11.36-2.89c1.425 0 2.812-.493 4.156-1.485l1.78 2.844A11.852 11.852 0 0114.345-.11c-1.063.343-2.09.515-3.078.515-1.899 0-3.555-.39-4.97-1.172C4.88-1.546 3.787-2.625 3.017-4c-.774-1.375-1.157-2.93-1.157-4.672 0-1.676.414-3.207 1.25-4.594a9.166 9.166 0 013.454-3.312c1.457-.813 3.054-1.219 4.796-1.219 2.227 0 4.094.656 5.594 1.969 1.5 1.305 2.52 3.125 3.063 5.469L6.484-5.61a5.233 5.233 0 002 2c.844.48 1.801.718 2.875.718zm-.297-11.844c-1.575 0-2.872.554-3.891 1.656-1.012 1.094-1.516 2.496-1.516 4.203 0 .418.016.734.047.953l9.938-3.672c-.407-.937-.993-1.691-1.75-2.265-.762-.582-1.704-.875-2.829-.875zm0 0"
              transform="translate(41.855 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M19.61-17.094L10.483.5h-.203l-9.5-17.594H5.36l5.172 10.907 4.781-10.907zm0 0"
              transform="translate(74.052 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M11.36-2.89c1.425 0 2.812-.493 4.156-1.485l1.78 2.844A11.852 11.852 0 0114.345-.11c-1.063.343-2.09.515-3.078.515-1.899 0-3.555-.39-4.97-1.172C4.88-1.546 3.787-2.625 3.017-4c-.774-1.375-1.157-2.93-1.157-4.672 0-1.676.414-3.207 1.25-4.594a9.166 9.166 0 013.454-3.312c1.457-.813 3.054-1.219 4.796-1.219 2.227 0 4.094.656 5.594 1.969 1.5 1.305 2.52 3.125 3.063 5.469L6.484-5.61a5.233 5.233 0 002 2c.844.48 1.801.718 2.875.718zm-.297-11.844c-1.575 0-2.872.554-3.891 1.656-1.012 1.094-1.516 2.496-1.516 4.203 0 .418.016.734.047.953l9.938-3.672c-.407-.937-.993-1.691-1.75-2.265-.762-.582-1.704-.875-2.829-.875zm0 0"
              transform="translate(105.175 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M7.188-32V0H3.344v-32zm0 0"
              transform="translate(137.372 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M1.86-8.703c0-1.688.406-3.223 1.218-4.61.813-1.382 1.938-2.476 3.375-3.28 1.445-.802 3.082-1.204 4.906-1.204 1.813 0 3.426.402 4.844 1.203 1.414.805 2.516 1.89 3.297 3.266.79 1.375 1.188 2.918 1.188 4.625 0 1.7-.399 3.246-1.188 4.64-.781 1.387-1.89 2.481-3.328 3.282-1.43.789-3.063 1.187-4.906 1.187-1.782 0-3.391-.375-4.829-1.125a8.394 8.394 0 01-3.359-3.203C2.266-5.297 1.86-6.89 1.86-8.703zm3.874.031c0 1.074.239 2.07.72 2.985.487.906 1.148 1.62 1.984 2.14a5.191 5.191 0 002.796.781c1.594 0 2.91-.562 3.954-1.687 1.05-1.133 1.578-2.54 1.578-4.219 0-1.676-.528-3.082-1.578-4.219-1.043-1.144-2.36-1.718-3.954-1.718-1.054 0-1.992.273-2.812.812a5.766 5.766 0 00-1.969 2.156 6.245 6.245 0 00-.719 2.97zm0 0"
              transform="translate(158.631 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M14.156-17.797c1.594 0 3.035.387 4.328 1.156 1.301.774 2.32 1.856 3.063 3.25.738 1.387 1.11 2.985 1.11 4.797 0 1.793-.403 3.371-1.204 4.735a8.07 8.07 0 01-3.297 3.156c-1.398.738-2.965 1.11-4.703 1.11a8.2 8.2 0 01-3.547-.798C8.781-.93 7.875-1.656 7.187-2.562v10.78H3.345v-25.593h3.344l.328 2.89a10.382 10.382 0 013.156-2.39 8.786 8.786 0 013.984-.922zM12.72-2.687c1.07 0 2.066-.25 2.984-.75a5.773 5.773 0 002.203-2.11c.551-.894.828-1.894.828-3 0-1.125-.257-2.14-.765-3.047a5.57 5.57 0 00-2.078-2.156c-.875-.52-1.852-.781-2.922-.781-1.461 0-2.711.406-3.75 1.219-1.031.812-1.711 1.906-2.031 3.28v2.845c.218 1.324.843 2.406 1.875 3.25 1.03.835 2.25 1.25 3.656 1.25zm0 0"
              transform="translate(191.86 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M25.266-17.797c1.644 0 2.957.469 3.937 1.406.977.938 1.492 2.18 1.547 3.72V0h-3.828v-11.266c-.086-2.007-.996-3.07-2.735-3.187a4.27 4.27 0 00-2.656.89c-.781.594-1.398 1.376-1.843 2.344a7.931 7.931 0 00-.704 3.094V0H15.11v-11.266c-.086-2.007-1.023-3.07-2.812-3.187-.961 0-1.836.297-2.625.89-.781.594-1.39 1.383-1.828 2.36a7.475 7.475 0 00-.657 3.11V0H3.345v-17.094h3.469l.28 3.219c.665-1.238 1.567-2.203 2.704-2.89 1.144-.688 2.445-1.032 3.906-1.032 1.375 0 2.531.324 3.469.969.937.648 1.539 1.539 1.812 2.672.72-1.133 1.625-2.024 2.72-2.672a6.936 6.936 0 013.562-.969zm0 0"
              transform="translate(227.07 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M11.36-2.89c1.425 0 2.812-.493 4.156-1.485l1.78 2.844A11.852 11.852 0 0114.345-.11c-1.063.343-2.09.515-3.078.515-1.899 0-3.555-.39-4.97-1.172C4.88-1.546 3.787-2.625 3.017-4c-.774-1.375-1.157-2.93-1.157-4.672 0-1.676.414-3.207 1.25-4.594a9.166 9.166 0 013.454-3.312c1.457-.813 3.054-1.219 4.796-1.219 2.227 0 4.094.656 5.594 1.969 1.5 1.305 2.52 3.125 3.063 5.469L6.484-5.61a5.233 5.233 0 002 2c.844.48 1.801.718 2.875.718zm-.297-11.844c-1.575 0-2.872.554-3.891 1.656-1.012 1.094-1.516 2.496-1.516 4.203 0 .418.016.734.047.953l9.938-3.672c-.407-.937-.993-1.691-1.75-2.265-.762-.582-1.704-.875-2.829-.875zm0 0"
              transform="translate(271.855 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M13.953-17.75c1.594 0 2.91.477 3.953 1.422 1.051.95 1.594 2.183 1.625 3.703V0h-3.89v-11.313c-.055-.957-.34-1.71-.86-2.265-.523-.55-1.308-.844-2.36-.875-1.51 0-2.76.61-3.75 1.828-.991 1.21-1.483 2.746-1.483 4.61V0H3.344v-17.094h3.469l.25 3.313a6.644 6.644 0 012.718-2.906c1.207-.708 2.598-1.063 4.172-1.063zm0 0"
              transform="translate(304.052 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <motion.path
              fill="none"
              d="M8.875-24.61v7.563h4.672V-14H8.875V0H5v-14H1.86v-3.047H5v-7.562zm0 0"
              transform="translate(337.61 290.458)"
              stroke="#5ba3f8"
              strokeWidth="1"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            ></motion.path>
            <path
              id="p12"
              fill="#eee"
              d="M95.016-47.375c0 15.125-3.829 27.023-11.485 35.688-7.648 8.656-18.277 12.984-31.89 12.984-13.918 0-24.657-4.254-32.22-12.766C11.86-19.977 8.079-31.989 8.079-47.5c0-15.383 3.79-27.313 11.375-35.781 7.582-8.469 18.36-12.703 32.328-12.703 13.57 0 24.172 4.312 31.797 12.937 7.625 8.617 11.438 20.508 11.438 35.672zm-75.297 0c0 12.793 2.722 22.496 8.172 29.11 5.445 6.617 13.363 9.921 23.75 9.921 10.468 0 18.375-3.289 23.718-9.875 5.344-6.593 8.016-16.312 8.016-29.156 0-12.719-2.664-22.36-7.984-28.922-5.313-6.57-13.184-9.86-23.61-9.86-10.48 0-18.445 3.31-23.89 9.923-5.45 6.617-8.172 16.234-8.172 28.859zm0 0"
              transform="translate(135.943 175.508)"
            ></path>
            <path
              id="p13"
              fill="#3df0ff"
              d="M95.469 0h-10.86L65.547-63.281c-.906-2.801-1.922-6.332-3.047-10.594-1.117-4.27-1.695-6.836-1.734-7.703-.95 5.7-2.461 11.93-4.532 18.687L37.75 0H26.89L1.75-94.5h11.625l14.938 58.375c2.062 8.188 3.566 15.602 4.515 22.234A161.167 161.167 0 0138-37.03L54.938-94.5h11.64l17.766 57.984c2.07 6.68 3.816 14.22 5.234 22.625.82-6.125 2.375-13.582 4.656-22.375L109.11-94.5h11.625zm0 0"
              transform="translate(126.206 231.692)"
            ></path>
            <path
              id="p14"
              fill="#5ba3f8"
              d="M42.75-47.078c-12.18-2.133-18.266-9.07-18.266-20.813v-24.156c0-10.531-6.199-15.957-18.593-16.281v-11.39c10.05 0 17.953 2.374 23.703 7.124 5.758 4.75 8.64 11.305 8.64 19.656v25.047c0 5.305 1.61 9.2 4.828 11.688 3.227 2.48 8.391 3.773 15.485 3.875v11.547c-6.656 0-11.711 1.218-15.156 3.656-3.438 2.43-5.157 6.48-5.157 12.156V-.156c0 8.344-2.797 14.847-8.39 19.515-5.594 4.676-13.578 7.067-23.953 7.172V15.063c6.062-.106 10.675-1.415 13.843-3.922 3.164-2.512 4.75-6.555 4.75-12.125v-24.313c0-6.226 1.5-10.976 4.5-14.25 3-3.281 7.586-5.469 13.766-6.562zm0 0"
              transform="translate(251.268 199.48)"
            ></path>
            <path
              id="p15"
              fill="#5ba3f8"
              d="M38.89-.984c0 5.57 1.598 9.613 4.797 12.125 3.196 2.507 7.88 3.816 14.047 3.921v11.47c-10.375-.106-18.402-2.481-24.078-7.126-5.68-4.636-8.515-11.156-8.515-19.562V-24.97c0-5.676-1.72-9.726-5.157-12.156-3.437-2.438-8.433-3.656-14.984-3.656v-11.547c7.094-.102 12.223-1.41 15.39-3.922 3.165-2.508 4.75-6.39 4.75-11.64v-25.047c0-8.47 2.946-15.047 8.844-19.735 5.895-4.695 13.813-7.047 23.75-7.047v11.39c-12.562.325-18.843 5.75-18.843 16.282v24.156c0 11.743-6.086 18.68-18.25 20.813v.969c12.164 2.136 18.25 9.074 18.25 20.812zm0 0"
              transform="translate(59.34 199.48)"
            ></path>
          </motion.svg>
        </NavLink>
      </ul>
    </div>
  );
};

export default Logo;