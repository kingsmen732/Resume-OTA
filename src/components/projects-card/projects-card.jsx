import style from "../../styles/projects.module.css";

export default function ProjectsCard(props) {
  return (
    <div
      className={style.card}
      data-aos="reveal-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className={style.container_card_image}>
        <img src={props.image} alt="project image" />
      </div>
      <div className={style.container_card_descript}>
        <h3>{props.title.replaceAll("-", " ").toUpperCase()}</h3>
        <p>{props.description}</p>
      </div>
      <div className={style.container_btn}>
        <a className={style.btn_url} href={props.url} target="_blank">
          Know More
        </a>
      </div>
    </div>
  );
}
