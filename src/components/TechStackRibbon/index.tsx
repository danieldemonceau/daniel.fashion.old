import Image from "next/image";
import TypeScriptLogo from "./logos/ts-logo-128.png";
import NodejsLogo from "./logos/nodejs-new-pantone-black.png";
import ReactLogo from "./logos/React-icon.png";
import TailwindLogo from "./logos/tailwindcss-mark.svg";
import PythonLogo from "./logos/python-logo-only.svg";
import PHPLogo from "./logos/new-php-logo.svg";
import PostgreSQLLogo from "./logos/elephant.png";
import GoLogo from "./logos/Go-Logo_Blue.svg";
import MSQLSLogo from "./logos/mssqls.svg";
import MongoLogo from "./logos/mongo.png";
import GeoserverLogo from "./logos/GeoServer_logo.png";
import QGISLogo from "./logos/128px-QGIS_logo_new.svg.png";
import JavaLogo from "./logos/Java_programming_language_logo.svg";

export const TechStackRibbon = () => {
  return (
    <div className="flex space-x-5 align-middle my-auto justify-center content-center items-center z-10 bg-white py-4">
      <div className="">
        <a href={`https://www.typescriptlang.org/`} target={`_blank`}>
          <Image
            src={TypeScriptLogo}
            alt={`TypeScript Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://nodejs.org`} target={`_blank`}>
          <Image
            src={NodejsLogo}
            alt={`Node.js Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://reactjs.org/`} target={`_blank`}>
          <Image
            src={ReactLogo}
            alt={`React Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://tailwindcss.com/`} target={`_blank`}>
          <Image
            src={TailwindLogo}
            alt={`Tailwind Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://www.python.org/`} target={`_blank`}>
          <Image
            src={PythonLogo}
            alt={`Python Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://www.php.net/`} target={`_blank`}>
          <Image
            src={PHPLogo}
            alt={`PHP Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://www.go.dev/`} target={`_blank`}>
          <Image
            src={GoLogo}
            alt={`Golang Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://www.postgresql.org/`} target={`_blank`}>
          <Image
            src={PostgreSQLLogo}
            alt={`PostgreSQL Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a
          href={`https://www.microsoft.com/en-au/sql-server/sql-server-2019`}
          target={`_blank`}
        >
          <Image
            src={MSQLSLogo}
            alt={`MS SQL Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://www.mongodb.com/`} target={`_blank`}>
          <Image
            src={MongoLogo}
            alt={`Mongo Logo`}
            height={`65`}
            width={`150`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://geoserver.org/`} target={`_blank`}>
          <Image
            src={GeoserverLogo}
            alt={`Geoserver Logo`}
            height={`65`}
            width={`150`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://www.qgis.org/`} target={`_blank`}>
          <Image
            src={QGISLogo}
            alt={`QGIS Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
      <div>
        <a href={`https://www.java.com/`} target={`_blank`}>
          <Image
            src={JavaLogo}
            alt={`Java Logo`}
            height={`65`}
            width={`65`}
            className={`object-contain flex align-middle my-auto justify-center content-center items-center`}
          ></Image>
        </a>
      </div>
    </div>
  );
};
