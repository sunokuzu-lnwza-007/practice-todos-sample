import styles from "./style.module.css";

const NotFound = () => {
  return (
    <>
      <title>Not Found Page 404</title>;
      <div className={styles.container_wraper}>
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <div className="p-12 m-3 sm:p-32">
            <p className="text-6xl text-gray-700">404 404</p>
            <p className="text-5xl text-gray-700">Not Found Pages</p>
            <p className="text-gray-500">
              Not Found Pages Not Found Pages Not Found Pages
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
