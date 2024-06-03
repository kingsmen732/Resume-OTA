import style from "../../styles/tecnologies.module.css";
import { useState, useEffect } from "react";

function InsertIcons(icons) {
  const imageElements = icons.map((icon, id) => (
    <img key={id} src={icon} alt="tech icon" />
  ));

  return imageElements;
}

export default function TecnologiesCard(props) {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(InsertIcons(props.icons));
  }, [props.icons]);

  return (
    <div data-aos="fade-up" className={style.card}>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>{imageList}</div>
    </div>
  );
}
